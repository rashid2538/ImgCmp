( function( $ ) {

	var addCss = function() {
		$( '#imgCmpCss' ).length > 0 || $( '<style id="imgCmpCss">.imgcmp{overflow:hidden} .imgcmp:after{clear:both;} .imgcmp figure{background-size:cover;position:relative;font-size:0;width:100%;height:100%;margin:0} .imgcmp figure > img{position:relative;width:100%} .imgcmp figure div{background-size:cover;position:absolute;width:50%;box-shadow:0 5px 10px -2px rgba(0,0,0,0.3);overflow:hidden;bottom:0;height:100%} .imgcmp input[type=range]{-webkit-appearance:none;-moz-appearance:none;position:relative;top:-2rem; left:-2%;background-color:rgba(255,255,255,0.1);width:102%;cursor:col-resize;} .imgcmp input[type=range]:focus{outline:none} .imgcmp input[type=range]:active{outline:none} .imgcmp input[type=range]::-moz-range-track{-moz-appearance:none;height:15px;width:98%;background-color:rgba(255,255,255,0.1);position:relative;outline:none} .imgcmp input[type=range]::active{border:none;outline:none} .imgcmp input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px; height:15px;background:#fff;border-radius:0} .imgcmp input[type=range]::-moz-range-thumb{-moz-appearance:none;width:20px;height:15px;background:#fff;border-radius:0} .imgcmp input[type=range]:focus::-webkit-slider-thumb{background:rgba(255,255,255,0.5)} .imgcmp input[type=range]:focus::-moz-range-thumb{background:rgba(255,255,255,0.5)}</style>' ).appendTo( document.head );
	};
	$.fn.extend({
		imgCmp : function( options ) {
			addCss();
			return this.each( function() {
				var $me = $( this ).addClass( 'imgcmp' ).html( '<figure><div class="imgcmp-divisor"></div></figure>' ).find( 'figure' ).css( 'background-image', 'url(' + options.before + ')' ).end().find( '.imgcmp-divisor' ).css( 'background-image', 'url(' + options.after + ')' ).end(), divisor = $( '.imgcmp-divisor', this )[ 0 ], img = new Image();
				$( '<input type="range" min="0" max="100" value="50" />' ).appendTo( this ).on( 'input', function() {
					divisor.style.width = this.value + '%';
				});
				img.onload = function() {
					$me.height( this.height ).width( this.width );
				};
				img.src = options.before;
			});
		}
	});
})( jQuery );
