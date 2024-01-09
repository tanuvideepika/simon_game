var level=0;
var flag=true;
var sch=["blue", "green", "red", "yellow"];
var tillnow=[];
var userinp=[];
var started=false;

function buttonPressed(p_btn){
    p_btn.addClass("pressed");
    playSound(p_btn.attr("id"));
    setTimeout(function (){
        p_btn.removeClass("pressed");
    }, 200);
}

function checkIfSameButton(a,b){
    return a.attr('id')==b.attr('id');
}

$(document).keypress(function (){
    if(!started){
        
        started=true;
        nextsequence();

    }
});

$(".btn").click(function (){
    if(started){
        buttonPressed($(this));
        //console.log($(this).attr('id'));
        userinp.push($(this).attr('id'));
        checkanswer(userinp.length-1);
    }
    
})

function nextsequence(){
    level++;
    $("#level-title").text(`Level ${level}`);
    userinp=[];
    var temp=Math.random();
    temp=temp*4;
    temp=Math.floor(temp);
    buttonPressed($(`#${sch[temp]}`));
    tillnow.push(sch[temp]);
}

function checkanswer(i){
    //console.log(userinp[i]);console.log(tillnow[i]);
    if(userinp[i]==tillnow[i]){
        if(userinp.length==tillnow.length){
            setTimeout(function (){
                nextsequence();
            }, 1000);
        }
    }
    else{
        $('body').addClass("game-over");
        $("#level-title").text(`Game Over!`);
        playSound("wrong");
        level=0;
        started=false;
        tillnow=[];
        setTimeout(function (){
            $('body').removeClass("game-over");
            $("#level-title").text(`Press any key to restart the game`);
        }, 2000);
    }
}

function playSound(blue){
    var audio = new Audio(`sounds/${blue}.mp3`);
    audio.play();
}

// function total(){
//     console.log("hehe");
    
    
//     while(flag){
//         level++;
//         $("#level-title").text(`Level ${level}`);
//         var temp=Math.random();
//         temp=temp*4;
//         temp=Math.floor(temp);
//         buttonPressed($(sch[temp]));
//         tillnow.push(temp);
//         $("#level-title").text(`Enter pattern now`);

//         var curr=0;
//         $(".btn").click(function (){
            
//             buttonPressed($(this));
//             console.log($(this));
//             var sameButton=checkIfSameButton($(this),$(sch[curr++]));
//             console.log(sameButton);
//             if(!sameButton){
//                 $("#level-title").text(`Game Over!`);
//                 level=0;
//                 flag=false;
//                 return;
//             }
//             if(curr==tillnow.length)return;
//         });


//         //check();
//         flag=false;
//     }
// }

// function check(){
//     var n=tillnow.length;
//     for(var i=0;i<n;i++){
//         var curr=$(sch[tillnow[i]]);
//         var buttonClicked=false;
//         var correct=true;
//         $(".btn").click(function (){
//             buttonPressed($(this));
//             console.log($(this));
//             var sameButton=checkIfSameButton($(this),curr);
//             if(!sameButton){
//                 $("#level-title").text(`Game Over!`);
//                 level=0;
//                 flag=false;
//             }
//         });
        
//         if(!flag)return;
        
//     }
// }



