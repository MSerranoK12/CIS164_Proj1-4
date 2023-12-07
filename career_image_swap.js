/*"use strict";
$(document).ready( () => {
    let imageCache=[];
    $("#slides").each( (index, img) => {
        const image = new Image();
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageCache[index] = image;
});
    let imageCounter = 0;
    setInterval( () => {
         $("#caption").fadeOut(1000);
         $("#slide").fadeOut(1000,
            () => {
                imageCounter = (imageCounter + 1) % imageCache.length;
                const nextImage = imageCache[imageCounter];
                $("#slide").attr("src", nextImage.src).fadeIn(1000);
                $("#caption").text(nextImage.title).fadeIn(1000);
            });
    },
    3000);
});*/


/*"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {   
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);                    
                $("#caption").text(nextCaption).fadeIn(1000);
            });    // end fadeOut()
    },
    3000);         // end setInterval()
});*/


"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {   
        $("#caption").hide(1000);
        $("#slide").slideUp(2000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()
});

/*"use strict";
$(document).ready( () => {
	//preload images
	$("#slides").each( (index, link) => {
		const image = new Image();
		image.src = link.href;
	});
	
	// set up event handlers for links    
	$("#slides").click( evt => {
		const link = evt.currentTarget;
        //swap image
	$("#slides").attr("src", link.href);

    //swap caption
    $("#caption").text(link.title);

    // cancel the default action of the link
	evt.preventDefault(); //jQuery cross-browser method
});
	
	// move focus to first thumbnail
	$("li:first-child a").focus();

});*/