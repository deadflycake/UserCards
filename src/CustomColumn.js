
Ext.define('App.MyColumn', {
    //This is the class we are extending. In this case we are making a custom card extending Rally's default card
    extend: 'Rally.ui.cardboard.Column',
    //the alias is used to create a reference for component's xtypes
    alias: 'widget.customcolumn',

    drawHeader: function() {
        // this.value = "foo";
        // console.log(this.value);
        this.callParent(arguments);
    }
    
});