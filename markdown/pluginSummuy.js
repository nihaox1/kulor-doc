requirejs( [ "Template" ] , function( Template ){
    var _tmpl   = new Template();
    docConfig.contentPage.pluginSummuy.ready( {
        requireFile     : [ "markdown/pluginSummuy.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "pluginSummuyMarkdown" ) );
        this.display( function(){
            this._pageConfig.$container.html( _html );
        });
    } );
} )