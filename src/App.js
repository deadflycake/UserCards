Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['User'],
            attribute: "Department", 
            cardConfig:{
                xtype: 'customcard'
            },
            enableCrossColumnRanking: false,
            enableRanking: false,
            storeConfig: {
                sorters: [{
                    property: 'ObjectID',
                    direction: 'ASC'
                    }],
                filters: [{
                    property: 'Disabled',
                    value: false
                    }]
            }
         };

        this.add(cardBoardConfig);
    }
});
