let add = document.getElementById('add');
let container = document.getElementById('container');
let listItem = document.getElementById('listItem');

add.addEventListener('click', function(){
    
    if (listItem.value == "") {
        alert("Please Insert value first !");
        
    } else{
        var paragraph = document.createElement('p');
        var li = document.createElement('li');
        li.innerText = listItem.value;
        container.appendChild(li);
        container.appendChild(paragraph);
        listItem.value= "";
    }
    
})