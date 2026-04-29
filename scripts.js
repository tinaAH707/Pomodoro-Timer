//TASK BOX 
//===================================================================
    const toggleDiv = document.getElementsByClassName('oc-toggle');
    const akiDiv = document.getElementsByClassName('aki');
    const mimiDiv = document.getElementsByClassName('mimi');
      
    const taskBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const taskButton = document.getElementById('add-task-button');

    const akiUnselcted = document.getElementById('aki-unselected');
    const akiSelcted = document.getElementById('aki-selected');

    const mimiSelcted = document.getElementById('mimi-selected');
    const mimiUnselcted = document.getElementById('mimi-unselected');

    const mimiGif = document.getElementById('mimi-animation');
    const akiGif = document.getElementById('aki-animation');

// Initilize ====================================================
    document.addEventListener('DOMContentLoaded', () => {
        taskButton.addEventListener("click", (addTask));
        akiSelect();
        mimiSelect();
        openSetting();
        closeSetting();
        settingsSwitch();
    });



// Sounds ====================================================
    function soundClick(){
        const clickS = new Audio("content/audio/DDLC_Click.mp3");
        clickS.play();
    }

    function soundHover(){
        const hoverS = new Audio("content/audio/DDLC_hover.mp3");
        taskButton.addEventListener("mouseenter", () =>{
            hoverS.play();
        });
    }

    function soundDone(){
        const doneS = new Audio("content/audio/Picnic_Heal_Omori.mp3");
        doneS.play();
    }

//Settings =========================================================

const settingIcon = document.getElementById("setting-icon");
const settingOverlay = document.getElementById("setting-div-aside");
const settingExit = document.getElementById("setting-exit-button");

const optionsBtn = document.getElementById("option-setting-click");
const historyBtn = document.getElementById("history-setting-click");
const optionsSet = document.getElementById("options-info");
const historySet = document.getElementById("history-info");


function openSetting(){
    settingIcon.addEventListener('click', () =>{
        settingOverlay.classList.add('show');
        soundClick();
    });
    
}

function closeSetting(){
    settingExit.addEventListener('click', () =>{
        settingOverlay.classList.remove('show');
        soundClick();
    });
}

function settingsSwitch(){

    historyBtn.addEventListener('click', () =>{  
        optionsBtn.style.cssText='opacity:50%; filter:none;';      
        historyBtn.style.cssText=' opacity:100%; filter: drop-shadow(0px 0px 2px var(--l1-purple));'

        optionsSet.style.display= 'none';
        historySet.style.display = 'block';
        soundClick();
    })

    optionsBtn.addEventListener('click', () =>{  
        historyBtn.style.cssText='opacity:50%; filter:none;';      
        optionsBtn.style.cssText=' opacity:100%; filter: drop-shadow(0px 0px 2px var(--l1-purple));'

        historySet.style.display= 'none';
        optionsSet.style.display = 'block';
         soundClick();
    })

}






// Select States ====================================================
   function akiSelect(){
    akiUnselcted.addEventListener('click', () =>{
        akiSelcted.classList.remove('selected');
        akiUnselcted.style.display = 'none';

        mimiSelcted.style.display = 'none';
        mimiUnselcted.classList.remove('unselected');

        akiGif.classList.remove('aki-anim');
        mimiGif.style.display = 'none';

        soundClick();
    })
    hoverAki();

   }

   function mimiSelect(){
        
        mimiUnselcted.addEventListener('click', () =>{
            mimiSelcted.style.display = 'inline';
            mimiUnselcted.classList.add('unselected');

            akiSelcted.classList.add('selected');
            akiUnselcted.style.display = 'inline';

            mimiGif.style.display = 'block';
            akiGif.classList.add('aki-anim');
        
            soundClick();
        })
        hovermimi();
     
   }



// Hover States ====================================================
    function hoverAki(){
        
        akiUnselcted.addEventListener('mouseenter', () =>{
            akiUnselcted.style.transform = 'scale(1.1)';
        });
        akiUnselcted.addEventListener('mouseleave', () =>{
            akiUnselcted.style.transform = 'scale(1)';
        });
    };

    function hovermimi(){
        
        mimiUnselcted.addEventListener('mouseenter', () =>{
            mimiUnselcted.style.transform = 'scale(1.1)';
        });
        mimiUnselcted.addEventListener('mouseleave', () =>{
            mimiUnselcted.style.transform = 'scale(1)';
        });
    };


// Task Box ====================================================
    function addTask(){
        event.preventDefault();

        if(taskBox.value === ""){
            alert("add a freaking task >:3 !");
        } else{
            let li = document.createElement("li");
            li.innerHTML = taskBox.value;
            listContainer.appendChild(li);  

            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
            soundClick();
        }
        taskBox.value = '';
        saveData(); //after task is called it will save it        
    };
         

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked"); //clicked the li item and it will check it
            saveData();
            soundDone();
        }
        else if(e.target.tagName === "SPAN"){ //click the x and it will remove the element
            e.target.parentElement.remove();
            saveData();
            
        }
    
    }, false);


    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

   showTask();




//Stop Watch =========================================================














//Stop and Go Buttons =========================================================









