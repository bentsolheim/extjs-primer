Ext.define('Channels.controller.Dashboard', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'mainView', selector: "[cls='main-view']" }
    ],


    index: function() {

        var cardLayout = this.getMainView().getLayout();
        cardLayout.setActiveItem('dashboard-view');

        Ext.getStore('Channels').load();
    }
});