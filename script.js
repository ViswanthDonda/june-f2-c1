/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  arr.map(PrintDeveloperbyMap)
  
  function PrintDeveloperbyMap(value) {
    //Write your code here , just console.log
    if(value.profession === "developer")
    console.log(value.name)
  }

  arr.forEach(PrintDeveloperbyForEach);
  
  function PrintDeveloperbyForEach(value) {
    //Write your code here , just console.log
    if(value.profession === "developer")
    console.log(value.name)
  }
  
  function addData(Arr, obj) {
    //Write your code here, just console.log
    Arr.push(obj);
    console.log(Arr);
  }

  let employee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }

  addData(arr, employee);

  console.log(arr.filter(removeAdmin));
  
  function removeAdmin(value) {
    //Write your code here, just console.log
    if(value.profession!== "admin"){
        return value;
    }
  }
  
  function concatenateArray(arr, newArray) {
    //Write your code here, just console.log
    mergeArray = arr.concat(newArray);
    console.log(mergeArray);
  }
  
  let newArray = [
    { id: 5, name: "Ravi", age: "22", profession: "Designer" },
    { id: 6, name: "Vijay", age: "21", profession: "Frontend dev" },
    { id: 7, name: "Sundar", age: "20", profession: "Backend dev" },
  ]

  let mergeArray = []; 
  concatenateArray(arr, newArray);