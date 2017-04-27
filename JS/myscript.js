$(function Imageloader() {

    var width = 1160;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
	var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
	$slideContainer.animate({'margin-left': '0px'}, animationSpeed);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});

function validateFooter() {
    var ret = true;
    var Error = "";
    if(document.getElementById('txtName').value == "")
        {
            document.getElementById('txtName').style.outline = "2px solid red"
            ret = false;
            Error = Error + " Name Required";
        }
    else
        {
            document.getElementById('txtName').style.outline = "0px solid grey"
        }
    if(document.getElementById('txtEmail').value == "")
        {
            document.getElementById('txtEmail').style.outline = "2px solid red"
            ret = false;
            Error = Error + " Email Required";
        }
    else
        {
            document.getElementById('txtEmail').style.outline = "0px solid grey"
        }
    if(document.getElementById('txtMessage').value == "")
        {
            document.getElementById('txtMessage').style.outline = "2px solid red"
            Error = Error + " Message Required";
            ret = false;
        }
    else
        {
            document.getElementById('txtMessage').style.outline = "0px solid grey"
        }
    if(!ret)
        {
            document.getElementById('errorFooterLabel').innerHTML = "Errors :"+Error;
        }
    else
        {
            document.getElementById('errorFooterLabel').innerHTML = "";
        }
    return ret;
}

var topscroll = 125;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > topscroll) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

function service_slider(imagenumber) {
document.getElementById("service_frame").style.backgroundImage="url('../Images/services/img"+imagenumber+".jpg')";
}

$(document).ready(function(){
$('#serviceList li a').mouseover(function(){
    var imagePath = $(this).attr('id');
    $('#service_frame').fadeOut(200, function(){
       $(this).css('background-image',"url('https://chavangaurav.github.io/mmk/Images/services/"+imagePath+".jpg')").fadeIn(200); 
    });
});
});


$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

$(function imagethumbnail() {
    $(".image_thumbnail img").hover(function(){
  $(this).next('h1').css('display','block');
    },
    function(){ 
        $(".image_thumbnail h1").css('display','none').fadeOut();
    }); 
});

$(document).ready(function() {
  $('#contact_form').submit(function(e) {
    var name    = $('#txtName').val();
    alert(name);
    var number = $('#txtNumber').val();
    alert(number);
    var email   = $('#txtEmail').val();
    alert(email);

    if ( name =="" || email == "" || number == "") {
      alert("Please check your entries");
      return false;
    } else {
      $.ajax({
        url: "//formspree.io/chavangaurav@hotmail.com",
        method: "POST",
        data: $('#contact_form').serialize(),
        dataType: "json"
      });
      e.preventDefault();
      $('.contact_form').prepend('<p> Your Mail has been Succesfully Sent</p>');  
      $(this).get(0).reset();
      alert("Message sent");
    }
  });
});
