# <p style="text-align: center;">🗿 [tibl-cli](https://github.com/Uinelj/tibl)</p>

[tibl-cli](https://github.com/Uinelj/tibl-cli) is a [tibl](https://github.com/Uinelj/tibl) python command line interface.

1. [See it in action](#action)
1. [Features](#features)
1. [Install](#install)

## <a name="action"></a>See it in action

<p align="center">
    <img src="data/img/tibl-cli-demo.svg">
</p>

## <a name="features"></a>Features 

```
Usage: tibl [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  changes  Print out current changes
  create   Create a new tibl site
  items    list posts and pages
  link     link a github repository
  new      Create a new post/page
  pull     Pull changes from a github repository
  push     Push changes to a github repository
  serve    serve your website locally
```

## <a name="install"></a>Installing

tibl-cli is not available yet in PyPI.

```bash
git clone https://github.com/Uinelj/tibl-cli
cd tibl-cli
pip install --user .
```

## Git commands

There are 4 git-related commands : `changes`, `link`, `push` and `pull`.

<p align="center">
    <img src="data/img/tibl-cli-git.svg">
</p>

```
Usage: tibl [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  changes  Print out current changes
  link     link a github repository
  pull     Pull changes from a github repository
  push     Push changes to a github repository
```
