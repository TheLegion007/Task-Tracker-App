//const taskContainer = document.getElementsByClassName("task_Container");
const taskContainer = document.querySelector(".task_Container");
console.log(taskContainer);

const globalStore = []; //local  storage

const generateHTML = (taskData) => {
  return `
  <div id= {taskData.id} class="col-md-6 col-lg-4">
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
      </div>
       <img class="card-img-top" src= ${taskData.imageurl} alt="...">
      <div class="card-body">
        <h5 class="card-title text-primary">${taskData.tasktitle}</h5>
        <p class="card-text">${taskData.tasktype}</p>
        <a href="#" class="btn btn-primary">${taskData.taskdescription}</a>
      </div>
    </div>
  </div>
  `;
};
const saveChanges = () => {
   // get task data
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };
  //console.log(taskData);
  //onclick() in .html file to trigger this function//
  // insertAdjacentHTML is a inbuilt method
  taskContainer.insertAdjacentHTML("beforeend", generateHTML(taskData));

  globalStore.push(taskData);

  localStorage.setItem("tasky",JSON.stringfy({cards: globalStore}));  // tasky is an id for localStorage, changing array into key value pairs //
};

const loadInitialData = () => {
  // localStorage to get tasky card Data, localStorage/setItem store data  in form of string //
  const getCardData = localStorage.getItem("tasky");
  // convert the string to a normal object/array of object
  const {cards} = JSON.parse(getCardData);
  //loop over the array of task object to create HTML cards, inject it to our DOM//
  cards.map((cardObject)=> {
    taskContainer.insertAdjacentHTML("beforeend",generateHTML(cardObject));

    // update our global Store//
    globalStore.push(cardObject);
  })
};
