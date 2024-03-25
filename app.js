// console.log('Todo App');






// const fruits = ['apple' , 'mango' , 'banana' , 'orange' , 'strwaberry'];



// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i])
// }









// const fruits = ['apple' , 'mango' , 'banana' , 'orange' , 'strwaberry'];

// const ol = document.querySelector('ol');

// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i])

//     ol.innerHTML += `<li>${fruits[i]}</li>`
// }
















const arr = []
const input = document.querySelector('#todoapp');

const ol = document.querySelector('ol');



// function renderTodo(){

//     ol.innerHTML = ''

//     for(let i = 0 ; i < arr.length ; i++){
//         console.log(arr[i])

//         ol.innerHTML += `<li>
//         ${arr[i]}
//         <button onclick="deleteTodo()">Delete</button>
//         <button onclick="editTodo()">edit</button></li>`
//     }
// }









// function getTodo(){

//     arr.push(input.value)
//     renderTodo()
//     console.log(arr)
//     input.value = ''
// }






// function deleteTodo(index){

//     arr.splice(index , 1)
//     renderTodo()
// }



// function editTodo(index){
   
//     const updatedValue = prompt('enter your updated value');
//     arr.splice(index , 1 , updatedValue);

//     renderTodo()

// }



function addTodo(){

    ol.innerHTML = ''

    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
        ol.innerHTML += `
        <li>${arr[i]}
        <button onclick="deleteTodo()"><i class="fa-solid fa-trash"></i></button>
        <button onclick="deleteTodo()"><i class="fa-regular fa-pen-to-square"></i></button> </li>`
    }
}













function getTodo(){

    arr.push(input.value);
    addTodo()
    input.value = '' ;


}






function deleteTodo(index){

    arr.splice(index , 1);
    addTodo()
    input.value = '';
}







function editTodo(index){

    const updatedValue = prompt('enter your update value');
    
    arr.splice(index , 1 , updatedValue) ;
    addTodo()
    input.value = '';
}
































































