# tibl

*Ti*ny client-side *bl*og engine based on [marked.js](https://marked.js.org/).

## Installation

### Github Pages

TODO

### On a classic web server

TODO

## Usage

### Adding topics/posts

## Files

### css

CSS files. Currently using Sakura css because it's nice.

### data

Put posts here.

* `database.md` holds the post/topic index.
* `index.md` is the homepage.

### js

* `config.js` is empty and useless.
* `ghictor.js` is some code to get posts and render em.

### other files

* `index.html` renders `index.md`
* `t.html` renders `database.md` if no `r=sth` is supplied, `data/topics/sth.md` if it is.
* `README.md` is this file.
