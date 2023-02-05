window.onload=()=>{
   var mainbox = document.querySelector(".mainbox");
    var range = document.querySelector(".range");
    
    var copycode = document.querySelector(".copycode");
    var options = document.querySelectorAll(".options div");
    
    var maincode = document.querySelector(".code");
    
var allVals = document.querySelectorAll(".val");    
    
    
    var sizeid = document.querySelector("#size");
    var disp = document.querySelector(".disp");
    
    var shadowid = document.querySelector("#shadow");

var blurid = document.querySelector("#blur");

var opts = document.querySelector(".options");

var darktheme= document.querySelector("#moon");

var radiusid = document.querySelector("#radius");


var shadowval = document.querySelector("#shadow .val");

var blurval = document.querySelector("#blur .val");
var sizeval = document.querySelector("#size .val");

var radiusval = document.querySelector("#radius .val");

var colorinput  = document.querySelector(".inpcolor");

var rotate = document.querySelector(".rotate");

var showcode = document.querySelector(".showcode");



// console.log(shadowval)   

// Code grounds's variables 


var shadeX =document.querySelector(".shadeone")

var shadeY =document.querySelector(".shadetwo")

var blurX =document.querySelector(".shadeblur")

var colorshadeX =document.querySelector(".shadecolor")
// sec
var shadeXone =document.querySelector(".shadexone")

var shadeYtwo =document.querySelector(".shadextwo")

var blurXtwo =document.querySelector(".shadexblur")

var colorshadeY =document.querySelector(".shadexcolor")

var blurcode =document.querySelector(".blur")

var bordercode =document.querySelector(".border")

var heightrcode =document.querySelector(".height")
var widthcode =document.querySelector(".width")

var bordercode =document.querySelector(".border")

var rotate =document.querySelector(".rotate")







    
//colors 
let whitebb = "#acacac"
let whiteff = "#ffffff"

let dark ="#4a4a4a"
    
    
let blur = 5;

let radius = 8;

let size = 100;

let shadow = 8;    

//blur logic    
    
let blurlogic = 0;

let radiuslogic = 0;

let sizelogic = 0;

let shadowlogic = 0;



   
   
   
// editing logiv   
  
  function edited(){
      mainbox.style.borderRadius=`${radius}px`;
      
      mainbox.style.width=`${size}px`;
      mainbox.style.height=`${size}px`;
      
     mainbox.style.boxShadow=`${shadow}px ${shadow}px ${blur}px  ${whitebb},
   -${shadow}px -${shadow}px ${blur}px  ${whiteff}`;
   
   shadeY.innerHTML=shadow
   shadeX.innerHTML=shadow
   blurX.innerHTML=blur
   colorshadeX.innerHTML=whitebb


   shadeXone.innerHTML=shadow
   shadeYtwo.innerHTML=shadow
   blurXtwo.innerHTML=blur
   colorshadeY.innerHTML=whiteff
   heightrcode.innerHTML=size
   widthcode.innerHTML =size
   bordercode.innerHTML=radius
      
  } 
  edited();
   
   
   
  //add active class on click  
   options.forEach(opt=>{
   opt.addEventListener("click",()=>{
   var actclass = document.querySelector("div .active")
  actclass.classList.remove("active")
  opt.classList.add("active");
           })
       
    }) 
    
    
    
sizeid.onclick=()=>{
    sizelogic=1;
    
    range.max=300;
    range.min=30;
    range.value=size;
}

blurid.onclick=()=>{
    blurlogic=1;
    
    range.max=30;
    range.min=0;
    range.value=blur;
}

radiusid.onclick=()=>{
    radiuslogic=1;
    
    range.max=size/2;
    range.min=0;
    range.value=radius;
}


shadowid.onclick=()=>{
    blurlogic=1;
    range.max=50;
    range.min=0;
    range.value=shadow;
}



    
    
    
range.oninput =()=>{
    var classid = document.querySelector("div .active");
    
    switch(classid.id){
        case "blur":
          blur =range.value;
          blurval.innerHTML=blur +"px";
          
        break;
        case "size":
        size=range.value
        sizeval.innerHTML=size +"px";

        break;
        case "shadow":
         shadow=range.value
         shadowval.innerHTML=shadow +"px";
         
         break;
         case "radius":
         radius=range.value
         radiusval.innerHTML=radius +"px";
         break;
        
    }
    edited();
 }


var body = document.querySelector("body")    
 
    
    
    
function changetheme(){

    
disp.style.background=dark;

body.style.background=dark;

opts.style.background=dark;

disp.style.boxShadow=`12px 12px 15px ${whitebb}, -12px -12px 19px ${whiteff}`;

opts.style.boxShadow=`12px 12px 15px ${whitebb}, -12px -12px 19px ${whiteff}`;

 /*options.forEach(ev=>{
     ev.style.background ="#555"
   })*/
   
   
   
   
 
 
edited()

}       

    
    
darktheme.onclick=()=>{


if(darktheme.className=="fa-solid fa-moon"){
darktheme.style.background="#eee";
darktheme.style.color="#333";
mainbox.style.background="#4a4a4a"

whiteff="#555555"
whitebb="#3f3f3f"
dark ="#4a4a4a"  
darktheme.style.padding="10px"
range.classList.add("dark");

   options.forEach((event)=>{
   event.style.border="solid 2px #666"
   event.style.background="#555"
   event.style.color="#595979"
   })
   disp.style.border="solid #444 1px"
   changetheme() 
   darktheme.className="fa-solid fa-sun"
   
   allVals.forEach(ev=>{
     ev.style.background ="linear-Gradient(45deg,#777,#444)"
     ev.style.boxShadow=`4px 4px 5px ${whitebb}, -4px -4px 5px ${whiteff}`;
     ev.style.color="#badedd"
   })
   colorinput.classList.add("dark");
   rotate.classList.add("dark");
   showcode.classList.add("dark");
   
   maincode.classList.add("dark");
   copycode.classList.add("dark");
}

else
{

    whitebb = "#acacac"
   whiteff = "#ffffff"
   mainbox.style.background="#e0e0e0"
   options.forEach((event)=>{
   event.style.border="solid 2px #aaa"
   event.style.background="#e0e0e0"
   
   })
   disp.style.border="solid #ccc 1px"
dark ="#eee"  
darktheme.style.background="#333";
darktheme.style.color="#eee";
range.classList.remove("dark")
darktheme.style.padding="10px 15px"
     
    changetheme()
    darktheme.className="fa-solid fa-moon"
    
    allVals.forEach(ev=>{
     ev.style.background ="linear-Gradient(45deg,#ddd,#fff)"
     ev.style.boxShadow=`4px 4px 5px ${whitebb}, -4px -4px 5px ${whiteff}`;
     ev.style.color="#f80add"
   })
   colorinput.classList.remove("dark");
   rotate.classList.remove("dark");
showcode.classList.remove("dark");
   
    maincode.classList.remove("dark");
    copycode.classList.remove("dark");
}


}

let codelogic =0;

showcode.onclick=()=>{
 if(codelogic==0){
    disp.style.visibility="hidden"
    setTimeout(()=>{
        maincode.style.display="block"
    },400)
    
    showcode.innerHTML ="Hide code"
    codelogic=1
}
else{

  disp.style.visibility="visible"
    maincode.style.display="none"
    showcode.innerHTML ="Show code"
    codelogic=0
    
}


}

function copied(txt){
  var div = document.createElement("div")
  div.className="txt"
  div.innerHTML =txt;
  document.querySelector("body").appendChild(div)
    setTimeout(()=>{
        div.style.display="none"
    },4000)
}








copycode.onclick=(id)=>{
    var text = document.querySelector("pre").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    copied("Copied")
}


rotate.onclick=()=>{
    copied("This button is not work becouse of Giga chad wont't have time to create this logic 🗿")
    
    
    
}





}


    
    



