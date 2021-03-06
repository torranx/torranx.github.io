const ids = {
    "#ET-box": "#ET-desc",
    "#URLS-box": "#URLS-desc",
    "#MDP-box": "#MDP-desc",
    "#DM-box": "#DM-desc",
    "#RQG-box": "#RQG-desc"
}

const info = (parentId, childId) => {
    $(parentId).click(function() {
        $(childId).toggle("blind");
    })
}

$(document).ready(function() {
    $(window).scroll(function() {
        $(".project-tile").each(function() {
            let bottomWindow = $(window).scrollTop() + $(window).innerHeight();
            let bottomObj = $(this).offset().top;
            if (bottomObj < bottomWindow) { 
                if ($(this).css("opacity")==0) {
                    $(this).css('animation', 'SlideUp 1.5s ease');
                    $(this).fadeTo(1000,1);
                }
            } 
        });
    });
    for (const [key, value] of Object.entries(ids)) {
        info(key, value)
    }
});

$(document).ready(function() {
    $(window).scroll(function() {
        $(".other").each(function() {
            let bottomWindow = $(window).scrollTop() + $(window).innerHeight();
            let bottomObj = $(this).offset().top;
            if (bottomObj < bottomWindow) { 
                if ($(this).css("opacity")==0) {
                    $(this).css('animation', 'SlideUp 1.5s ease');
                    $(this).fadeTo(1000,1);
                }
            } 
        });
    })
});

