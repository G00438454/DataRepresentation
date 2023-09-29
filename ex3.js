let myArray = [];

let addTask = (task) => {
    let length = myArray.push(task);
    console.log("Item " + task + "has been added to the task")
    return myArray.length;
}

let listAllTasks = () => {
    myArray.forEach((item) => {
        console.log(item);
    })
}

let deleteTask = (task) => {
    let index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item " + task + " has been removed from the array");
    } else {
        console.log("Item " + task + " was not found in the tasks.")
    }

    return myArray.length;

}

addTask("learn js");
addTask("Learn java");

deleteTask("learn js");
listAllTasks();

