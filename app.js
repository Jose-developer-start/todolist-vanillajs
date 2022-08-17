//variables
const frmTraea = document.querySelector('#button');
const form = document.querySelector('#frmTarea')
const tareasContainer = document.querySelector('#tareasContainer')
let data = []
let newData = []
document.addEventListener('DOMContentLoaded', ()=>{
    let dataTareas = JSON.parse(localStorage.getItem('tareas'))
    console.log(data)
    console.log(dataTareas)
    newData = [...data,...dataTareas]
    console.log(newData)
    viewTareaHTML(newData)
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form)
    const tarea ={
            id: Date.now(),
            name : formData.get('tarea'),
            prioridad: formData.get('prioTarea')
        }

    data.push(tarea)
    localStorage.setItem('tareas',JSON.stringify(data)); //Saved data localStorage
    let dataTareas = JSON.parse(localStorage.getItem('tareas'))
    viewTareaHTML(dataTareas)
})

function viewTareaHTML(tareas){
    let html = '';
    tareas.forEach((tarea)=>{
        html +=`
        <div class="card">
            <div class="card-body">
            ${tarea.name}
            </div>
        </div>`
        tareasContainer.innerHTML = html
    })
    //Testing array
    //console.log(tareas)
}
/*
let arrayTareas = [];
//Listeners
Listeners();
function Listeners(){
   frmTraea.addEventListener('click',agregarTarea)
}

//funciones
function agregarTarea(e){
    e.preventDefault()
    const nomTarea = document.querySelector('#tarea').value
    const prioTarea = document.querySelector('#prioTarea').value
    const objTarea={
        id:Date.now(),
        nomTarea:nomTarea,
        prioridad:prioTarea
    }
    arrayTareas.push(objTarea)
    //arrayTareas =[...arrayTareas,objTarea];
    console.log(arrayTareas);

}
*/