# Crouton Clipboard

### Prerequisites

* NodeJS
* Git

### About

Crouton clipboard integrates the Chrome OS clipboard with the [crouton](https://github.com/dnschneid/crouton) linux instance clipboard without running the display (so, only when you use the CLI).

Whenever you copy something on Chrome OS, it is automatically written to `~/.crouton-clipboard/data.txt`, and whenever you write to `~/.crouton-clipboard/data.txt`, it is automatically copied to your clipboard on Chrome OS.

### Installation

First you want to clone [Crouton Clipboard&reg;](https://github.com/zwhitchcox/crouton-clipboard) and add `node ~/.crouton-clipboard/server` to your `.bashrc`. You can do this manually, or just type

`curl -sL https://cdn.rawgit.com/zwhitchcox/crouton-clipboard/master/install.sh | sh`

into your console, and this will be done automagically.

Next, you need to install the [Crouton Clipboard Extension&reg;](https://chrome.google.com/webstore/detail/jipofmbanedhjnpooojdeeddanhfljif), which will create a websocket server in the background, and listen on each page for the clipboard event, sending it to the server, which is created by `server.js`.


### Vim Integration

I created this for vim, so I didn't have to copy and paste using the chrome interface, so to install for vim, all you have to do is add the following to your `vimrc`

```vim
nnoremap "*p :r !cat $HOME/.crouton-clipboard/data.txt<CR>
vnoremap "*y :'<,'>w! $HOME/.crouton-clipboard/data.txt<CR>
```

Note: This is automatically done by `install.sh`

Then, to copy and paste from the "system" clipboard in vim, just type `"*y` and `"*p`.

For more info on Chrome development, please see my [video on my Chrome OS DX](https://www.youtube.com/watch?v=O_fWX_vEUGA).
