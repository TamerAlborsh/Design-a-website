$('.owl-carousel').owlCarousel({
    loop:true,
    margin:4,

    autoplay: true,
    autoplaySpeed:1000,
    dotsSpeed:1000,

    nav:false,
    navSpeed:1000,

    center: true,
    autoWidth:false,

    responsiveClass:true,
    responsive:{
        320:{
            items:1
        },
        480:{
            items:1
        },
        640:{
            items:2
        },
        768:{
            items:2
        },
        1024:{
            items:3
        },
        1280:{
            items:4
        }
    }        
})

// header_mobil
var mob = document.getElementById('header_mob');
function open_header()
{
    if(mob.style.display == 'none')
    {
        mob.style.display = 'block';
    }

    else if(mob.style.display == 'block')
    {
        mob.style.display = 'none';
    }
    else
    {
        mob.style.display = 'none';
    }
   
}

// navbar_mobil
var mob_nav = document.getElementById('navbar_mob');
function open_navbar()
{
    if(mob_nav.style.display == 'none')
    {
        mob_nav.style.display = 'block';
    }

    else if(mob_nav.style.display == 'block')
    {
        mob_nav.style.display = 'none';
    }
    else
    {
        mob_nav.style.display = 'none';
    }
   
}