
var coll = document.getElementsByClassName("collapse");

for (i = 0; i < coll.length; i++){

    document.getElementsByClassName("collapse")[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var target = this.nextElementSibling;
        if(target.style.maxHeight){
            target.style.maxHeight = null;

        } else {
            target.style.maxHeight = target.scrollHeight + "px";
        }
        
    })
}

