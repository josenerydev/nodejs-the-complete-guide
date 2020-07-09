const USERS = ['Max', 'José', 'Marcela'];

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Assignment</title></head>
        <body>
          <h1>Hello my friend!</h1>
          <form action="/create-user" method="POST">
            <label>Username: </label>
            <input type="text" name="username" />
            <button type="submit">Create</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    const listUsersComponet = USERS.map(user => `<li>${user}</li>`);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head><title>Assignment</title></head>
      <body>
        <h1>Users</h1>
        <ul>
          ${listUsersComponet.join(' ')}
        </u>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const bodyParsed = Buffer.concat(body).toString();
      const username = bodyParsed.split('=')[1];
      USERS.push(username);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`
      <html>
        <head><title>Assignment</title></head>
        <body>
          <h1>Page not found!</h1>
        </body>
      </html>
    `);
  return res.end();
};

module.exports = requestHandler;