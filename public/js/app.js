var ul = document.getElementById('todo_item_list');
function add_todo_item()
{
    var todo_item_val = document.getElementById('todo-item-value');
    var li_list       = document.createElement('li');
    var li_text       = document.createTextNode(todo_item_val.value);
    li_list.appendChild(li_text);
    // ul.appendChild(li_list);
    todo_item_val.value = "";

    //Edit Button
    var editbtn     = document.createElement('button');
    var editbtnText = document.createTextNode('Edit'); 
    editbtn.setAttribute('class','btn');
    editbtn.setAttribute('class','btn-primary');
    editbtn.setAttribute('class','edit');
    editbtn.setAttribute('onclick','edit_list_item(this)');

    editbtn.appendChild(editbtnText);
    
    
    //Delete Button
    var deleteBtn      = document.createElement('button');
    var deleteBtnText  = document.createTextNode('Delete');
    deleteBtn.setAttribute('class','btn');
    deleteBtn.setAttribute('class','btn-danger');
    deleteBtn.setAttribute('class','delete');
    deleteBtn.setAttribute('onclick','delete_item(this)');


    deleteBtn.appendChild(deleteBtnText);
    
    li_list.appendChild(editbtn);
    li_list.appendChild(deleteBtn);
    
    ul.appendChild(li_list);

    // console.log(li_list);
}

function deleteAll_Todo()
{
    document.getElementById('todo_item_list').innerHTML = '';
}

function delete_item(event)
{
    event.parentNode.remove();
}

function edit_list_item(e)
{
    var newval = prompt('Update Todo',e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = newval;
    console.log(e.parentNode.firstChild);
}