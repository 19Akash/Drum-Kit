for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);
    function handleclick(){
        var w=this.innerHTML;
        switch (w){
            case "w":
                var audio=new Audio("./sounds/tom-0.mp3");
                audio.play(); 
            case "a":
                var audio=new Audio("./sounds/tom-1.mp3");
                audio.play(); 
            case "s":
                var audio=new Audio("./sounds/tom-2.mp3");
                audio.play(); 
            case "d":
                var audio=new Audio("./sounds/tom-3.mp3");
                audio.play(); 
            case "j":
                var audio=new Audio("./sounds/tom-4.mp3");
                audio.play(); 
            case "k":
                var audio=new Audio("./sounds/tom-5.mp3");
                audio.play();
            case "l":
                var audio=new Audio("./sounds/tom-6.mp3");
                audio.play(); 
        }
    }
    
}
document.addEventListener("keydown", function(event){
    var w=event.key;
    switch (w){
        case "w":
            var audio=new Audio("./sounds/tom-0.mp3");
            audio.play(); 
        case "a":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play(); 
        case "s":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play(); 
        case "d":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play(); 
        case "j":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play(); 
        case "k":
            var audio=new Audio("./sounds/tom-5.mp3");
            audio.play();
        case "l":
            var audio=new Audio("./sounds/tom-6.mp3");
            audio.play(); 
    }

})
