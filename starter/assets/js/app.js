// import {tasks} from './data.js';
// console.log(tasks);
// console.log("hii") ;
// for(let i = 0; i < tasks.length; i++){
// console.log(tasks[i].title);
// console.log(tasks[i].type);
// console.log(tasks[i].status);
// console.log(tasks[i].priority);
// console.log(tasks[i].date);
// console.log(tasks[i].description);
// }

const toDo= document.getElementById('to-do-tasks');
const inProgress= document.getElementById('in-progress-tasks');
const done=document.getElementById('done-tasks');


function clear(){
    inProgress.innerHTML="";
    done.innerHTML="";
    toDo.innerHTML="";
}

function afficher(){
    clear();
    let todocount=0,inprogresscount=0,donecount=0;
    // console.log(todocount);
for(let i = 0; i < tasks.length; i++){
if(tasks[i].status=='Done'){
    donecount++;
    // console.log(todocount);
    done.innerHTML+=`<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
    <div class="">
    <i class="bi bi-check2-square fs-3"></i>
    </div>
    <div class="d-flex justify-content-around align-items-center">
        <div class="card-body text-start">
            <div class="card-title fs-5 "><strong> ${tasks[i].title} </strong></div>
            <div class="card-subtitle mb-2 text-muted">#1 created in  ${tasks[i].date}</div>
            <div class="card-text" title=" ${tasks[i].description}"> ${tasks[i].description.substring(0,40)}...</div>
            <div>
            <i class="bi bi-trash text-danger  me-1" onclick="deleteTask(${i})"></i>
            <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
            </div>
        </div>
        <div class="d-flex flex-column align-content-center">
            <span class="btn  mb-1 text-white p-2 w-100 high" >High</span>
            <span class="btn btn-white bg-white p-2 border text-black w-100 bug">Feature</span>
        </div>
    </div>
    </button>` ;
   
}else if(tasks[i].status=='In Progress'){
    inprogresscount++;
    // console.log(inprogresscount);
    inProgress.innerHTML+=`<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
    <div class="">
    <i class="spinner-border spinner-border-sm text-green me-1"></i>
    </div>
    <div class="d-flex justify-content-around align-items-center">
        <div class="card-body text-start">
            <div class="card-title fs-5 "><strong> ${tasks[i].title} </strong></div>
            <div class="card-subtitle mb-2 text-muted">#1 created in  ${tasks[i].date}</div>
            <div class="card-text" title=" ${tasks[i].description}" > ${tasks[i].description.substring(0,40)}...</div>
            <div>
            <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
            <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
            </div>
        </div>
        <div class="d-flex flex-column align-content-center">
            <span class="btn  mb-1 text-white p-2 w-100 high" >High</span>
            <span class="btn btn-white bg-white p-2 border text-black w-100 bug">Feature</span>
        </div>
    </div>
    </button>` ;
}else if(tasks[i].status=='To Do'){
    todocount++;
    // console.log(donecount);
    toDo.innerHTML+=`<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
    <div class="">
        <i class="bi bi-question-circle fs-3"></i>
    </div>
    <div class="d-flex justify-content-around align-items-center">
        <div class="card-body text-start">
            <div class="card-title fs-5 "><strong> ${tasks[i].title} </strong></div>
            <div class="card-subtitle mb-2 text-muted">#1 created in  ${tasks[i].date}</div>
            <div class="card-text" title=" ${tasks[i].description}" > ${tasks[i].description.substring(0,40)}...</div>
            <div>
            <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
            <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
            </div>
        </div>
        <div class="d-flex flex-column align-content-center">
            <span class="btn  mb-1 text-white p-2 w-100 high" >High</span>
            <span class="btn btn-white bg-white p-2 border text-black w-100 bug">Feature</span>
        </div>
    </div>
    </button>` ;
}
}
document.getElementById("to-do-tasks-count").innerHTML=`${todocount}`;
document.getElementById("in-progress-tasks-count").innerHTML=`${inprogresscount}`;
document.getElementById("done-tasks-count").innerHTML=`${donecount}`;
}
afficher();
const form = document.getElementById('first');//call our form with the id assigned to it 
form.addEventListener('submit', saveTask);


function createTask() {
    // initialiser task form
   

    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask(event) {
    event.preventDefault();
    // prevent reloading the page
    // Recuperer task attributes a partir les champs input
    //call callbackFunction when submit button is clicked      
    //  const myFormData = new FormData(event.target);//    
    //  const formDataObj = {};//data objet
    //  myFormData.forEach((value, key) => (formDataObj[key] = value));     //loop to fill the object formData with the right values 
    // Créez task object
    let formDataObj={
        // id            :   tasks.length+1,
        title         :   document.getElementById("title").value,
        type          :   radiocheck().value,
        priority      :   document.getElementById("priority").value,
        status        :   document.getElementById("status").value,
        date          :   document.getElementById("date").value,
        description   :   document.getElementById("description").value
    }
    // Ajoutez object au Array
   tasks.push(formDataObj);//add the new formData to array tasks
    // refresh tasks
    //  document.forms[0].reset();//to clean the form for the next entries
    //   // backtext 
    //   $('#Modal').modal('hide');
    document.getElementById('hide').setAttribute('data-dismiss','modal');
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      initTaskForm();
      afficher();
      
    // console.log(tasks);
}

function editTask(i) {
    // Initialisez task form
    console.log("hii !!!")

    // Affichez updates
       document.getElementById("title").value=tasks[i].title;
       if(tasks[i].type==="Bug"){
        document.getElementById("bug").checked=true;
       }else{
        document.getElementById("feature").checked=true;
       }
       document.getElementById("priority").value=tasks[i].priority;
       document.getElementById("status").value=tasks[i].status;
       document.getElementById("date").value=tasks[i].date;
       document.getElementById("description").value=tasks[i].description;
    // Delete Button
       
    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
    $('#Modal').modal('show');
    //   updateTask(i);
    // document.forms[0].reset();//to clean the form for the next entries
}

function updateTask(i) {
    console.log("update"+i);
    // GET TASK ATTRIBUTES FROM INPUTS
    // Créez task object
    let formDataObj={
        title         :   document.getElementById("title").value,
        type          :   radiocheck().value,
        priority      :   document.getElementById("priority").value,
        status        :   document.getElementById("status").value,
        date          :   document.getElementById("date").value,
        description   :   document.getElementById("description").value
    }
    // Remplacer ancienne task par nouvelle task

    tasks[i]=formDataObj;
    // Fermer Modal form
    // $('#Modal').modal('hide');
    // Swal.fire(
    //   'Good job!',
    //   'You clicked the button!',
    //   'success'
    // )
    
    // Refresh tasks
    afficher();
}

function deleteTask(i) {
    // Get index of task in the array
     
    // Remove task from array by index splice function
       tasks.splice(i,1);
       Swal.fire(
        'Delete!',
        'You\'re task is deleted successfully !',
        'success'
       )
    // refresh tasks
    afficher();
}

function initTaskForm() {
    // Clear task form from data
    document.forms[0].reset();
    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}

function radiocheck() {
    var ele = document.getElementsByName("type");
    var result;
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        result = ele[i];
        break;
      }
    }
    return result;
  }
// let only work in a specifique scop not like var that's the difference between this two.
// array is an object.
// object has no index so we can't acces it data with a loop. 
// querySelector fetch the first element that has the same name or id or class.
// document.createlement()/classname.classList.add/.append(classname)/classname.style.backgroundColor=""/.setAttribute('','')