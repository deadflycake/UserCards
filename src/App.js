Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
  items:{
        html:'<a href="https://help.rallydev.com/apps/2.0rc1/doc/#!/api/Rally.ui.cardboard.CardBoard">Hint!<a>'
    },

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
