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
    <div><strong>Cantidad</strong>: ${obj.quantity}</div>
    <button onclick='eliminar(${index})'>Eliminar</button>`
    return elem;
}



const writteList = (list) => {
    const list_content = document.getElementById('container_list');
    list_content.innerHTML = '';
    list.forEach((x, index) => {
        list_content.appendChild(itemList(x, index))
    })
}

const eliminar = (position) => {
    items.splice(position,1);
    writteList(items);
}

var form = document.forms.namedItem("items-form");
form.addEventListener('submit', addItem, false);