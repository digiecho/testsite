// JavaScript Document
var speed = 0;
var scroll = 0;
var container = $('.slider');
var container_w = container.width();
var max_scroll = container[0].scrollWidth - container.outerWidth();

container.on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
}).on('mouseleave', function () {
    speed = 0;
});

function updatescroll() {
    if (speed !== 0) {
        scroll += speed / 5;
        if (scroll < 0) scroll = 0;
        if (scroll > max_scroll) scroll = max_scroll;
        $('.slider').scrollLeft(scroll);
    }
    $("#speed").html('Speed: ' + speed);
    $("#scroll").html('Scroll: ' + scroll);
    window.requestAnimationFrame(updatescroll);
}
window.requestAnimationFrame(updatescroll);


//wheel
var item = document.getElementsByTagName('body')[0];

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

//links

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});