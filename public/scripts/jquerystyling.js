jQuery(function($){

    $("#modalBtn",).hover(function(){
        $(this).css({
            'border-top' : '2px solid #577b83',
            'border-left' : '2px solid #577b83',
            'border-right' : '1px solid rgb(105, 179, 177)',
            'border-bottom' : '1px solid rgb(105, 179, 177)'
        }
            
        );
        }, function(){
        $(this).css({
            'border-top' : '1px solid rgb(105, 179, 177)',
            'border-left' : '1px solid rgb(105, 179, 177)',
            'border-right' : '2px solid #577b83',
            'border-bottom' : '2px solid #577b83'
        });
      });

    $("#modalBtn-login",).hover(function(){
        $(this).css({
            'border-top' : '2px solid rgb(73, 55, 90)',
            'border-left' : '2px solid rgb(73, 55, 90)',
            'border-right' : '1px solid rgb(26, 120, 187)',
            'border-bottom' : '1px solid rgb(26, 120, 187)'
        }
            
        );
        }, function(){
        $(this).css({
            'border-top' : '1px solid  rgb(148, 94, 133)',
            'border-left' : '1px solid  rgb(148, 94, 133)',
            'border-right' : '2px solid rgb(73, 55, 90)',
            'border-bottom' : '2px solid rgb(73, 55, 90)'
        });
      });

})
