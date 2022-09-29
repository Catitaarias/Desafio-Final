$(document).ready(function(){
    $("a").click(function(){
        var gato = this.hash
        
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            800
        )

    })

    $('[data-bs-toggle="tooltip"]').tooltip();

    $(".card-title").click(function () {
        $(".card-text").toggle();
      });
})