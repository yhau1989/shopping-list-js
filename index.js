const items = []


const addItem = (e) => {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    items.push({item, quantity});
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
    writteList(items);
}

const itemList = (obj, index) => {
    let elem = document.createElement('div');
    elem.setAttribute('class', 'item-list');
    elem.innerHTML = `
    <div><strong>Item</strong>: ${obj.item}</div>
    <div><strong>Quantity</strong>: ${obj.quantity}</div>
    <button onclick='eliminar(${index})'>Delete Item</button>`
    return elem;
}


const totals = () => 
{
    const sum = items.reduce((acc, index) =>  acc + parseInt(index.quantity), 0);
    let elem = document.createElement('div');
    elem.setAttribute('class', 'item-list');
    elem.innerHTML = `<div><strong>Total Items</strong>: ${items.length}</div>
    <div><strong>Total Quantity</strong>: ${sum}</div>`
    return elem;
}


const writteList = (list) => {
    const list_content = document.getElementById('container_list');
    list_content.innerHTML = '';
    list.forEach((x, index) => {
        list_content.appendChild(itemList(x, index))
    })
    list_content.appendChild(totals());
    
}

const eliminar = (position) => {
    items.splice(position,1);
    writteList(items);
}

var form = document.forms.namedItem("items-form");
form.addEventListener('submit', addItem, false);