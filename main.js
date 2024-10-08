//  prevent inspect
// document.addEventListener("contextmenu",function(e){
//     e.preventDefault()
// },false)


const scroll = new LocomotiveScroll({
    el: document.querySelector('#app'),
    smooth: true
});



function lodaerAnimetion(){
    const loader = document.querySelector('#loader-animation')
    setTimeout(()=>{
        loader.style.top = "-100%"
        if(loader.style.top=="-100%"){
            loader.style.opacity = "0";
            loader.style.display = "none";
        }    
    },4200)
}
lodaerAnimetion()


function imageAnimation(){
    let elem = document.querySelectorAll(".elem")
    let fixedImage = document.querySelector(".fixed-image")
    let elemContainer = document.querySelector("#elem-container")
    elemContainer.addEventListener("mouseenter",()=>{
        fixedImage.style.display ="block"
    })

    elemContainer.addEventListener("mouseleave",()=>{
        fixedImage.style.display ="none"
    })

    
    elem.forEach((item) => {
        let img_data = item.getAttribute("data-image")
        // if(window.innerWidth <= "640px"){
        //      item.style.backgroundImage = `url(${img_data})`
        // }

            item.addEventListener("mouseenter",()=>{
            let img_data = item.getAttribute("data-image")
            let DataType = item.getAttribute("data-type")
            let image = document.createElement("img")
            image.setAttribute("src",img_data)
            fixedImage.innerHTML = '';
            fixedImage.appendChild(image);

        })
    })

}


function videoAnimation() {
    let elem = document.querySelectorAll(".elem")
    let fixedVideo = document.querySelector(".fixed-video")
    let elemContainer = document.querySelector("#elem-container")
    elemContainer.addEventListener("mouseenter",()=>{
        fixedVideo.style.display ="block"
    })

    elemContainer.addEventListener("mouseleave",()=>{
        fixedVideo.style.display ="none"
    })


    elem.forEach((item) => {
        item.addEventListener("mouseenter",()=>{
            let source = item.getAttribute("data-image")
            let DataType = item.getAttribute("data-type")
            
       
        var video = document.createElement("video");
        video.setAttribute("src", source);
        video.setAttribute("autoplay", true);
        video.setAttribute("loop", true);
        video.volume = 0; 

        
        fixedVideo.innerHTML = '';
        fixedVideo.appendChild(video);
        })
    })

}


function menuAnimation(){
    let NavOverlay = document.querySelector("#Navoverlay")
    let NavMenu = document.querySelector("#menu")
    let Navopen = document.querySelector("#nav-part-2")
    let flag = false
    NavMenu.addEventListener("click",()=>{
        if(!flag){
            NavOverlay.style.top = "0"
            Navopen.style.top ="0"
            Navopen.style.opacity = "0"
            flag=true
            NavMenu.innerHTML = "&times; close";
        }
        else{
            flag = false
            NavMenu.innerHTML = "&#9778; menu";
            Navopen.style.top ="-100rem"
            NavOverlay.style.top = "-100%"
        }
    })
}





    var tablinks = document.getElementsByClassName("left-titles");
   var tabcontents = document.getElementsByClassName("tab-contents");
    var imgtab = document.getElementsByClassName("img-content");

    //how to define opentab function in js?
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        for (imgcontents of imgtab) {
            imgcontents.classList.remove("active-img");
        }
        var clickedTab = document.getElementById(tabname);
        var index = Array.from(tabcontents).indexOf(clickedTab);
      
        tablinks[index].classList.add("active");
         tabcontents[index].classList.add("active-tab");
          imgtab[index].classList.add("active-img");
      
          
          localStorage.setItem('activeImageId', tabname);
      
          document.addEventListener('DOMContentLoaded', function () {
              var activeImageId = localStorage.getItem('activeImageId');
          
              if (activeImageId !== null) {
                  tablinks[activeTabIndex].classList.add("active");
                  tabcontents[activeTabIndex].classList.add("active-tab");
                  imgtab[activeTabIndex].classList.add("active-img");
              }
          })
    } 
    

    



// Retrieve the active tab index from localStorage on page load




imageAnimation();
videoAnimation();
menuAnimation();
