function drag(ev) {
    ev.dataTransfer.dropEffect="copy";

    ev.dataTransfer.setData("text/plain", ev.target.id);

}

function dragForInput(ev) {
    ev.dataTransfer.dropEffect="copy";

    ev.dataTransfer.setData("text/plain", ev.target.innerText);

}

function prepare_codestatement(ev){
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy"

    var data = ev.dataTransfer.getData("text");
    var dragged_element=document.getElementById(data).cloneNode(true);
    
    dragged_element.id="c"+get_id();
    
    
    if(dragged_element.getAttribute("class").search("statements")!=-1){

    var onclick_attr=document.createAttribute("onclick");
    onclick_attr.value="select(event)";
    dragged_element.setAttributeNode(onclick_attr);

    var ondragover_attr=document.createAttribute("ondragover");
    ondragover_attr.value="allowDrop(event)";
    dragged_element.setAttributeNode(ondragover_attr);


    var ondrop_attr=document.createAttribute("ondrop");
    ondrop_attr.value="drop_for_statements(event)";
    dragged_element.setAttributeNode(ondrop_attr);




    dragged_element.setAttribute("class",dragged_element.getAttribute("class").replace("statements","code-statements"));
    }
    else {
    dragged_element.setAttribute("class",dragged_element.getAttribute("class").replace("region","code-region"));


    var onclick_attr=document.createAttribute("onclick");
    onclick_attr.value="select(event)";
    dragged_element.setAttributeNode(onclick_attr);

    }

    return dragged_element;
}

function drop(ev) {

    var dragged_element=prepare_codestatement(ev);
    ev.target.appendChild(dragged_element);
}

function drop_for_statements(ev){
    ev.stopPropagation();
    var dragged_element=prepare_codestatement(ev);
    ev.target.parentNode.insertBefore(dragged_element,ev.target.nextSibling);
}

function allowDrop(ev){
	 ev.dataTransfer.dropEffect = "copy"
	event.preventDefault();
}

function drop_for_regionHeading(ev){
    ev.stopPropagation();

}

function dropForInput(ev){

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy"

    var data = ev.dataTransfer.getData("text");
    ev.target.setAttribute("value",ev.target.value+data);
}