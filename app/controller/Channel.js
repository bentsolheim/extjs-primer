Ext.define('Channels.controller.Channel', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'mainView', selector: "[cls='main-view']" }
    ],

    init: function () {

        this.control({
            'channels-view': {
                itemclick: 'onChannelClick'
            }
        });

        this.callParent(arguments);
    },


    index: function() {

        var cardLayout = this.getMainView().getLayout();
        cardLayout.setActiveItem('channels-view');

        Ext.getStore('Channels').load();
    },


    onChannelClick: function (view, selected, eOpts) {

        Ext.Msg.alert("Channel click", selected.get('title'));
    }
});