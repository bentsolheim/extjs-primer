extjs-primer
============

Initialize the app with Sencha Cmd (see [http://docs.sencha.com/extjs/4.2.2/#!/guide/command] for Sencha Cmd documentation) from a folder in your public web folder:

    sencha -sdk ~/Sites/share/ext-4.2.1/ generate app Channels .

Download test data to ./data:

    curl https://raw.github.com/bentsolheim/extjs-primer/master/data/channels_excerpt.json -o channels_excerpt.json

Download router user extension in /lib folder:

    mkdir lib
    cd lib
    curl https://raw.github.com/brunotavares/Ext.ux.Router/master/Router.js -o Router.js

Add lib to `.sencha/app/sencha.cfg`

    app.classpath=${app.dir}/app,${app.dir}/app.js,${app.dir}/lib

Refresh app:

    sencha app refresh
