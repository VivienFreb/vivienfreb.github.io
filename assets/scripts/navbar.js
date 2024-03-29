window.onload=function(){
    // Ajout des transitions lors d'un clic sur les menu
    let listOfLinks = document.getElementsByClassName("navbar-link");
    for(let links of listOfLinks){
        links.addEventListener("click", function(e){
            let element = document.getElementById(links.dataset.id);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            e.preventDefault()
        }, false)
    }

    // Ajout des transitions lors d'un clic sur les menu mobiles + fermeture du panel
    let listOfMobileLinks = document.getElementsByClassName("mobile-navbar-link");
    for(let links of listOfMobileLinks){
        links.addEventListener("click", function(e){
            let element = document.getElementById(links.dataset.id);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            e.preventDefault();
            //Hide Mobile Menu
            let x = document.getElementById("mobile-navbar");
            openMobileNavbar();
        }, false)
    }


    // Animation page d'accueil Three.js3D
    VANTA.FOG({
        el: "#top",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0,
        midtoneColor: 0x111111,
        lowlightColor: 0xffffff,
        baseColor: 0xff4655,
        blurFactor: 0.65,
        speed: 0.90
    });

    // Transition lors du clic sur bouton "visite"
    let btnVisite = document.querySelector('a.btn-visite');
    btnVisite.addEventListener("click", function(e){
        let element = document.getElementById("details");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        e.preventDefault()
    }, false);

    // Permet d'afficher/cacher la sidebar contenant les réseaux sociaux
    let btnSidebar = document.querySelector('.sidebar-control-arrow');
    let btnChevron = document.querySelector('.sidebar-control-arrow i');
    let sidebar = document.getElementById('sidebar-social-media');
    btnSidebar.addEventListener("click", function(e){
        if(btnChevron.classList.contains("fa-chevron-left")){
            btnChevron.classList.remove("fa-chevron-left");
            sidebar.classList.remove("sidebar-visible");
            btnChevron.classList.add("fa-chevron-right");
        } else{
            btnChevron.classList.remove("fa-chevron-right");
            btnChevron.classList.add("fa-chevron-left");
            sidebar.classList.add("sidebar-visible")
        }
        e.preventDefault();
    })
};


function openMobileNavbar(){
    let x = document.getElementById("mobile-navbar");
    let z = document.getElementById ("SectionPage");
    if(x.className === "mobileVisible"){
        x.classList.remove("mobileVisible");
        z.classList.remove("grayOut");
    }else{
        x.classList.add("mobileVisible");
        z.classList.add("grayOut");
    }
    return false
}


let lastY = pageYOffset;
window.addEventListener("scroll", function(){
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentY > lastY){
        document.getElementById("navbar").style.transform = "translateY(-80px)";
    } else {
        document.getElementById("navbar").style.transform = "translateY(0px)";
    }
    lastY = (currentY <= 0) ? 0 : currentY;
}, false);



// function scrollToElement(elementName){
//     console.log(elementName);
//     let element = document.getElementById(elementName);
//     element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
//     return false
// }