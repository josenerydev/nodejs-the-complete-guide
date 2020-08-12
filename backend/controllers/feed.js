exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/jose.jpg",
        creator: {
          name: "José Ângelo",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);

  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: Date.now().toString(),
      title: title,
      content: content,
      creator: { name: "José Ângelo" },
      createdAt: new Date(),
    },
  });
};
