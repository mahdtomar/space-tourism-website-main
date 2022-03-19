let mailUl = document.querySelector(".mainul");
let iframe = document.getElementById("iframe")
let mainNavArray = mailUl.children
let mainPages = ["starter-code/landing.html", "starter-code/destination.html", "starter-code/crew-specialist.html", "starter-code/technology.html"]
let crewPages = ["starter-code/crew-commander.html", "starter-code/crew-specialist.html", "starter-code/crew-pilot.html", "starter-code/crew-engineer.html"]

function starter(){
    globalThis.iframeDocument = iframe.contentDocument
    globalThis.explorebtn = iframeDocument.getElementById("explorebtn") 
    explorebtn.addEventListener("click",()=>{
        mainNavigation(1)
    })
}

setTimeout(starter,200)

function mainNavigation(num) {
    iframe.setAttribute("src", mainPages[num])
    num==0?setTimeout(starter,200):""
    for (i = 0; i < mainNavArray.length; i++) {
        mainNavArray[i].classList.remove("active")
    }
    mainNavArray[num].classList.add("active")
    let bodyclasslist = document.body.classList;
    switch (num) {
        case 0 :
            clearClasses(bodyclasslist)
            break;
        case 1:
            setTimeout(dstDeclaring, 200)
            clearClasses(bodyclasslist)
            document.body.classList.add("destination")
            break;
        case 2:
            clearClasses(bodyclasslist)
            document.body.classList.add("crew")
            setTimeout(crewDeclaring, 200)
            break;
        case 3:
            clearClasses(bodyclasslist)
            document.body.classList.add("technology")
            setTimeout(techNavigation, 200)
            break;
    }

}

function clearClasses(list){
    for(i=0;i<list.length;i++){
        list.remove(`${list[i]}`)
    }
}

function crewDeclaring() {
    globalThis.iframeDocument = iframe.contentDocument;
    globalThis.dots = iframeDocument.querySelector("div.swicher")
    globalThis.spans = dots.children
    spans[0].onclick = () => {
        1 == 1 ? setTimeout(crewDeclaring, 200) : console.log("timeout")
        iframe.setAttribute("src", "starter-code/crew-specialist.html")
    }
    spans[2].onclick = () => {
        1 == 1 ? setTimeout(crewDeclaring, 200) : console.log("timeout")
        iframe.setAttribute("src", "starter-code/crew-commander.html")
    }
    spans[1].onclick = () => {
        1 == 1 ? setTimeout(crewDeclaring, 200) : console.log("timeout")
        iframe.setAttribute("src", "starter-code/crew-pilot.html")
    }
    spans[3].onclick = () => {
        1 == 1 ? setTimeout(crewDeclaring, 200) : console.log("timeout")
        iframe.setAttribute("src", "starter-code/crew-engineer.html")
    }
}

function dstDeclaring() {
    globalThis.iframeDocument = iframe.contentDocument;
    globalThis.dstNav = iframeDocument.getElementById("dstnav")
    globalThis.dstIframe = iframeDocument.getElementById("dstiframe")
    globalThis.dstimg = iframeDocument.getElementById("dstimg")
    let smallNavArr = dstNav.children
    dstNav.onclick = (e) => {
        let currentLi = e.target;
        for (i = 0; i < smallNavArr.length; i++) {
            smallNavArr[i].classList.remove("active")
        }
        currentLi.classList.contains("a") ? currentLi.parentElement.classList.add("active") : currentLi.classList.add("active")
        switch (currentLi.textContent) {
            case "Mars":
                dstIframe.setAttribute("src", "/starter-code/destination-mars.html")
                dstimg.setAttribute("src", "/starter-code/assets/destination/image-mars.png")
                break;
            case "Titan":
                dstIframe.setAttribute("src", "/starter-code/destination-titan.html")
                dstimg.setAttribute("src", "/starter-code/assets/destination/image-titan.png")
                break;
            case "Moon":
                dstIframe.setAttribute("src", "/starter-code/destination-moon.html")
                dstimg.setAttribute("src", "/starter-code/assets/destination/image-moon.png")
                break;
            case "Europa":
                dstIframe.setAttribute("src", "/starter-code/destination-europa.html")
                dstimg.setAttribute("src", "/starter-code/assets/destination/image-europa.png")
                break;
            default:
                break;
        }
    }
}

function techNavigation() {
    globalThis.iframeDocument = iframe.contentDocument;
    globalThis.techIframe = iframeDocument.getElementById("techIframe");
    let dots = iframeDocument.querySelector(".dots")
    let dotsArr = dots.children
    dots.onclick = (e) => {
        let currentSpan = e.target
        for (i = 0; i < dotsArr.length; i++) {
            currentSpan.classList.contains("dots")?"":dotsArr[i].removeAttribute("active")
        }
        if (currentSpan.classList.contains("dots")) {
        } else {
            switch (currentSpan.textContent) {
                case "1":
                    techIframe.setAttribute("src", "/starter-code/technology-spaceport.html")
                    dotsArr[0].setAttribute("active", "true")
                    break;
                case "2":
                    dotsArr[1].setAttribute("active", "true")
                    techIframe.setAttribute("src", "/starter-code/technology-capsule.html")
                    break;
                case "3":
                    techIframe.setAttribute("src", "/starter-code/technology-vehicle.html")
                    dotsArr[2].setAttribute("active", "true")
                    break;
                default:
                    break;
            }
        }
    }
}