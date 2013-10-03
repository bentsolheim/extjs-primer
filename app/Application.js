Ext.define('Channels.Application', {
    name: 'Channels',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.Router'
    ],

    views: [
        'Channels'
    ],

    controllers: [
        'Dashboard',
        'Channel'
    ],

    stores: [
        'Channels'
    ],

    routes: {
        '/': 'dashboard#index',
        '/channels': 'channel#index'
    }
});
