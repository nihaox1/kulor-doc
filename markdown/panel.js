requirejs( [ "Template" ] , function( Template ){
    var _tmpl   = new Template();
    docConfig.contentPage.panel.ready( {
        requireFile     : [ "markdown/panel.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "panelMarkdown" ) );
        this.display( function(){
            this._pageConfig.$container.html( _html );

        });
    } );
} )