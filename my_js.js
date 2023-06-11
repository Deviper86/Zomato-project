console.log('Hello world!');

///MAPPING
let myArray = [1,2,3,4,5];
const newArray = myArray.map(   //Mapping of arrays
  (e) => (e+1));

  console.log(newArray);
  console.log(myArray);



///FILTER
let mArray = [100,23,34,42,53];
const neArray = mArray.filter(   //Mapping of arrays
  (e) => (e<=50));

  console.log(neArray);
  console.log(mArray);

  function greeting(name) {
    console.log(`Hello ${name}`);
  };

greeting('Kachi');



///TEMPLATE LITERALS

console.log(`Credit Alert

  Dear Cliff, NGN 250,000 has left your account
  narration;

`);

console.log('-----------------------------');

//ASYNCHRONOUS JS (json = javascript object notable)

/* JS treats the synchronous parts first before treating asynchronous because it
doesnt want to clog the single thread*/

///PROMISES

fetch('https://jsonplaceholder.typicode.com/users')
.then((data) => data.json())
.then((result) => console.log(result));

console.log('-----------------------------');

///ASYNC AWAIT

const getData = async () => {
  const test = await fetch ('https://jsonplaceholder.typicode.com/albums')
  const practice = await test.json();
  console.log(practice);
};

getData();


///DOM MANIPULATION

const dataInfo = () => {
  const retrieveInfo = {
    Id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,

  }
  console.log(retrieveInfo);

};
