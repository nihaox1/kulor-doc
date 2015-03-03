requirejs( [ "Template" ] , function( Template ){
    var _tmpl   = new Template();
    docConfig.contentPage.dialog.ready( {
        requireFile     : [ "markdown/dialog.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "dialogMarkdown" ) );
        this.display( function(){
            this._pageConfig.$container.html( _html );

        });
    } );
} )