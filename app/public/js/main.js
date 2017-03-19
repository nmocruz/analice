$(document).ready(function(){



    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

    

    //Contact Page Map Centering
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width" : mw,
        "height" : wh
    });

    if(ww>1100){
         $('#map').css({
            "margin-left" : hw
        });
    }

   



    //Tooltip
    $("a").mouseover(function(){

        var attr_title = $(this).attr("data-title");

        if( attr_title == undefined || attr_title == "") return false;
        
        $(this).after('<span class="tooltip"></span>');

        var tooltip = $(".tooltip");
        tooltip.append($(this).data('title'));

         
        var tipwidth = tooltip.outerWidth();
        var a_width = $(this).width();
        var a_hegiht = $(this).height() + 3 + 4;

        //if the tooltip width is smaller than the a/link/parent width
        if(tipwidth < a_width){
            tipwidth = a_width;
            $('.tooltip').outerWidth(tipwidth);
        }

        var tipwidth = '-' + (tipwidth - a_width)/2;
        $('.tooltip').css({
            'left' : tipwidth + 'px',
            'bottom' : a_hegiht + 'px'
        }).stop().animate({
            opacity : 1
        }, 200);
       

    });

    $("a").mouseout(function(){
        var tooltip = $(".tooltip");       
        tooltip.remove();
    });


});


class MainView extends HTMLElement {

    createdCallback () {
        this._view = null;
        this._isRemote = (this.getAttribute('remote') !== null);
    }

    
   loadView (data) {
       
        this._view = new DocumentFragment();
        const xhr = new XMLHttpRequest();

        xhr.onload = evt => {
            const newDoc = evt.target.response;

            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            // Copy in the child nodes from the parent.
            newDoc.childNodes.forEach(node => {
                this._view.appendChild(node);
            });

            // Add the fragment to the page.
            this.appendChild(this._view);
        };
        xhr.responseType = 'document';
        xhr.open('GET', `${data}?asPartial`);
        xhr.send();
  }
}
document.registerElement('main-view', MainView);

document.addEventListener('click', (event)=>{
    let target = event.target.getAttribute("display-on");
    if(target){
        event.preventDefault();
        window.history.pushState(null, null, event.target.href);
        let mainView = document.getElementById(target); 
        if(mainView)
        {
            mainView.loadView(event.target.href)
        }   
    }
})


