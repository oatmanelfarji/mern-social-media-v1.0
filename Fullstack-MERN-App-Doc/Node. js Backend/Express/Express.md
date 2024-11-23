# Installing

Assuming you’ve already installed [Node.js](https://nodejs.org/), create a directory to hold your application, and make that your working directory.

- [Express 4.x](https://expressjs.com/en/4x/api.html) requires Node.js 0.10 or higher.
- [Express 5.x](https://expressjs.com/en/5x/api.html) requires Node.js 18 or higher.

```console
$ mkdir myapp
$ cd myapp
```

Use the `npm init` command to create a `package.json` file for your application. For more information on how `package.json` works, see [Specifics of npm’s package.json handling](https://docs.npmjs.com/files/package.json).

```console
$ npm init
```

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

```
entry point: (index.js)
```

Enter `app.js`, or whatever you want the name of the main file to be. If you want it to be `index.js`, hit RETURN to accept the suggested default file name.

Now, install Express in the `myapp` directory and save it in the dependencies list. For example:

```console
$ npm install express
```

To install Express temporarily and not add it to the dependencies list:

```console
$ npm install express --no-save
```

By default with version npm 5.0+, `npm install` adds the module to the `dependencies` list in the `package.json` file; with earlier versions of npm, you must specify the `--save` option explicitly. Then, afterwards, running `npm install` in the app directory will automatically install modules in the dependencies list.

# Hello world example

Embedded below is essentially the simplest Express app you can create. It is a single file app — _not_ what you’d get if you use the [Express generator](https://expressjs.com/en/starter/generator.html), which creates the scaffolding for a full app with numerous JavaScript files, Jade templates, and sub-directories for various purposes.

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (`/`) or _route_. For every other path, it will respond with a **404 Not Found**.

The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by [RunKit](https://runkit.com/), which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser. Below are instructions for running the same app on your local machine.

RunKit is a third-party service not affiliated with the Express project.

### Running Locally

First create a directory named `myapp`, change to it and run `npm init`. Then, install `express` as a dependency, as per the [installation guide](https://expressjs.com/en/starter/installing.html).

In the `myapp` directory, create a file named `app.js` and copy the code from the example above.

The `req` (request) and `res` (response) are the exact same objects that Node provides, so you can invoke `req.pipe()`, `req.on('data', callback)`, and anything else you would do without Express involved.

Run the app with the following command:

```console
$ node app.js
```

Then, load `http://localhost:3000/` in a browser to see the output.

# Express application generator

Use the application generator tool, `express-generator`, to quickly create an application skeleton.

You can run the application generator with the `npx` command (available in Node.js 8.2.0).

```console
$ npx express-generator
```

For earlier Node versions, install the application generator as a global npm package and then launch it:

```console
$ npm install -g express-generator
$ express
```

Display the command options with the `-h` option:

```console
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

For example, the following creates an Express app named _myapp_. The app will be created in a folder named _myapp_ in the current working directory and the view engine will be set to [Pug](https://pugjs.org/ "Pug documentation"):

```console
$ express --view=pug myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www
```

Then install dependencies:

```console
$ cd myapp
$ npm install
```

On MacOS or Linux, run the app with this command:

```console
$ DEBUG=myapp:* npm start
```

On Windows Command Prompt, use this command:

```console
> set DEBUG=myapp:* & npm start
```

On Windows PowerShell, use this command:

```console
PS> $env:DEBUG='myapp:*'; npm start
```

Then, load `http://localhost:3000/` in your browser to access the app.

The generated app has the following directory structure:

```console
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

The app structure created by the generator is just one of many ways to structure Express apps. Feel free to use this structure or modify it to best suit your needs.

# Basic routing

_Routing_ refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```javascript
app.METHOD(PATH, HANDLER)
```

Where:

- `app` is an instance of `express`.
- `METHOD` is an [HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), in lowercase.
- `PATH` is a path on the server.
- `HANDLER` is the function executed when the route is matched.

This tutorial assumes that an instance of `express` named `app` is created and the server is running. If you are not familiar with creating an app and starting it, see the [Hello world example](https://expressjs.com/en/starter/hello-world.html).

The following examples illustrate defining simple routes.

Respond with `Hello World!` on the homepage:

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

Respond to POST request on the root route (`/`), the application’s home page:

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```

Respond to a PUT request to the `/user` route:

```javascript
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```

Respond to a DELETE request to the `/user` route:

```javascript
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```

For more details about routing, see the [routing guide](https://expressjs.com/en/guide/routing.html).

# Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

The function signature is:

```javascript
express.static(root, [options])
```

The `root` argument specifies the root directory from which to serve static assets. For more information on the `options` argument, see [express.static](https://expressjs.com/en/4x/api.html#express.static).

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named `public`:

```javascript
app.use(express.static('public'))
```

Now, you can load the files that are in the `public` directory:

```plain-text
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

To use multiple static assets directories, call the `express.static` middleware function multiple times:

```javascript
app.use(express.static('public'))
app.use(express.static('files'))
```

Express looks up the files in the order in which you set the static directories with the `express.static` middleware function.

NOTE: For best results, [use a reverse proxy](https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy) cache to improve performance of serving static assets.

To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the `express.static` function, [specify a mount path](https://expressjs.com/en/4x/api.html#app.use) for the static directory, as shown below:

```javascript
app.use('/static', express.static('public'))
```

Now, you can load the files that are in the `public` directory from the `/static` path prefix.

```plain-text
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

However, the path that you provide to the `express.static` function is relative to the directory from where you launch your `node` process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

```javascript
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```

For more details about the `serve-static` function and its options, see [serve-static](https://expressjs.com/resources/middleware/serve-static.html).

# Express examples 

https://expressjs.com/en/starter/examples.html

This page contains list of examples using Express.

- [auth](https://github.com/expressjs/express/tree/master/examples/auth) - Authentication with login and password
- [content-negotiation](https://github.com/expressjs/express/tree/master/examples/content-negotiation) - HTTP content negotiation
- [cookie-sessions](https://github.com/expressjs/express/tree/master/examples/cookie-sessions) - Working with cookie-based sessions
- [cookies](https://github.com/expressjs/express/tree/master/examples/cookies) - Working with cookies
- [downloads](https://github.com/expressjs/express/tree/master/examples/downloads) - Transferring files to client
- [ejs](https://github.com/expressjs/express/tree/master/examples/ejs) - Working with Embedded JavaScript templating (ejs)
- [error-pages](https://github.com/expressjs/express/tree/master/examples/error-pages) - Creating error pages
- [error](https://github.com/expressjs/express/tree/master/examples/error) - Working with error middleware
- [hello-world](https://github.com/expressjs/express/tree/master/examples/hello-world) - Simple request handler
- [markdown](https://github.com/expressjs/express/tree/master/examples/markdown) - Markdown as template engine
- [multi-router](https://github.com/expressjs/express/tree/master/examples/multi-router) - Working with multiple Express routers
- [multipart](https://github.com/expressjs/express/tree/master/examples/multipart) - Accepting multipart-encoded forms
- [mvc](https://github.com/expressjs/express/tree/master/examples/mvc) - MVC-style controllers
- [online](https://github.com/expressjs/express/tree/master/examples/online) - Tracking online user activity with `online` and `redis` packages
- [params](https://github.com/expressjs/express/tree/master/examples/params) - Working with route parameters
- [resource](https://github.com/expressjs/express/tree/master/examples/resource) - Multiple HTTP operations on the same resource
- [route-map](https://github.com/expressjs/express/tree/master/examples/route-map) - Organizing routes using a map
- [route-middleware](https://github.com/expressjs/express/tree/master/examples/route-middleware) - Working with route middleware
- [route-separation](https://github.com/expressjs/express/tree/master/examples/route-separation) - Organizing routes per each resource
- [search](https://github.com/expressjs/express/tree/master/examples/search) - Search API
- [session](https://github.com/expressjs/express/tree/master/examples/session) - User sessions
- [static-files](https://github.com/expressjs/express/tree/master/examples/static-files) - Serving static files
- [vhost](https://github.com/expressjs/express/tree/master/examples/vhost) - Working with virtual hosts
- [view-constructor](https://github.com/expressjs/express/tree/master/examples/view-constructor) - Rendering views dynamically
- [view-locals](https://github.com/expressjs/express/tree/master/examples/view-locals) - Saving data in request object between middleware calls
- [web-service](https://github.com/expressjs/express/tree/master/examples/web-service) - Simple API service

## Additional examples

These are some additional examples with more extensive integrations.

Warning

This information refers to third-party sites, products, or modules that are not maintained by the Expressjs team. Listing here does not constitute an endorsement or recommendation from the Expressjs project team.

- [prisma-express-graphql](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-express) - GraphQL API with `express-graphql` using [Prisma](https://www.npmjs.com/package/prisma) as an ORM
- [prisma-fullstack](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-express) - Fullstack app with Next.js using [Prisma](https://www.npmjs.com/package/prisma) as an ORM
- [prisma-rest-api-js](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express) - REST API with Express in JavaScript using [Prisma](https://www.npmjs.com/package/prisma) as an ORM
- [prisma-rest-api-ts](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express) - REST API with Express in TypeScript using [Prisma](https://www.npmjs.com/package/prisma) as an ORM

