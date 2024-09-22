var start= document.querySelector('.start');
var display = document.querySelector('.display');
var stop = document.querySelector(".stop");

var int;
start.addEventListener("click",function(){
    var count=0;
    int=setInterval(function(){
    display.textContent = count;
    count++;

  },1000);
});

stop.addEventListener("click",function(){
  clearInterval(int);
})


//thankyou so much 
//hope this helps you..... : )