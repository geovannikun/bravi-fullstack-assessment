var a = process.argv[2];
var lastLength = 0;

while(a && a.length != lastLength){
    lastLength = a.length;
	a = a.replace("()","").replace("[]","").replace("{}","");
}

if(a.length){
    console.log("Brackts invalid"); 
}else{
    console.log("Brackts valid");
}