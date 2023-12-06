document.addEventListener('DOMContentLoaded', function(){
    var boxes = document.querySelectorAll('.box');
    var player = "cross";
    boxes.forEach(function(box){
        
        box.addEventListener('click', function(){
            if(!box.classList.contains('crossbg') && !box.classList.contains('circlebg')){
                if(player == "cross"){
                    box.classList.add('crossbg');
                    player = "circle";
                }
                else{
                    box.classList.add('circlebg');
                    player = "cross";
                }
            }
        });
    });
});