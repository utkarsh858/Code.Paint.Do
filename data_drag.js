function drag(ev) {
    ev.dataTransfer.dropEffect="copy";

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    ev.preventDefault();
	 ev.dataTransfer.dropEffect = "copy"

    var data = ev.dataTransfer.getData("text");
    var dragged_element=document.getElementById(data).cloneNode(true);
    dragged_element.id=ev.target.id+"2";
    ev.target.appendChild(dragged_element);
}

function allowDrop(ev){
	 ev.dataTransfer.dropEffect = "copy"
	event.preventDefault();
}