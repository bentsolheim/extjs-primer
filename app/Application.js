Ext.define('Channels.Application', {
    name: 'Channels',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.window.MessageBox'
    ],

    views: [
        'Channels'
    ],

    controllers: [
        'Channel'
    ],

    stores: [
        'Channels'
    ]
});
