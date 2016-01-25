'use strict';

/**
 * @ngdoc directive
 * @name speakaboosProjectApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('speakaboosProjectApp').directive('carousel', ['$window',function ($window) {
    return {
      templateUrl: 'scripts/directives/templates/carousel.html',
      restrict: 'EA',
      scope : {
      	items  : '='
      },
      link: function postLink(scope, element, attrs) {

      	var left = 0,
      		total = 0,
      		$scroller = $('.carousel__list'),
      		$prev = $('#navPrev'),
		    $next = $('#navNext'),
		    frameIndex=1;

      	angular.element($window).bind('resize', resetFrame);

      	scope.$watch("items", function(newvalue, oldvalue){
      	 	resetFrame();
      	});

        scope.$watch(element.children(), function() {
	        total = calculateTotal();

		    $next.click(function(event){
				event.preventDefault();	

				if(frameIndex >= total/$('.carousel').outerWidth())
					return;	   

				if(total - $('.carousel').outerWidth() >= Math.abs(left - $('.carousel').outerWidth())) {
					left -= $('.carousel').outerWidth();
				}
				else {
					left -= total- (frameIndex * $('.carousel').outerWidth());
					$next.addClass('disable');
				}

			    $scroller.css("left",left);
			    $prev.removeClass('disable');
			    frameIndex++;
			    
			});

		    $prev.click(function(event){
		    	event.preventDefault();

				if(total <= ($('.carousel').outerWidth()*frameIndex)) {
					// 2 - 1 for the actual frame width, 1 to move a frame back
					left = -1 * (total - (2*$('.carousel').outerWidth()));
				}
				else {
					left += $('.carousel').outerWidth();
				}
				if(left > 0) { //left cannot be positive
					left = 0;	
				}
				if(left === 0) {
					$prev.addClass('disable');
				}

				$scroller.css("left",left);	
				$next.removeClass('disable');
				frameIndex--;

				
			});
        });
		
		function resetFrame(){
      		//reset values to start
      		left = 0,total = 0, frameIndex=1;
      		$scroller.css("left",left);
      		$prev.addClass('disable');		
      		$next.removeClass('disable');
      		total = calculateTotal();
       }

		function calculateTotal() {
			$scroller.children().each(function(i, val) {
	            var el = $(this);
	            total = total + el.outerWidth(true);
	        });
	        return total;
		}

      }
    };
  }]);
