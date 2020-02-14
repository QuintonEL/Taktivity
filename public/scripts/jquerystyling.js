jQuery(function($){
    //NAV BAR SIGN UP BUTTON
        $("#modalBtn-login").hover(function(){
            $(this).css({
                'color' : 'rgb(255, 140, 0)',
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
    
    ///MODAL SIGNUP BUTTOM
        $("#modalloginbtn").hover(function(){
            $(this).css({
                'color' : 'white',
                
                'border' : 'solid 1px rgb(255, 140, 0)'
            }
                
            );
            }, function(){
            $(this).css({
                'color' : 'rgba(255, 255, 255, 0.400)',
                
                'background-color' : 'rgba(255, 255, 255, 0.171)',
                'border' : 'solid 1px rgba(255, 255, 255, 0)'
            });
          });
    ///NAV BAR LOGIN BUTTON
        $("#modalBtn").hover(function(){
            $(this).css({
                'color' : 'rgb(0, 162, 255)',
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
    ///MODAL LOGIN BUTTON      
          $("#modalsignupbtn").hover(function(){
            $(this).css({
                'color' : 'white',
                
                'border' : 'solid 1px rgb(0, 162, 255)'
            }
                
            );
            }, function(){
            $(this).css({
                'color' : 'rgba(255, 255, 255, 0.400)',
                
                'background-color' : 'rgba(255, 255, 255, 0.171)',
                'border' : 'solid 1px rgba(255, 255, 255, 0)'
            });
          });
          
    
    })
    