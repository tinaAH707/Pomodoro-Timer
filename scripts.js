//TASK BOX 
//===================================================================
    const toggleDiv = document.getElementsByClassName('oc-toggle');
    const akiDiv = document.getElementsByClassName('aki');
    const mimiDiv = document.getElementsByClassName('mimi');
      
    const akiUnselcted = document.getElementById('aki-unselected');
    const mimiSelcted = document.getElementById('mimi-selected');

    const mimiGif = document.getElementById('mimi-animation');
    const taskBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const button = document.getElementById('add-task-button');

    //intialize
    document.addEventListener('DOMContentLoaded', () => {
        mimiSelcted.addEventListener("click", (mimi));
        akiUnselcted.addEventListener("click", (aki));
        button.addEventListener("click", (addTask));

    });
         


//taskbox
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
        }
        taskBox.value = '';
        saveData(); //after task is called it will save it
    };
          

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked"); //clicked the li item and it will check it
            saveData();
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


    function mimi(){
        akiUnselcted.setAttribute('src', "content/images/aki-Unclick.png");
        mimiSelcted.setAttribute('src', "content/images/mimi-Clicked.png");
                    
        mimiGif.setAttribute('src', "content/animation/mimi-animation.gif");
    }

    function aki(){
        akiUnselcted.setAttribute('src', "content/images/aki-clicked.png");
        mimiSelcted.setAttribute('src', "content/images/mimi-UNclick.png");
                
         mimiGif.setAttribute('src', "content/animation/aki-animation.gif");
    }