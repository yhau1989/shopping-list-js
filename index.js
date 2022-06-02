
const items = []


const addItem = () => {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    items.push({item, quantity});
}

var form = document.forms.namedItem("items-form");
form.addEventListener('submit', addItem, false);