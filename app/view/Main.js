Ext.define('Channels.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150,

        html: '<ul><li><a href="#/">Dashboard</a></li><li><a href="#/channels">Channels</a></li></ul>'
    },{
        region: 'center',
        layout: 'card',
        cls: 'main-view',
        items: [
            {
                id: 'dashboard-view',
                html: 'HEI'
            },
            {
                id: 'channels-view',
                xtype: 'channels-view'
            }
        ]
    }]
});