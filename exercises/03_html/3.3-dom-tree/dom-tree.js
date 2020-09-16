//3
var node = document.createElement("LI");
var textnode = document.createTextNode("Item 0");
node.appendChild(textnode);
document.getElementById("ordered").prepend(node);

//5
var list = document.getElementById("todo");
list.removeChild(list.childNodes[3]);

//2
var navi = document.querySelector(".navi");
var node_li = document.createElement("LI");
var node_a = document.createElement('a');
var node_text = document.createTextNode("Localhost");
node_a.appendChild(node_text); //text to a
node_a.title = "list"; 
node_a.href = "http://localhost:3000/";
node_li.appendChild(node_a);
navi.appendChild(node_li);

//1
var navi = document.querySelector(".navi");
navi.classList.add("list");

//4
var todo = document.getElementById("todo");
todo.classList.remove("list navi todo");