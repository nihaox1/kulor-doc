requirejs( [ "Template" , "ModalView" ] , function( Template , ModalView ){
    var _tmpl   = new Template();
    docConfig.contentPage.modalView.ready( {
        requireFile     : [ "markdown/modalView.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "modalViewMarkdown" ) );
        this.display( function(){
            this._pageConfig.$container.html( _html );
        });
    } );
} )