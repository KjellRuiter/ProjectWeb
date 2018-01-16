//Bron : Thijs Bouwes

//hier wroden de var aangemaakt. 
var add_button = document.querySelector(".add");
var download_button = document.querySelector(".download");
var readbar = document.querySelector(".readbar span");
var readbar_plane = document.querySelector(".readbar span i");
var filter_button = document.querySelector(".filter_button");

var scrolled = 0;
var total_height = 0;

//opslaanbutton en download button.  als opslaan button actief is kun je de download button zien en als hij niet actief is staat de download buton op hidden. 

if (add_button) {
   add_button.addEventListener('click', showDownload); 
}

if (download_button) {
  download_button.addEventListener ('click',veranderDownload);  
}


function showDownload () {
    add_button.classList.toggle("active");
    download_button.classList.toggle("active");
}

function veranderDownload () {
    download_button.classList.toggle("process");
}
// readbar 
if (readbar) {
    window.addEventListener("scroll", function(e){
        // determine direction
        var direcction_down = scrolled < window.scrollY;
        
        scrolled = window.scrollY;
        total_height = document.body.scrollHeight;

        // 20% offset
        var percentage_scrolled = 20 + Math.round(scrolled / total_height * 100);
        readbar.style.width = percentage_scrolled + "%";
        
        if (direcction_down === false) {
            readbar_plane.classList.add("direction_up");
        } else {
            readbar_plane.classList.remove("direction_up");
        }
        
        if (percentage_scrolled >= 100 ) {
            readbar.style.backgroundColor = "#00D66C"; 
        } else {
            readbar.style.backgroundColor = "#ff3268"; 
        }
    })   
    
}

//fitrebutton click event met toggle waardoor je hem in en uitklap.
if (filter_button) {
    filter_button.addEventListener ('click', showFilter);
}

function showFilter() {
    document.querySelector(".filters").classList.toggle("active");
}