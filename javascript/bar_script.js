function bienvenu() {
    alert("Bienvenu");
}

function ajouter(){

    var newTaskForm = document.forms.newTask;


    console.log(newTaskForm.elements.NomCocktail.value);
    console.log(newTaskForm.elements.Ingrédiens.value);
    console.log(newTaskForm.elements.Méthode.value);
    console.log(newTaskForm.elements.Difficulté.value);
    console.log(newTaskForm.elements.Pseudo.value);
    
    

    const newItem = document.createElement('tr');
    const td1  = document.createElement('td');
    const td2  = document.createElement('td')
    const td3  = document.createElement('td')
    const td4  = document.createElement('td')
    const td5  = document.createElement('td')
    const td6  = document.createElement('td')

    td1.textContent = newTaskForm.elements.NomCocktail.value;
    td2.textContent = newTaskForm.elements.Ingrédiens.value
    td3.textContent = newTaskForm.elements.Méthode.value
    td4.textContent = newTaskForm.elements.Difficulté.value
    td5.textContent = newTaskForm.elements.Pseudo.value
    td6.textContent = newTaskForm.elements.date.value


    newItem.append(td1);
    newItem.append(td2);
    newItem.append(td3);
    newItem.append(td4);
    newItem.append(td5);
    newItem.append(td6);

    console.log(newItem);
    
    document.querySelector(".datatable").appendChild(newItem);
    
    
}
