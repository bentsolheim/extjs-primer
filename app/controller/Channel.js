Ext.define('Channels.controller.Channel', {
    extend: 'Ext.app.Controller',

    init: function () {

        this.control({
            'channels-view': {
                itemclick: 'onChannelClick'
            }
        });

        this.callParent(arguments);
    },


    onChannelClick: function (view, selected, eOpts) {

        Ext.Msg.alert("Channel click", selected.get('title'));
    }
});