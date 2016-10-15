echo "cloning crouton clipboard!"
git clone http://github.com/zwhitchcox/crouton-clipboard ~/.crouton-clipboard
echo "adding startup script to .bashrc"
echo "node ~/.crouton-clipboard/server.js &" >> $HOME/.bashrc
echo "adding copy/paste commands to vimrc"
echo "nnoremap \"*p :r !cat $HOME/.crouton-clipboard/data.txt<CR>\nvnoremap \"*y :'<,'>w! $HOME/.crouton-clipboard/data.txt<CR>" >> ~/.vimrc
echo "starting crouton clipboard!"
nohup node ~/.crouton-clipboard/server &

