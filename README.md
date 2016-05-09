# iPlayer A to Z

This is my take on a task in the BBC iPlayer web dev application. I took it as an opportunity to learn [Express.js](http://expressjs.com), which is really great. I used [pug](http://jade-lang.com) (`jade`) for templating, and Less for styles.

Demo can be found on [Heroku](http://arcane-mesa-66367.herokuapp.com/).

*Note: Initially, I forgot to use git, so I had to rewrite a lot of the app and "simulate" the versioning. Thus the oddly close commit timestamps.*

Regarding the front-end, I kind of decided to go for a "fat server" strategy for a change, so the front-end is basically static. Normally I'd use **React** or **Meteor** to make a nice dynamic single-page app.

### Running the app

Just clone this repository, and run
```bash
npm install
npm start
```

The app will start serving at `localhost:5000`.

If you run `npm run dev`, the app will run its tests, and start with `nodemon`, which means all file changes will automatically refresh the server.

To simply run tests, use the good ol' `npm test`.
