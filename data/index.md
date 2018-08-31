---
title: tibl > home
---

<img style="margin: auto; display: block;" src="data/img/tibl_100x100.png"/>

[tibl](https://ujj.space/tibl) is a tiny blog/site engine written in js that runs client-side.

It has been created with GitHub Pages in mind, but it should work on GitLab Pages / any server thing that can serve http just right.

There's a command-line interface named [tibl-cli](https://ujj.space/tibl/t?p=tibl-cli) that you can use to make things easier if you want.

## Installation

### Using [tibl-cli](https://ujj.space/tibl/t?p=tibl-cli)

- Install the latest version of the tool : `pip install tibl-cli`. You need Python 3.5+
- Create a tibl site : `tibl create`
- `cd` into your new site
- Create your first post : `tibl new`
- Watch the results : `tibl serve`

### Manually

- Clone the repository : `git clone https://github.com/Uinelj/tibl`
- Create posts and pages in `data/topics` (pages begin with an `_`)
- Edit `database.md` to update the post listing to your convinience

## Features

- Not so much
- Has posts and pages
- Really that's it

## Adding content

tibl structure is very simple : 

```bash
.
├── LICENSE
├── README.md
├── css
│   ├── normalize.css
│   └── sakura.css
├── data
│   ├── database.md # Post listing. Edited by tibl create
│   ├── foot.md # Footer
│   ├── img # Images
│   │   └── tibl.png
│   ├── index.md # Homepage
│   ├── nav.md # Navbar
│   └── topics # Put posts and pages here
│       ├── _about.md # Sample page
│       └── things.md # Sample post
├── index.html # tibl index.html
├── js # js things
│   ├── config.js
│   ├── lib
│   │   └── js-yaml.min.js
│   └── tibl.js
└── t.html # Post/page display
```
