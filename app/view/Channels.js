Ext.define('Channels.view.Channels', {
    extend: 'Ext.view.View',
    xtype: 'channels-view',

    store: 'Channels',

    itemTpl: '<div class="channel">' +
        '<div class="title">{title}</div>' +
        '<div class="logo"><img src="https://gsync1.otrum.net/gsync{logoUrl}"></img></div>' +
        '</div>',
    itemSelector: 'div.channel'
});