// console.log('hello loops');


const arr = []
const input = document.querySelector('#todoapp');
const ol = document.querySelector('ol')


function getTodo(){

    arr.push(input.value)
    renderTodo()
    input.value = ''
}



function deleteTodo(index) {
    
    arr.splice(index , 1);
    renderTodo()

}


function editTodo(index){

    const updatedValue = prompt('enter your update value');
    arr.splice(index , 1 , updatedValue)
    renderTodo()
}










function renderTodo(){
    
    ol.innerHTML = ''

    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
        ol.innerHTML += 
       `<li class="text-center border">
        ${arr[i]}
        <button class = "btn btn-primary" onclick="deleteTodo()"><i class="fa-solid fa-trash"></i></button>  

        <button class = "btn btn-primary" onclick="editTodo()"><i class="fa-regular fa-pen-to-square"></i></button> <li>`
    }
} 









































