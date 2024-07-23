what is nodejs?

- node.js is a javascript runtime built on chrome's v8 javascript engine. node.js uses an event-driven, non-blocking(asynchronous) I/O model that makes it lightweight and efficient.  node.j package ecosystem, npm, is the largest ecosystem of open source libraries in the world
- runs on the backen 
- can be used to build web applictions
- can be used to build APIs

what is NPM?
- npm means node package manager
- npm is the package manager for js and the world's larget software registry. Discover packages of reusable code- and assemble them in powerful new ways.
- npm is the default package manager for the js runtime environment node.js
 
 NPM packages:
 1. Built-in-Packages
    a. http: to create a server
    b. fs: to work with the file system
    c. path: to work with file paths
    d. os: to work with the os using commands(like cpus, totalmem, etc.)
    e. events: to work with events(like click, hover, etc.)
    f. util: to work with utilities(like inspect, etc.)

 2. Third-party-packages
    a. express: to create a server (we prefer)
    b. nodemon: to restart the server automatically
    c. mongoose: to work with MongoDB
    d. body-parser: to parse the body of the request
    e. dotenv: to work  with environment variables
    f. bcrypt: to hash the password
    g. jsonwebtoken: to create a token(OAuth, JWT, etc.)
    h. multer: to upload files
    i. nodemailer: to send emails 
    j. morgan: to log the requests
    k. cookie-parser: to parse the cookies
    l. cors: to enable CORS

 3. Custom packages
    a. middleware: to work with middleware

to setup the basic git repository:
1. git init
2. git branch -M server1.1
3. git add .
4. git commit -m "basic http server" in sir