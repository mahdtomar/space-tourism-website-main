let mailUl = document.querySelector(".mainul");
let iframe = document.getElementById("iframe")
let mainNavArray = mailUl.children
let mainPages = ["starter-code/landing.html", "starter-code/destination.html", "starter-code/crew-specialist.html", "starter-code/technology.html"]
let crewPages = ["starter-code/crew-commander.html", "starter-code/crew-specialist.html", "starter-code/crew-pilot.html", "starter-code/crew-engineer.html"]

function mainNavigation(num) {
    iframe.setAttribute("src", mainPages[num])
    for (i = 0; i < mainNavArray.length; i++) {
        mainNavArray[i].classList.remove("active")
    }
    mainNavArray[num].classList.add("active")
    num == 2 ? setTimeout(crewDeclaring, 200) : ""
    num == 1 ? setTimeout(dstDeclaring, 200) : ""
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
