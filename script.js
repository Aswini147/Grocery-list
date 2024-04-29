<script>

let bgcontElement = document.createElement("div");
bgcontElement.classList.add("bg-container");
document.body.appendChild(bgcontElement);


let h1Element = document.createElement("h1");
h1Element.textContent = "Grocery List";
h1Element.classList.add("heading");
bgcontElement.appendChild(h1Element);

let listcont = document.createElement("ul");
listcont.classList.add("list-container");
h1Element.appendChild(listcont);

let groceryItems = ["Milk","Peanut Butter","Curd","Choco Chips","Cup Cakes","Chocolate"];

for(let lielements of groceryItems){

let listElement = document.createElement("li");
listElement.textContent = lielements;
listElement.style.color = "black";
listcont.appendChild(listElement);

}

let ipElement = document.createElement("input");
ipElement.type = "checkbox";
ipElement.id = "deliveryMode";
ipElement.classList.add("ip-heading");
bgcontElement.appendChild(ipElement);


let labelElement = document.createElement("label");
labelElement.setAttribute("for" ,"deliveryMode");
labelElement.classList.add("delivery-text")
labelElement.textContent = "Need Home Delivery";
bgcontElement.appendChild(labelElement);


let brElement1 = document.createElement("br");
bgcontElement.appendChild(brElement1);


let btnElement = document.createElement("button");
btnElement.classList.add("btn", "btn-primary");
btnElement.textContent = "Proceed To Pay";
bgcontElement.appendChild(btnElement);

</script>



