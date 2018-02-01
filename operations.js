var global_id=0;

var statements_info=[];
var regions_info=[];
read_file("statements_info.json",statements_info,true,false);
read_file("regions_info.json",regions_info,true,false);
var flag_erase=0;
var flag_common_variables=false;
var common_variable_names=[
    "a",
    "x",
    "i",
    "value",
    "p",
    "name",
    "xt",
    "file",
    "b",
    "item",
    "list",
    "state",
    "test",
    "c",
    "argcount",
    "check",
    "y",
    "none",
    "f",
    "t",
    "result",
    "status",
    "data",
    "set",
    "report",
    "instr",
    "used",
    "index",
    "unit",
    "text",
    "j",
    "right",
    "s",
    "one",
    "no",
    "parameter",
    "e",
    "input",
    "current",
    "prob",
    "g",
    "d",
    "ok",
    "n",
    "any",
    "values",
    "length",
    "l",
    "point",
    "zero",
    "position",
    "call",
    "output",
	];


function erase(ev) {
	// ev.target.remove();
	flag_erase=(flag_erase+1)%2;
}

function get_id(){
	return global_id++;
}

function display_boxes(){

	var array=document.getElementsByClassName("focus-window");
	if(flag_common_variables==0) 
	{

		for (var i = 0; i < common_variable_names.length; i++) {
			var sub_element= document.createElement("li");	
			sub_element.innerHTML= common_variable_names[i];

			var attr=document.createAttribute("class");
			attr.value="box_item";
			sub_element.setAttributeNode(attr);

			var attr2=document.createAttribute("draggable");
			attr2.value="true";
			sub_element.setAttributeNode(attr2);

			array[0].appendChild(sub_element);
		}

		flag_common_variables=1;
	}
	for (var i = 0; i < array.length; i++) {
		array[i].style.display="block";
	}
	
}

function hide_boxes(ev){
	
	
	if(['recommender','shortcuts','numberdumber'].indexOf(ev.target.id)==-1 && ev.target.tagName!="INPUT")
	{
	var array=document.getElementsByClassName("focus-window");
	for (var i = 0; i < array.length; i++) {
		array[i].style.display="none";
	}
	}

}


function code_statements_handler(classType,format,id){

	var element=document.createElement("div");
	var code_statement=document.getElementById(id);
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);

	var attr4=document.createAttribute("id");
	attr4.value=id+" yo!";
	element.setAttributeNode(attr4);

	var statements_info_JSON=statements_info[0][format];
	var keys=Object.keys(statements_info_JSON);
	
	for(var iterator=0;iterator<=keys.length-1; iterator++){
		var key=keys[iterator];
		var value=statements_info_JSON[key];

		

		// creating sub fields
		var sub_element;
		if(key.search('display')!=-1){
			sub_element=document.createElement("div");
			sub_element.innerHTML=value;

		}

		if(key.search('input')!=-1){
		sub_element=document.createElement("input");
		var attr2=document.createAttribute("type");
		attr2.value=value[1];
		sub_element.setAttributeNode(attr2);

		var attr3=document.createAttribute("class");
		attr3.value=value[0];
		sub_element.setAttributeNode(attr3);

		var attr4=document.createAttribute("onfocusin");
		attr4.value="display_boxes()";
		sub_element.setAttributeNode(attr4);

		// var attr5=document.createAttribute("onfocusout");
		// attr5.value="hide_boxes()";
		// sub_element.setAttributeNode(attr5);

		//searching for already present tag conting the details

		var children=code_statement.getElementsByTagName('h6');
		for (var i = 0; i < children.length; i++) {
			if(children[i].getAttribute("class")==value[0]){
				var sub_attr=document.createAttribute("value");
				sub_attr.value= children[i].getAttribute("data-value");
				sub_element.setAttributeNode(sub_attr);
				}
			
			}


		}


		element.appendChild(sub_element);

	}

	var marking_line=document.createElement("hr");
	element.appendChild(marking_line);

	var portion_right=document.getElementById("portion-right");
	
	portion_right.appendChild(element);
	
}

function code_region_handler(classType,format,id){

	var element=document.createElement("div");
	var code_statement=document.getElementById(id);
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);

	var attr4=document.createAttribute("id");
	attr4.value=id+" yo!";
	element.setAttributeNode(attr4);

	var regions_info_JSON=regions_info[0][format];
	var keys=Object.keys(regions_info_JSON);
	
	for(var iterator=0;iterator<=keys.length-1; iterator++){
		var key=keys[iterator];
		var value=regions_info_JSON[key];

		

		// creating sub fields
		var sub_element;
		if(key.search('display')!=-1){
			sub_element=document.createElement("div");
			sub_element.innerHTML=value;

		}

		if(key.search('input')!=-1){
		sub_element=document.createElement("input");
		var attr2=document.createAttribute("type");
		attr2.value=value[1];
		sub_element.setAttributeNode(attr2);

		var attr3=document.createAttribute("class");
		attr3.value=value[0];
		sub_element.setAttributeNode(attr3);

		var attr4=document.createAttribute("onfocusin");
		attr4.value="display_boxes()";
		sub_element.setAttributeNode(attr4);

		// var attr5=document.createAttribute("onfocusout");
		// attr5.value="hide_boxes()";
		// sub_element.setAttributeNode(attr5);

		//searching for already present tag conting the details

		var children=code_statement.getElementsByTagName('h6');
		for (var i = 0; i < children.length; i++) {
			if(children[i].getAttribute("class")==value[0]){
				var sub_attr=document.createAttribute("value");
				sub_attr.value= children[i].getAttribute("data-value");
				sub_element.setAttributeNode(sub_attr);
				}
			
			}


		}


		element.appendChild(sub_element);

	}

	var marking_line=document.createElement("hr");
	element.appendChild(marking_line);

	var portion_right=document.getElementById("portion-right");
	
	portion_right.appendChild(element);
	
}

function unload(id){
	
	var portion_right=document.getElementById("portion-right");

	var del_element=document.getElementById(id+" yo!");
	
	var array_inputs=del_element.getElementsByTagName("input");
	var main_element=document.getElementById(id);
	
	// // clearing all the unnessary nodes
	var temparray=main_element.getElementsByTagName('h6');
	for (var i = 0; i < temparray.length; i++) {
		temparray[i].remove();
	}
	

	
	for (var i = 0; i<=array_inputs.length - 1; i++) {
		var sub_element=document.createElement("h6");
		var attr=document.createAttribute("class");
		attr.value=array_inputs[i].getAttribute("class");
		
		var attr2=document.createAttribute("data-value");
		attr2.value=array_inputs[i].value;

		sub_element.setAttributeNode(attr);
		sub_element.setAttributeNode(attr2);

		sub_element.innerHTML=attr.value+" : "+attr2.value;
		
		//mechanism to attach the property to h5 
		var temp= main_element.getElementsByTagName("h5");
		
		
		var check=false;
		var the_element_to_be_changed;

		for (var j = 0; j <= temp.length - 1 && !check; j++) {
			if(temp[j].class=attr.value) {check=true;the_element_to_be_changed=temp[j];}
		}
		
		delete temp;

		if(check){
			the_element_to_be_changed.setAttribute("data-value",attr2.value);
		}else{
			main_element.appendChild(sub_element);
		}


	}

	del_element.remove();
}

function load(classType,format,id){
	if(classType.search("code-statements")!=-1)
		code_statements_handler(classType,format,id);
	if(classType.search("code-region")!=-1)
		code_region_handler(classType,format,id);

}


function select(ev){

	if(flag_erase==0){

    	ev.stopPropagation();
    	var element=document.getElementById(ev.target.id);
    	
    	var string=element.getAttribute("class");
    	// string=string+" selected";
    	
	
			if(element.getAttribute("class").search("selected")==-1)
				{element.setAttribute("class",string+" selected");
				element.style.background="blue";
				load(element.getAttribute("class"),element.getAttribute("data-format"),element.getAttribute("id"));
			}
			else{
				element.setAttribute("class",string.replace(" selected",""));
				if(element.getAttribute("class").search("code-statements")) element.style.background="";
				if(element.getAttribute("class").search("code-regions")) element.style.background="pink";
				unload(element.getAttribute("id"));
		}

	}
	else{
		ev.target.remove();
	}

}

