const ul_node = document.querySelectorAll("ul");
var jokunode;
var temp_node;

//skipataan ensimmäisen ul, koska sen jälkeläisiä ei tarvitse laskea.
for (var i = 1; i < ul_node.length; i++) {
    jokunode = ul_node[i];  
    temp_node = jokunode.querySelectorAll("li");   
    jokunode.previousSibling.textContent += "(" + temp_node.length + ")";
}

