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

    var ontouchend_attr=document.createAttribute("ontouchend");
    ontouchend_attr.value="select(event)";
    dragged_element.setAttributeNode(ontouchend_attr);

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
                var string=getRandomColor();
                var a=string.substr(1,2);
                var b=string.substr(3,4);
                var c= string.substr(5,6);
                 a= parseInt(a, 16);
                 b= parseInt(b, 16);
                 c= parseInt(c, 16);

                 dragged_element.style.background="linear-gradient(to right, rgba("+a+","+b+","+c+",0), rgba("+a+","+b+","+c+",0.4))";


    var onclick_attr=document.createAttribute("onclick");
    onclick_attr.value="select(event)";
    dragged_element.setAttributeNode(onclick_attr);

    var ontouchend_attr=document.createAttribute("ontouchend");
    ontouchend_attr.value="select(event)";
    dragged_element.setAttributeNode(ontouchend_attr);

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
    var dragged_element=prepare_codestatement(ev);
    ev.target.parentNode.parentNode.insertBefore(dragged_element,ev.target.parentNode.nextSibling);
}

function drop_for_regionDescriptions(ev){
    ev.stopPropagation();
    var dragged_element=prepare_codestatement(ev);
    ev.target.parentNode.parentNode.insertBefore(dragged_element,ev.target.parentNode.nextSibling);

}

function dropForInput(ev){

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy"

    var data = ev.dataTransfer.getData("text");
    ev.target.setAttribute("value",ev.target.value+data);
}