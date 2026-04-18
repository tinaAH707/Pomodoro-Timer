document.addEventListener('DOMContentLoaded', () => {

    //if you click unselcted and its unselcted then it turns into selected and the other turns unselcted
//look in octoggle, if i click on akiselcted, then hide mimiselcted
    // const selectOC = (octoggle) =>{
    //     const akiDiv = document.getElementsByClassName('aki');
    //     const mimiDiv = document.getElementsByClassName('mimi');
    //     const akiSelected = document.getElementById('aki-selected');
    //     const akiUnselected = document.getElementsByClassName('aki-unselected');
    //     const mimiSelected = document.getElementById('mimi-selected');
    //     const mimiUnselected = document.getElementsByClassName('mimi-unselected');
    //     //look at the classes and if i click selcted in a certin class, change it to that image and hide the other
        
    //     akiDiv.addEventListener('click', (octoggle)=>{
    //         akiSelected.classList.add('unselected');
            
    //     });
       
    
    // }
        const toggleDiv = document.getElementsByClassName('oc-toggle');
        const akiDiv = document.getElementsByClassName('aki');
        const mimiDiv = document.getElementsByClassName('mimi');
      

        const akiUnselcted = document.getElementById('aki-unselected');
        // const akiSelcted = document.getElementById('aki-selected');
        // const mimiUnselcted = document.getElementById('mimi-unselected');
        const mimiSelcted = document.getElementById('mimi-selected');

    //    const akiGif = document.getElementById('aki-animation');
       const mimiGif = document.getElementById('mimi-animation');

    

   
        
        //   function toggleAki(){
        //     akiUnselcted.addEventListener("click", () =>{
        //         if(akiUnselcted.src.match('aki-Unclick.png')){
        //             akiUnselcted.setAttribute('src', "content/images/aki-clicked.png");
        //             mimiSelcted.setAttribute('src', "content/images/mimi-UNclick.png");
                    
        //             mimiGif.setAttribute('src', "content/animation/aki-animation.gif");
        //         } else(mimiUnselcted.addEventListener("click", () =>{
        //                 akiUnselcted.setAttribute('src', "content/images/aki-Unclick.png");
        //                 mimiSelcted.setAttribute('src', "content/images/mimi-UNclick.png");
                        
        //                 mimiGif.setAttribute('src', "content/animation/aki-animation.gif");
        //         }));
               
        //     })
        //   };---------------

           
        
            akiUnselcted.addEventListener("click", () =>{
                    akiUnselcted.setAttribute('src', "content/images/aki-clicked.png");
                    mimiSelcted.setAttribute('src', "content/images/mimi-UNclick.png");
                    
                    mimiGif.setAttribute('src', "content/animation/aki-animation.gif");
            })

            mimiSelcted.addEventListener("click", () =>{
                        
                    akiUnselcted.setAttribute('src', "content/images/aki-Unclick.png");
                    mimiSelcted.setAttribute('src', "content/images/mimi-Clicked.png");
                    
                    mimiGif.setAttribute('src', "content/animation/mimi-animation.gif");
            });



        

        //   function toggleMimi(){
        //     mimiUnselcted.addEventListener("click", () =>{
        //         if(mimiUnselcted.src.match('mimi-UNclick.png'));{
        //             akiSelcted.setAttribute('src', "content/images/aki-Unclick.png");
        //             mimiUnselcted.setAttribute('src', "content/images/mimi-Clicked.png");
        //         };
        //     })
        //   }

         

          
          

        


    //===================================================================
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-button');
    const tasklist = document.getElementById('task-list');
    //when you type into the input area it -> click addtask, and then it will be added into task

    
    const addTask = (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        `



        tasklist.appendChild(li);
        taskInput.value = '';

    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter'){
            addTask(e);
        }
    })


});

