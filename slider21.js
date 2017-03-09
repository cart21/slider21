 	(function( $ ) {	 
 		$.fn.slider21 = function(options){
			 var settings = $.extend({
		            counter: 0,		            
		            auto_slide:true,
		            c21_interval:5000,
		            c21_hover:true
		        }, options );
			 
			var selector = $(this);
			var slides = $(selector).find( ".cart21_slide").clone();
			
			next_slide(settings.counter);
			
			/// auto ///
	        if(settings.auto_slide && settings.counter <= slides.length ){
	        
	            setInterval(function(){
	            
	            if(settings.auto_slide){
	             next_slide(settings.counter);
	            } 
	                settings.counter++;
					reset_counter();
	                					                
	              //  console.log(settings.counter+"--"+slides.length);
	            }, settings.c21_interval);
	        }
        	/// auto ///
	        
	        
	        if(settings.c21_hover){
				
			   $(selector).find(".c21_slide_nav>.c21_nok").mouseover(function() {
			// console.log("over");
			//alert(settings.counter);
				settings.auto_slide=false;
				settings.counter=$( this ).index(); //console.log($( this ).index());
				reset_counter();
				next_slide(settings.counter);
				
				}).mouseout(function() {
					settings.auto_slide=true;
				});
								
			}
	        
	      /// next ///
			 $(selector).find(".next_main").click(function() {
			
				settings.counter++;
				reset_counter();
				next_slide(settings.counter);
				
			});
		/// next ///	
		
		/// prev ///
			 $(selector).find(".prev_main").click(function() {
				settings.counter--;
				reset_counter();
				prev_slide(settings.counter);
				
				//console.log(settings.counter);
			});
		/// prev ///	

		function next_slide(counter){
		
		$(selector).find(".show_slide").removeClass("show_slide");
		//$(selector).find(".desc_show").removeClass("desc_show");
		//$(selector).find(".title_show").removeClass("title_show");
			 
			 $(selector).find(".cart21_slide").eq(settings.counter).addClass("show_slide");
			// $(selector).find(".cart21_slide").eq(settings.counter).find(".desc").addClass("desc_show");
			// $(selector).find(".cart21_slide").eq(settings.counter).find(".title").addClass("title_show");
			
		$(selector).find(".c21_nok").removeClass("active");
		$(selector).find(".c21_nok").eq(settings.counter).addClass("active");
		}
		
		function prev_slide(counter){
			
		$(selector).find(".show_slide").removeClass("show_slide");
		//$(selector).find(".desc_show").removeClass("desc_show");
		//$(selector).find(".title_show").removeClass("title_show");
		
			 $(selector).find(".cart21_slide").eq(settings.counter-1).addClass("show_slide");
			 //$(selector).find(".cart21_slide").eq(settings.counter-1).find(".desc").addClass("desc_show");
			 //$(selector).find(".cart21_slide").eq(settings.counter-1).find(".title").addClass("title_show");
			
			 
			 
		$(selector).find(".c21_nok").removeClass("active");
		$(selector).find(".c21_nok").eq(settings.counter-1).addClass("active");
		
		}
		
		function reset_counter(){
		if(settings.counter === slides.length ){
		       settings.counter = 0;
		  }
		  
		  if(settings.counter <0  ){
		       settings.counter = slides.length-1;
		  }
		 // console.log(settings.counter+" settings.counter");
		  
		   //console.log(slides.length+" length");
		}

			
 		}
 	}( jQuery ));


 