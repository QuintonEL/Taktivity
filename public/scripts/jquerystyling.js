jQuery(function($){

    $("#modalBtn",).hover(function(){
        $(this).css({
            'color' : 'rgb(221, 124, 5)',
            'border-top' : '2px solid rgb(114, 72, 21)',
            'border-left' : '2px solid rgb(114, 72, 21)',
            'border-right' : '1px solid rgb(187, 117, 32)',
            'border-bottom' : '1px solid rgb(187, 117, 32)'
        }
            
        );
        }, function(){
        $(this).css({
            'color' : 'rgb(108, 96, 119)',
            'border-top' : '1px solid rgb(148, 94, 133)',
            'border-left' : '1px solid rgb(148, 94, 133)',
            'border-right' : '2px solid rgb(73, 55, 90)',
            'border-bottom' : '2px solid rgb(73, 55, 90)'
        });
      });

    $("#modalBtn-login",).hover(function(){
        $(this).css({
            'color' : 'rgb(16, 134, 219)',
            'border-top' : '2px solid rgb(13, 64, 100)',
            'border-left' : '2px solid rgb(13, 64, 100)',
            'border-right' : '1px solid rgb(26, 120, 187)',
            'border-bottom' : '1px solid rgb(26, 120, 187)'
        }
            
        );
        }, function(){
        $(this).css({
            'color' : 'rgb(108, 96, 119)',
            'border-top' : '1px solid  rgb(148, 94, 133)',
            'border-left' : '1px solid  rgb(148, 94, 133)',
            'border-right' : '2px solid rgb(73, 55, 90)',
            'border-bottom' : '2px solid rgb(73, 55, 90)'
        });
      });

})
