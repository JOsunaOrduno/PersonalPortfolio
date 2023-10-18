var homeBool = true;
var skillsBool = false;
var repeat = true;
var homeBtn = this.document.getElementById("homeBtn");
var skillsBtn = this.document.getElementById("skillsBtn");
var projectsBtn = this.document.getElementById("projectsBtn");
var time = 1050;//Time to wait until you can repeat the function

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("wheel", function(e){ // or window.addEventListener("scroll"....
    let home = this.document.getElementById("home");
    let skills = this.document.getElementById("skills");
    let projects = this.document.getElementById("projects");
    let bar = this.document.getElementById("bar");
    var variation = parseInt(e.deltaY)//Scroll direction
    if(repeat){
        
        if (variation==100) {//Scroll down
            if(homeBool){
                clean();
                skills.classList.add('aactive');
                bar.classList.add('b1');
                skillsBool = true;
            }
            else if(skillsBool){
                clean();
                projects.classList.add('aactive');
                bar.classList.add('b2');
            }
            else{
                clean();
                home.classList.add('aactive');
                homeBool = true;
            }
            
        } else if (variation==-100) {//scroll up
            console.log('up');
            if(homeBool){
                clean();
                projects.classList.add('active');
                home.classList.add('disable');
                bar.classList.add('b2');
            }
            else if(skillsBool){
                clean();
                home.classList.add('active');
                skills.classList.add('disable');
                homeBool = true;
            }
            else{
                clean();
                skills.classList.add('active');
                projects.classList.add('disable');
                bar.classList.add('b1');
                skillsBool = true;
            }
        } 
    }
}, false);

homeBtn.addEventListener("click", function(e){
    if(repeat){
        if(!homeBool){
            clean();
            home.classList.add('aactive');
            homeBool = true;
        }
    }
});
skillsBtn.addEventListener("click", function(e){
    if(repeat){
        if(!skillsBool){
            clean();
            skills.classList.add('aactive');
            bar.classList.add('b1');
            skillsBool = true;
        }
    }
});
projectsBtn.addEventListener("click", function(e){
    if(repeat){
            clean();
            projects.classList.add('aactive');
            bar.classList.add('b2');
    }
});

function clean(){
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
    homeBool = false;
    skillsBool = false;
}

function timer(){
    repeat = false;
        setTimeout(function() {
            repeat = true;
          }, time);//Wait until you can repeat the function
}



