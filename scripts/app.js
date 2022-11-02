document.addEventListener('DOMContentLoaded', ()=>{

    const menuLinks = document.querySelectorAll('.link[data-goto]')

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 50;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    window.addEventListener('scroll', throttle(parallax, 14));

        function throttle(fn, wait) {
        var time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
            }
        }
        };

        function parallax() {
        var scrolled = window.pageYOffset;
        var parallax = document.querySelectorAll(".parallax");
        // You can adjust the 0.4 to change the speed
        var coords = (scrolled * -0.2);
        if (parallax.length != 0) {
            parallax.forEach(function(item) {
                let customSpeed = item.getAttribute('data-speed');
                item.style.transform = 'translateY(' + coords * customSpeed +'px)';
            })
        }
        
        };

       
})