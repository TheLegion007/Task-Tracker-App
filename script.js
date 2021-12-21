const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };
  console.log(taskData);
  //onclick() in .html file to trigger this function//
}
