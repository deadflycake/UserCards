
Ext.define('App.MyCard', {
    //This is the class we are extending. In this case we are making a custom card extending Rally's default card
    extend: 'Rally.ui.cardboard.Card',
    //the alias is used to create a reference for component's xtypes
    alias: 'widget.customcard',

    //This record will have the data for the Rally Artifact when the card is created.
    record:null,
    inheritableStatics: {
        //This list of fields you expect hydrated in the records. This information is passed along to the Rally server and assures that
        getFetchFields: function() {
            return ['UserName', 'EmailAddress', 'DisplayName', 'SubscriptionAdmin'];
        }
    },
    
    initComponent:function(){
        this.addField('DisplayName');
        this.addField('EmailAddress');
        this.addField('UserName');
        if(this.record.get('SubscriptionAdmin')) {
            this.addCls("subscription-admin");
        }
        var data = this.record.data;
        data.Owner = Ext.clone(data);
        // The line below stops errors that will throw IE as something keeps wanting the card to show its fancy popup button things
        this.showIconsAndHighlightBorder=false; 
        this.callParent(arguments);
    }
    
    
});