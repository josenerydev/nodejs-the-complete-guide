Core Modules

http => Launch a server, send requests  
https => launch a ssl server  
fs  
path  
os

Streams & Buffers  
Incoming Request  
stream = chunks of data until fully parsed
buffer = hold a lot of chunks  
Your code work with chunks of data! (Buffer).

# The Event loop

## Sequence

Timer (Execute setTimeout, setInterverl Callbacks)  
Pending Callbacks (Execute I/O - related Callbacks that were deferred) - I/O? (Input & Output, Disk & Network Operations - (~Blocking Operations))  
Poll (Retrieve new I/O events, execute their callbacks or defer execution also jump to Timer Execution)  
Check (Execute setImmediate() callbacks)  
Close Callbacks (Execute all 'close' event callbacks)  
refs == 0 process.exit
