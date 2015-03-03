requirejs( [ "Template" , "Listener" , "ModalView" ] , function( Template , Listener , ModalView ){
    var _tmpl   = new Template();
    docConfig.contentPage.listener.ready( {
        requireFile     : [ "markdown/listener.html" ]
    } , function(){
        var _html       = marked.parse( _tmpl.getTemplate( "listenerMarkdown" ) ),
            _modal;
        this.display( function(){
            this._pageConfig.$container.html( _html );
            _modal = new ModalView( "listenerDemo" , this._pageConfig.$container , function(){

            } , {
                listener    : new Listener( "listenerDemo" )
            }).addModalEvent({
                addListenerEvent    : function(){
                    _modal.get( "listener" ).addEventListener( function( str ){
                        alert( str );
                    } );
                } ,
                removeListenerEvent : function(){
                    _modal.get( "listener" ).removeEventListener();
                } ,
                handleListenerEvent : function(){
                    _modal.get( "listener" ).postListenerMsg( "hi,world" );
                }
            }).addViewEvent({
                ".btn[func='add']::click"      : "addListenerEvent" ,
                ".btn[func='handle']::click"   : "handleListenerEvent" ,
                ".btn[func='remove']::click"   : "removeListenerEvent" 
            }).init();
        });
    } );
} )