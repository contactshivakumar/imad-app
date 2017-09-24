console.log('Loaded!');
var button = document.getElementById("counter");
var counter=0;
alert(button);

button.onclick=function() {
counter=counter+1;
alert(counter.toString());
var span=document.getElementById("count");
span.innerHTML=counter.toString();
};