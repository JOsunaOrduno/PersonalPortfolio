let homeBool = true;
let skillsBool = false;
let repeat = true;
let homeBtn = this.document.getElementById("homeBtn");
let skillsBtn = this.document.getElementById("skillsBtn");
let projectsBtn = this.document.getElementById("projectsBtn");
let home = this.document.getElementById("home");
let time = 1050;//Time to wait until you can repeat the function
let bar = this.document.getElementById("bar");
let gradient = this.document.getElementById("gradient");
let ugradient = this.document.getElementById("upGradient");
let cloud = this.document.getElementsByClassName("cloud");
let moon = this.document.getElementById("moon");
let comets = this.document.getElementById("comets");
let noonCloud = this.document.getElementById("noonCloud");
let starsc = this.document.getElementById("starsc");
let sun = this.document.getElementById("sun");
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("wheel", function(e){ // or window.addEventListener("scroll"....
    let home = this.document.getElementById("home");
    let skills = this.document.getElementById("skills");
    let projects = this.document.getElementById("projects");
    let variation = parseInt(e.deltaY)//Scroll direction
    if(repeat){//If you can repeat the function
        if (variation==100) {//Scroll down
            if(homeBool){//From day to noon
                clean();
                noon();
                skills.classList.add('aactive');
            }
            else if(skillsBool){//From noon to night
                clean();
                night();
                projects.classList.add('aactive');
                
            }
            else{//From night to day
                clean();
                day();
                home.classList.add('aactive');
                
            }
            
        } else if (variation==-100) {//scroll up
            if(homeBool){//From day to night
                clean();
                night();
                projects.classList.add('active');
                home.classList.add('disable');
            }
            else if(skillsBool){//From noon to day
                clean();
                day();
                home.classList.add('active');
                skills.classList.add('disable');
                
            }
            else{//From night to noon
                clean();
                noon();
                skills.classList.add('active');
                projects.classList.add('disable');
            }
        } 
    }
}, false);


//Shorcut buttons
homeBtn.addEventListener("click", function(e){
    if(repeat){
        if(!homeBool){
            clean();
            day();
            home.classList.add('aactive');
        }
    }
});
skillsBtn.addEventListener("click", function(e){
    if(repeat){
        if(!skillsBool){
            clean();
            noon();
            skills.classList.add('aactive');
        }
    }
});
projectsBtn.addEventListener("click", function(e){
    if(repeat){
        if(homeBool || skillsBool){
            clean();
            night()
            projects.classList.add('aactive');
        }
    }
});



function day(){//Home
    homeBool = true;
    cloud[0].classList.add('cloudA');
    cloud[1].classList.add('cloudA');
}
function noon(){//Skills
    document.body.classList.add("noon");
    bar.classList.add('b1');
    skillsBool = true;
    gradient.classList.add('noonGradient');
    noonCloud.classList.add('noonCloudA');
    ugradient.classList.add('noonGradient');
    homeBtn.classList.add('nightTxt');
    skillsBtn.classList.add('nightTxt');
    projectsBtn.classList.add('nightTxt');
    sun.classList.add('sunA');
    
}
function night(){//Projects
    document.body.classList.add("night");
    bar.classList.add('b2');
    gradient.classList.add('nightGrandient');
    moon.classList.add('moonA');
    homeBtn.classList.add('nightTxt');
    skillsBtn.classList.add('nightTxt');
    projectsBtn.classList.add('nightTxt');
    comets.classList.add('cometsA');
    starsc.classList.add('starscA');
    
}

function clean(){//Clear all the classes
    timer();
    home.classList.remove('active');
    home.classList.remove('aactive');
    skills.classList.remove('active');
    skills.classList.remove('aactive');
    projects.classList.remove('aactive');
    projects.classList.remove('active');
    projects.classList.remove('disable');
    skills.classList.remove('disable');
    home.classList.remove('disable');
    bar.classList.remove('b1');
    bar.classList.remove('b2');
    document.body.classList.remove("noon");
    document.body.classList.remove("night");
    gradient.classList.remove('noonGradient');
    gradient.classList.remove('nightGrandient');
    cloud[0].classList.remove('cloudA');
    cloud[1].classList.remove('cloudA');
    moon.classList.remove('moonA');
    homeBtn.classList.remove('nightTxt');
    skillsBtn.classList.remove('nightTxt');
    projectsBtn.classList.remove('nightTxt');
    comets.classList.remove('cometsA');
    noonCloud.classList.remove('noonCloudA');
    starsc.classList.remove('starscA');
    ugradient.classList.remove('noonGradient');
    sun.classList.remove('sunA');
    //document.button.classList.remove('nightButton')

    homeBool = false;
    skillsBool = false;
}

function timer(){//Wait until you can repeat the function
    repeat = false;
        setTimeout(function() {
            repeat = true;
          }, time);
}

window.onload = function() {
    if($(window).width() < 500){
        alert("This page is not optimized for mobile devices, please use a computer or a tablet.")
    }
    console.log($(window).width() );
  };