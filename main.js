let mailUl =  document.querySelector(".mainul");
let iframe = document.getElementById("iframe")
let mainNavArray = mailUl.children
let mainPages = ["starter-code/landing.html","starter-code/destination.html","starter-code/crew-specialist.html","starter-code/technology.html"]
let crewPages = ["starter-code/crew-commander.html","starter-code/crew-specialist.html" , "starter-code/crew-pilot.html", "starter-code/crew-engineer.html"]

function mainNavigation(num) {
    iframe.setAttribute("src",mainPages[num])
    for(i=0;i<mainNavArray.length;i++){
        mainNavArray[i].classList.remove("active")
    }
    mainNavArray[num].classList.add("active")
    num==2?setTimeout( declaring,200):console.log("timeout")
}
function declaring (){
    globalThis.iframeDocument  = iframe.contentDocument;
    // let iframeDocument  = iframe.contentDocument;
    globalThis.dots = iframeDocument.querySelector("div.swicher")
    globalThis.spanArray = dots.children
    spanArray.onclick = ()=>{
        console.log("working")
    }
}
