///DOM MANIPULATION
const taskContainer = document.querySelector(".task_container");
const globalStorage = [];
console.log(taskContainer);

const newCard = (retrieveInfo) => `
<div class="col-sm-12 col-md-6 col-lg-4" style="width: 18rem;" id=${retrieveInfo.Id}>
  <div class="card">
    <h5 class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></h5>
    <div class="card-body">
    <img src="${retrieveInfo.imageUrl}" class="card-img-top" alt="Nature picture">
    <h5 class="card-title mt-3 fw-bolder text-primary">${retrieveInfo.taskTitle}</h5>
    <p class="card-text">${retrieveInfo.taskDescription}</p>
    <a href="#" class="btn btn-primary">${retrieveInfo.taskType}</a>
    </div>
  </div>
</div>
`;
const loadPageData = () => {
//Get data from local localStorage
const getCardData = localStorage.getItem("main");
//convert from array of objects to Objects of Objects
const {cards} = JSON.parse(getCardData);
//loop through the already saved data to populate Page
cards.map((cardObject) => {
  taskContainer.insertAdjacentHTML("beforeend", newCard(cardObject));

  //Save updated data in to local storage
  globalStorage.push(cardObject);
}

)

};



const dataInfo = () => {
  const retrieveInfo = {
    Id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,

  }


taskContainer.insertAdjacentHTML("beforeend", newCard(retrieveInfo));

globalStorage.push(retrieveInfo);

localStorage.setItem("main", JSON.stringify({cards:globalStorage}));

};


console.log("HELLO WORLD");
