requirejs( [ "Template" , "ModalView" ] , function( Template , ModalView ){
    var _tmpl   = new Template();
    docConfig.contentPage.eventBind.ready( {
        requireFile     : [ "markdown/eventBind.html" ]
    } , function(){
        var _html   = marked.parse( _tmpl.getTemplate( "eventBindMarkdown" ) ) ,
            _modal;
        this.display( function(){
            this._pageConfig.$container.html( _html );
            _modal  = new ModalView( "eventBind" , this._pageConfig.$container , function(){

            } , {} ).addModalEvent( {

            } ).addViewEvent( {
                ".btn[func='w1']::click"    : function(){ alert( "hi" ) } ,   
                ".btn[func='w2']::mousedown": function(){ alert( "," ) } ,   
                ".btn[func='w3']::mouseover": function(){ alert( "world" ) }    
            } ).init();
        });
    } );
} )