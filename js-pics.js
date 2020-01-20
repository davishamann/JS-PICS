// Program Goals 
//    * link an entire class with a click event
//    * loop through an array
//    * change a picture based on an event.  
//    * count the number of times a button has been clicked with a global variable

window.addEventListener("load", link_events, false); 

// global variables 
var pictures = [
	"hogfish.jpg",
	"turtle.jpg",
	"pfish.jpg"
];
var count =0;
var cur_pic=0;

function link_events() {
	// this function is run when window is done loading to test use alert("hello");
	document.getElementById("submit").onclick=pic_click;
	document.getElementById("fishpic").onclick=pic_change;
	//make some pics clicable
	var fishes = document.getElementsByClass("somepics");
	var i;
	for (i=0; i<fishes.length;i++){
	    fishes[i].onclick=some_function;
	}
	setInterval(pic_click,1000);
}
function somefunction(){
    alert ('hello');
}
function pic_change(){
    //when picture is clicked
    //loop through all images of class='somepics' 
    var fishes = document.getElementsByClassName("somepics");
    var i;
    //and set their pictures
    for (i=0;i <fishes.length;i++){
        fishes[i].src=pictures[i];
    
    }
    var outarea = document.getElementById("outarea");
    outarea.innerHTML= "Set all fish pictures";
}

function pic_click(){ //button was clicked
    //change fishpic to "next pic in array".
    cur_pic++;
    if (cur_pic> pictures.length -1){
        cur_pic=0;
    }
    document.getElementById("fishpic").src=pictures[cur_pic];
    //update count and print it
    count++;
    document.getElementById("outarea").innerHTML= "Count: "+ count;
}