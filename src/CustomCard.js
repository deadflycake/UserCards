
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
            return ['UserName', 'UserPermissions', 'SubscriptionAdmin', 'UserProfile'];
        }
    },
    
    initComponent:function(){
        this.addField("UserName");
        this.addField("UserPermissions");
        console.log(this.record.data);
        if(this.record.get("SubscriptionAdmin")) {
            this.addCls("subscription-admin");
        }
        this.callParent(arguments);
        console.log(this.record.data);
    }
    
    
});