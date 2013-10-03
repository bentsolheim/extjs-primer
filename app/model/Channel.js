Ext.define('Channels.model.Channel', {
    extend: 'Ext.data.Model',

    fields: [
        'title',
        'type',
        { name: 'active', type: 'boolean' },
        { name: 'logoUrl', convert: function (value, record) {
            return record.raw.resources['logo-button'];
        } }
    ],

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