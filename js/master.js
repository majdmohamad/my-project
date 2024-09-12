//الحفظ في local storeg
let maincolor = localStorage.getItem("color-option");

if(maincolor !== null) {
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if(element.dataset.color===maincolor){
            element.classList.add("active");
        }
    });

}

let backgroundoption = true;

let backgroundinterval;

// للخلفبات الحفظ في local storeg
let backgroundlocalitem= localStorage.getItem("background-option",true);
if(backgroundlocalitem!== null){
if(backgroundlocalitem==='true'){
    backgroundoption= true;
}else{
    backgroundoption=false;
}
document.querySelectorAll(".random-background span").forEach(element =>{
    element.classList.remove("active");
});
if(backgroundlocalitem==='true'){

document.querySelector(".yes").classList.add("active");

}else{
    document.querySelector(".no").classList.add("active");
}
}


//تنسيق الايكون مشان وقت الضغط عليه يوقف دوران ويفتح القائمة ااي انعملت من خلال كلاس 
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}
//نهاية الايكون

//switch color
const colorli = document.querySelectorAll(".colors-list li");
colorli.forEach(li =>{
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    
        localStorage.setItem("color-option",e.target.dataset.color);
        
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

//switch back ground
const randomBackel = document.querySelectorAll(".random-background span");
randomBackel.forEach(span =>{
    span.addEventListener("click", (e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background==='yes'){
            backgroundoption = true;
            random();
            localStorage.setItem("background-option",true);
        }else{
            backgroundoption = false;
            clearInterval(backgroundinterval);
            localStorage.setItem("background-option",false);
        }
    });

});

//بداية تغيير الخلفية الاولى كل 3ثواني
// select landing page element
let landingpage = document.querySelector(".landing-page");
//get array of imgs
let imgsArray = ["colin-horn-fR9U2S31Exs-unsplash.jpg","patrick-hendry-5mn8pQIWzXU-unsplash.jpg","roberto-nickson-lGCfApDzhYw-unsplash.jpg","tyler-casey-zMyZrfcLXQE-unsplash.jpg","visar-neziri-CAQvwCoHLhw-unsplash.jpg"];
//changr background imgs url
landingpage.style.backgroundImage = 'url("imags/patrick-hendry-5mn8pQIWzXU-unsplash.jpg")';
//get random number-الحصول على رقم عشوائي وتطبيق دالة ثواني عليه



function random(){
    if (backgroundoption === true){
        backgroundinterval= setInterval(() =>{
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingpage.style.backgroundImage = 'url("imags/' + imgsArray[randomNumber] + '")';
        },1000);
    }
}
random();




//نهاية تغيير الخلفية الاولى كل 3ثواني
let ourskills = document.querySelector(".skills");
window.onscroll = function(){
let skillsoffsettop = ourskills.offsetTop;

let skillsouterheight = ourskills.offsetHeight;

let windowheight = this.innerHeight;

let windowscrolltop = this.pageYOffset;
let allskills = document.querySelectorAll(".skill-box .skill-progress span");
if(windowscrolltop > (skillsoffsettop + skillsouterheight - windowheight)){
    
    allskills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
}else{
    allskills.forEach(skill => {
        skill.style.width = 0;
});
};
};
//

//creat popup with image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        let overlay = document.createElement("div");
        overlay.classList = 'popup-overlay';
        document.body.appendChild(overlay);

        let popupBOX = document.createElement("div");
        popupBOX.classList = 'popup-box';

        if(img.alt !==null){
            let imgHeading = document.createElement("h3");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            popupBOX.appendChild(imgHeading);
        }

        let popupImage =document.createElement("img");
        popupImage.src = img.src;
        popupBOX.appendChild(popupImage);
        document.body.appendChild(popupBOX);

        let closeBottom = document.createElement("span");
        let closeText = document.createTextNode("x");
        closeBottom.appendChild(closeText);
        closeBottom.className = 'close-Bottom';
        popupBOX.appendChild(closeBottom);
    });
});
document.addEventListener("click",function(e){
    if(e.target.classList == 'close-Bottom'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    };
});


//nav
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const alllink = document.querySelectorAll(".link a");

function scrolltosomewhere(element){
    element.forEach(ele => {
        ele.addEventListener("click", (e)=> {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
    });
});
}
scrolltosomewhere(allBullets);
scrolltosomewhere(alllink);

//reset botton
document.querySelector(".reset-options").onclick = function (){
    //localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    window.location.reload();
}


//menu
let togglebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".link");

togglebtn.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
};


document.addEventListener("click", (e)=> {
    if(e.target !== togglebtn && e.target !== tlinks){
        if(tlinks.classList.contains("open")){
            togglebtn.classList.toggle("menu-active");
            tlinks.classList.toggle("open");
        }
    }
});

tlinks.onclick = function (e){
    e.stopPropagation();
}





