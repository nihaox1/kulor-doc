requirejs( [ "Template" ] , function( Template ){
    var _tmpl   = new Template();
    docConfig.contentPage.requireFile.ready( {
        requireFile     : [ "markdown/requireFile.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "requireFileMarkdown" ) );
        this.display( function(){
            this._pageConfig.$container.html( _html );
        });
    } );
} )