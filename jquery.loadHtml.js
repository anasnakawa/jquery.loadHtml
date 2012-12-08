/*!
 * ------------------------------
 * jQuery.loadHtmlComponents.js v0.1.0
 * http://anasnakawa.github.com/jquery.loadHtmlComponents
 * license: MIT license (http://opensource.org/licenses/MIT)
 * ------------------------------
 */

// ------------------------------
// table of content
// ------------------------------
// a header title
//  - sub title
// a method
// ------------------------------

// a header title
// --------------

// sub title

// a method
// describe your method
//
// * **param:** {type} paramName    what to do with this parameter
//
// e.g: if you want to provide an example, that would be nice
// ------------------------------
(function ($) {
	
	'use strict';
	
	var defaults = {
		attr: 'data-component-url'
		, extension: 'html'
		, componentsFolder: ''
	}
	
	, loadHtml = function(options) {
		
		options = $.extend(defaults, options);
		
		// component url attribute
		var attr = options.attr
        
		// load status attribute 
        , state = attr + '-state'
        
        // load done value for status attribute 
        , done = 'ready'
        
        // load pending value for status attribute
        , pending = 'pending'
        
        // cache all components
        , selector = '[' + attr + ']:not([' + state + '])';
		
		// for all elements with component url not in ready state
		return this.find( selector ).each(function () {
			
			// debugger;
			
            var $self = $(this)
            
            // fetch url 
            , componentUrl = $self.attr(attr)
            
            // ability to add component name without extension (.html) 
            , url = ( options.componentsFolder + '/' ) + ( componentUrl.match('.' + options.extension + '$') ? componentUrl : componentUrl + '.' + options.extension );

            $self.attr(state, pending);

            // load content and append 
            $self.load(url, function () {

                // set state to ready 
                $self.attr(state, done)
                
                if( $self.attr(options.attr + '-skip') !== 'true' ) {
            		return $self.loadHtml(options);
            	}

            });

        });
	};
	
	$.fn.loadHtml = loadHtml;
	$.fn.loadHtml.defaults = defaults;

})(jQuery);