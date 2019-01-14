// Menus
    var showLinks = () => {
        // var init
        let links = document.querySelector('.mainLinksMobile');

        // Conditional for height check
        if (links.style.height == '0px') {
            links.style.height = '224px';
        } else {
            links.style.height = '0px';
        }
    }

    var altShow = () => {
        // Init var
        let links = document.querySelector('.altLinks');

        // Conditional
        if (links.style.height == '0px') {
            links.style.height = '144px';
        } else {
            links.style.height = '0px';
        }
    }

// Scrolltop opacity
    // On scroll, check where scrolltop is and adjust the opacity of the header accordingly
    $(window).scroll(function() {
        // Check scroll top position
        if ($(window).scrollTop() > 0) {
            document.querySelector('header').style.opacity = '.85';
        } else {
            document.querySelector('header').style.opacity = '1';
        }
    });

// Hover Opacity
    // On header hover, change the opacity to 1
    $('header').mouseover(function() {
        this.style.opacity = '1';
    });

    // When cursor leaves the header, check the scrollTop and determine if opacity needs to be readjusted or not
    $('header').mouseout(function() {
        if ($(window).scrollTop() > 0) {
            document.querySelector('header').style.opacity = '.85';
        } 
    });

// Smooth Scroll
    // Check all local links
    $(document).on('click', 'a[href^="#"]', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Animate the scroll to the links target
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

// Active States POTENTIALLY