# Hello tibl !

_29, August of 2018_

As of writing, tibl's first commit is 5 days old; yet so much happened since then..
No honestly things are going pretty fast, even though I found myself doing less important things these two last days.


## A bit of history

To begin with, tibl was initially named ghictor, but I felt it tiring to say, so tibl it is. tibl stands for tiny blog. ghictor standed for gh + victor, and victor standed for... yeah so tibl.

Let's rewind what was added/done in these last 5 days :

- We got the 3 building blocks of tibl : a classless css theme, a js function that does `f("https://something.in/markdown.md") = html`, and an index.html file that glues all of that together.
- Added a navbar and a footer : They are Markdown files too. Why ? Why not. Here's the `nav.md` of my personal [site](https://ujj.space):
  ```markdown
  [🏠](index.html) [📯](t.html) [💼](t.html?p=about)
  ```
  
  The footer is in a similar fashion. It can be plain html too, I guess.

- Added some error handling on failed http requests. I still don't know why, but sometimes Github Pages doesn't want to serve your files. Maybe because they are not valid Markdown ones, maybe because there's a delay between pushing changes on Github and seeing them, but it can happen. No error handling had a fun side effect : The Github 404 page was rendered and its css style leaked into the page.

- Added pages. Pages are not posts, and are designed to be posts that are not reachable from the post list. Pages are relevant because of the existence of tibl-cli, that enables some level of automation for creating / generating content. Pages live where Posts live, but they are named `_something.md` instead of just `something.md`. They are reachable using `t.html?p=something`.

- *tibl-cli*: First commit is a tool that is able to do 4 things : 
  - `create`: Create a new tibl blog by cloning the git repository,
  - `items`: List posts / pages that are in the blog (a glorified `tree data/topics/`)
  - `new`: Create a new post/page
  - `serve`: A glorified `python3 -m http.server` that doesn't unbind itself from port when killed.
  
  I'm very happy about the [termtosvg casts](https://ujj.space/tibl/t.html?p=tibl-cli) that are on the tibl-cli's homepage. I'm less happy with the project itself.
  I wanted something light and *easily installable on any machine*. I wanted to code tibl-cli in bash or python2.7, because they both are available everywhere. But since I wanted to go fast, Python 3 and dependencies are here. I don't know if it really is a problem.
  
  The problem is that **i don't use tibl-cli** for other purposes that for creating / serving tibl instances when I do code. 
  I praise dogfooding, and the fact that I'm not using my tool makes me think that noone would use it.
  
 - Added some git push/pull commands to tibl-cli. While I'm happy to add that (I think that it would make me use tibl-cli more often), I started using `subprocess` to make calls to the git binary, then I tried [GitPython](https://gitpython.readthedocs.io/en/stable/intro.html) but didn't bother reading how to do things well. So git functionnality is quite bad, but is here.
 
 ## And now ?
 
 ### tibl
 
 The only thing tibl misses right now is the [After Dark](https://git.habd.as/comfusion/after-dark) theme.
 When it will be ported, I'll tag `tibl - v0.1 "bad"` and begin to see how to better package and organize everything.
 We'll talk yarn, babel, webpack, blah blah blah.
 After that, two important issues will be [highlighting](https://github.com/Uinelj/tibl/issues/6) and [table of contents](https://github.com/Uinelj/tibl/issues/16).
 
 ### tibl-cli
 
 tibl-cli could benefit some code cleaning:
 
 - While [click](http://click.pocoo.org/5/) seems to be a nice alternative to python's argparse, I'd like to see if [docopt](http://docopt.org/) is not a better choice. I just have to see if interactive mode is still possible if no arguments are supplied.
 
 - Code is really messy and has to be split in modules :
   - tibl itself : Posts, articles, postlist, etc.
   - Git : Push/pull, change remote, know if we miss commits from remote, know what we'll push
   - Interface : Manage prints
   - Cli : :)
   - Server : Fix that unbinding thing.
