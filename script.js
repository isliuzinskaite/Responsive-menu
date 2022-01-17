"use strict";

// alert("Labas");

var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
    }
    this.classList.toggle("rotateZ");
});

var anchors = document.getElementsByTagName("a");
for(var x of anchors) {
    x.addEventListener("click", function(){
        for(var i = 0; i < anchors.length; i++){
            anchors[i].classList.remove("selected")
        }
        this.classList.add("selected");
    });
}

function toggle(TagName){
    var anchors = document.getElementsByTagName("a");
    anchors.style.display = (anchors.style.display != 'none' ? 'none' : '');
}





