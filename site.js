$( function( ) {
  var images = $( 'img' ).not( '#header img' );

  images.each( function( ) {
    var image = $( this );

    image.css( { 'width': image.width( ) + 'px',
                 'height': image.height( ) + 'px' } );
  } );

  function toggleZoom( ) {
    var image = $( this );

    images.not( image ).removeClass( 'zoomed-in' );
    image.toggleClass( 'zoomed-in' );
  }
  images.click( toggleZoom );

  console.log( images );
} );
