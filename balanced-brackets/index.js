var a = "()[]{}{}{{}}";
var lastLength = 0;

while(a && a.length != lastLength){
    lastLength = a.length;
    a = a.split("()").join("").split("[]").join("").split("{}").join("");
}

if(a.length){
    console.log("Brackts invalid"); 
}else{
    console.log("Brackts valid");
}