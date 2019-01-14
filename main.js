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
    let body = document.querySelector('body');
    body.addEventListener('scroll', function() {
        // let header = document.querySelector('header');
        console.log(body.scrollTop);
    });

// Hover Opacity

// Smooth Scroll

// Active States
        