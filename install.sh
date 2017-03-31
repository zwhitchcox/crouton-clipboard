echo "cloning crouton clipboard!"
git clone http://github.com/zwhitchcox/crouton-clipboard ~/.crouton-clipboard
echo "adding startup script to .bashrc"
echo "(nohup node ~/.crouton-clipboard/server.js > /dev/null 2>&1 &)                                                                          " >> $HOME/.bashrc
echo "adding copy/paste commands to vimrc"
echo "nnoremap \"*p :r !cat $HOME/.crouton-clipboard/data.txt<CR>\nvnoremap \"*y :'<,'>w! $HOME/.crouton-clipboard/data.txt<CR>" >> ~/.vimrc
echo "starting crouton clipboard!"
(nohup node ~/.crouton-clipboard/server.js > /dev/null 2>&1 &)                                                                          
