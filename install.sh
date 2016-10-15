git clone http://github.com/zwhitchcox/crouton-clipboard ~/.crouton-clipboard
echo "node ~/.crouton-clipboard/server.js &" >> $HOME/.bashrc
echo "nnoremap \"*p :r !cat $HOME/.crouton-clipboard/data.txt<CR>\nvnoremap \"*y :'<,'>w! $HOME/.crouton-clipboard/data.txt<CR>" >> ~/.vimrc
node ~/.crouton-clipboard/server &
