#!/bin/sh
hgdir=~/src/hg/dactyl-plugins
plugindir=${hgdir}/htdocs/plugins
for i in $(cat <<EOF
curl-dev.js
jQuery-dev.js
gmail-dev.penta
useragent-dev.js
tab-options-dev.js
jscompletion-dev.js
browser-improvements-dev.js
aardvark-dev.js
flashblock-dev.js
http-headers-dev.js
EOF)
do
	cp ${plugindir}/$i $i
done

git add *.js *.penta && git commit -m 'upstream changes'
