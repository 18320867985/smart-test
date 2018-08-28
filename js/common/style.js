// JavaScript Document

$(function(){
	    $('.swiper-wrapper ul li').each(function() {
               var thisImgW = $(this).find('img').width();
			   var thisImgH = $(this).find('img').height();
			   /*if(thisImgW >= thisImgH){
				       $(this).find('.article').css('width','100%');
					   $(this).find('.content').css('margin-top','30px')
				   }else{
					     $(this).find('.article').css('height','70%');
					   }*/
				if(thisImgH-thisImgW >= 100 ){
				       $(this).find('.article').css('width','70%');
					   
				   }else if(thisImgH-thisImgW >=70 ){
					    $(this).find('.article').css('width','90%');
						
					   }else{
						       $(this).find('.article').css('width','90%');
							   $(this).find('.content').css('margin-top','30px')
						   }
        }); 
		
		 $('.swiper-wrapper ul li').click(function(){
			   $('.swiper-wrapper ul li').removeClass('click');
			    $(this).addClass('click');
			 });    
			 
			 
		
 });


