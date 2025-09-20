

var body_tag = document.querySelector("body");
body_tag.onmousemove = function(event){
    var x_pos = event.offsetX;
    var y_pos = event.offsetY;
    var span_tag = document.createElement("SPAN");
    span_tag.style.left = x_pos+"px";
    span_tag.style.top = y_pos+"px";
    var size = Math.floor(Math.random()*100);
   span_tag.style.width= size+"px";
   span_tag.style.height=size+"px";
    body_tag.appendChild(span_tag);

    setTimeout(function(){
        span_tag.remove();

    },3000)

}