function bienvenu() {
    alert("Bienvenu");
}

function ajouter(){

    var newTaskForm = document.forms.newTask;
    console.log(newTaskForm.elements.categorie.value);
    console.log(newTaskForm.elements.tache.value);
    

    const newItem = document.createElement('tr');
    const td1  = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.textContent = newTaskForm.elements.tache.value;
    td2.textContent = newTaskForm.elements.date.value;
    td3.textContent = newTaskForm.elements.categorie.value;
    newItem.append(td1, td2, td3);
    console.log(newItem);
    console.log();
    document.querySelector(".datatable").appendChild(newItem);
    
    
}





//taskTd.textContenet
//var newCommandForm = document.forms.newTaskF;