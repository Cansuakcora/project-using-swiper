// SWIPER

$(document).ready(function () {
    $('.banner-video__lang-link').eq(0).html('ENGLISH');
    $('.banner-video__lang-link').eq(1).html('ESPAÑOL');
    // MODAL MENU
    $('.modal__close-menu').click(function () {
        $('.modal__menu').hide();
        $('#menu-icon').show();
        $('#menu-icon-active').hide();
    });

    $('#menu-icon').click(function () {
        $('.modal__login').hide();
        $('.modal__menu').toggle();
        $(this).hide();
        $('#menu-icon-active').show();

        $('#user-icon').show();
        $('#user-icon-active').hide();
    });

    // MODAL LOGIN
    $('.modal__close-login').click(function () {
        $('.modal__login').hide();
        $('#user-icon').show();
        $('#user-icon-active').hide();
    });

    $('#user-icon').click(function () {
        $('.modal__menu').hide();
        $('#menu-icon-active').hide();
        $('#menu-icon').show();

        $('.modal__login').toggle();
        $(this).hide();
        $('#user-icon-active').show();
    });

    // MODAL SEARCH
    $('#search-icon').click(function () {
        $('#modal__search').show();
        $('#search-icon-active').show();
        $(this).hide();
        
        // if ($(this).hasClass('hide')){
        //     $(this).removeClass('hide');
        //     $('#search-icon-active').hide();
        // }

        // else{
        //     $(this).addClass('hide');
        //     $('#search-icon-active').show();
        // }
    });

    $('#search-icon-active').click(function(){
        $('#modal__search').hide();
        $('#search-icon').show();
        $(this).hide();
    })


    // MOBILE DOT
    // MODAL LOGIN
    $('.modal__close-mobile-menu').click(function () {
        $('.modal__mobile-menu').hide();
        $('.bg-yellow').css('backgroundColor , #fff')
    });

    $('#mobile-dot').click(function () {
        $('.modal__mobile-menu').show();
    });

    $('#mobile-dot').click(function () {
        $('.video-head__mobile-btn').addClass('bg-yellow');
    });

    // VIDEO DETAİL SHOW
    $('.video-head__info').click(function () {
		var web = $(this).data('web');
		var title = $(this).find('.video_title').text();
		var subtitle = $(this).find('.video_subtitle').text();
		var speaker = $(this).find('.video_speaker').text();
		
		$('#video-detail').find(".detail_title").text(title);
		$('#video-detail').find(".detail_subtitle").text(subtitle);
		$('#video-detail').find(".detail_speaker").text(speaker);
		$('#video-detail').find(".video-web__pstn").html(web);
        $('#video-detail').slideDown();
        $('.video-head__buttons').addClass('show-btn');
        $('.banner-video__title').addClass('head-title-pstn');
    });

    

});

// Button session class
$('.btn1').click(function () {
    //btn-active
    $('.btn2').removeClass("video-head__btn-active");
    $('.btn1').addClass("video-head__btn-active");
    //video-show-hide
    $('#video-page2').addClass("video-head__hide");
    $('#video-page2').removeClass("video-head__show");

    $("#video-page1").removeClass("video-head__hide").addClass("video-head__show");

    $('.news__detail-title').show()

});

// Button session class
$('.btn2').click(function () {

    $('.btn1').removeClass("video-head__btn-active");
    $('.btn2').addClass("video-head__btn-active");
    //video-show-hide
    $('#video-page1').addClass("video-head__hide");
    $('#video-page1').removeClass("video-head__show");

    // $('.news__detail-title').hide()

    $("#video-page2").removeClass("video-head__hide").addClass("video-head__show");
});


//! --------------------------- VIDEO SHOW/HIDE ------------------------- //!



//! ----- HEADER POSITION FIXED ----- //!

if (window.matchMedia("(min-width:991px)")) {
    var prevScrollpos = window.pageYOffset;
    let headerLink = document.querySelectorAll('.nav-desktop__list__link');

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        // document.addEventListener("click", menuClick);

        // function menuClick() {
        //     headerLink.forEach(element => {
        //         element.addEventListener('click', e => {
        //             console.log("tıklandı")
        //             document.getElementById("header").style.top = "-100px";
        //         });
        //     });
        // }


        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-170px";
        }
        prevScrollpos = currentScrollPos;
    }

}

// MODAL-CLOSE

//! BROWSER CHECK //!
window.onload = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.querySelector(".footer").classList.remove("flex-row-center");
    }
}
//! BROWSER CHECK //!


//***********************/ search button ***************//
function myFunction() {
    // Declare variables
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".myUL");
    li = ul.getElementsByClassName('myli');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//********************** */ search button ***************//