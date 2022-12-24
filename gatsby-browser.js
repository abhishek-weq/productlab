// custom typefaces
import "typeface-montserrat"
// import "typeface-merriweather"

// normalize CSS across browsers
// import "./src/css/normalize.css"

// custom CSS styles
// import "./src/css/style.css"

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    // form tab js
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    activeTab = "#" + activeTab;
    $(activeTab).fadeIn();
    return false;
    });


    //faq js here
    var acc = document.getElementsByClassName("accordion-title");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }



  });
}


