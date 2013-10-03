Ext.define('Channels.model.Channel', {
    extend: 'Ext.data.Model',

    fields: ['title', 'type', { name: 'active', type: 'boolean' }],

    proxy: {
        type: 'rest',
        url: 'data/channels_excerpt.json',
        reader: {
            type: 'json',
            idProperty: 'id',
            root: 'items'
        }
    }
});