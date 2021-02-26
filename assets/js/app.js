// jQueru

$(function() {
    
    /* Fixed Header */
    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    checkScroll(scrollPos, headerH)
    
    
    $(window).on("scroll resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(window).scrollTop();
        
        checkScroll(scrollPos, headerH)
        
        nav.removeClass("show");	
        header.removeClass("bacgroundColor");

    });
    
    
    function checkScroll(scrollPos, headerH) {
        if (scrollPos >= headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
    
    
    /*Nav Toggle*/
    let nav = $("#nav");
    let jsBurger = $("#jsBurger");
    
    jsBurger.on("click", function (event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        header.toggleClass("bacgroundColor");
    });
    
    
    
    /*Switching*/
    let myImage = $(document.getElementById("myImage")); 
    
    myImage.on("click", function () {
        if(document.body.style.backgroundColor)
            document.body.style.backgroundColor = "";
        else
            document.body.style.backgroundColor = "#E4E4E4";
        }); 
});