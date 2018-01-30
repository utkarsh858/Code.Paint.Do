var global_id=0;

var statements_info=[];
var regions_info=[];
read_file("statements_info.json",statements_info,true,false);
read_file("regions_info.json",regions_info,true,false);


// Object.prototype[Symbol.iterator] = function*() {
//  for(let key of Object.keys(this)) {
//   yield([ key, this[key] ])
// } }

function erase(ev) {
	ev.target.remove();	
}

function get_id(){
	return global_id++;
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

		console.log(key+" "+value);

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
	console.log(element);
	portion_right.appendChild(element);
	
}

function code_region_handler(classType,format,id){
		var element=document.createElement("div");
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);

	var attr4=document.createAttribute("id");
	attr4.value=id+" yo!";
	element.setAttributeNode(attr4);

	var statements_info_JSON=statements_info[0][format];
	var keys=Object.keys(statements_info_JSON);
	
	for(var i=0;i<=keys.length-1; i++){
		var key=keys[i];
		var value=statements_info_JSON[key];


		console.log(key+" "+value);
		if(key=="display"){
			var sub_element=document.createElement("div");
			sub_element.innerHTML=value;

		}

		if(key=="input"){
		var sub_element=document.createElement("input");
		var attr2=document.createAttribute("type");
		attr2.value=value[1];
		sub_element.setAttributeNode(attr2);

		var attr3=document.createAttribute("class");
		attr3.value=value[0];
		sub_element.setAttributeNode(attr3);
		

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
	console.log(element);
	portion_right.appendChild(element);
	
}

function unload(id){
	console.log('unloading');
	var portion_right=document.getElementById("portion-right");

	var del_element=document.getElementById(id+" yo!");
	
	var array_inputs=del_element.getElementsByTagName("input");
	var main_element=document.getElementById(id);
	
	// // clearing all the unnessary nodes
	var temparray=main_element.getElementsByTagName('h6');
	for (var i = 0; i < temparray.length; i++) {
		temparray[i].remove();
	}

	console.log(array_inputs);
	// for (var i = 0; i<=array_inputs.length - 1; i++) {
	// 	var sub_element=document.createElement("h6");
	// 	var attr=document.createAttribute("class");
	// 	attr.value=array_inputs[i].getAttribute("class");
		
	// 	var attr2=document.createAttribute("data-value");
	// 	attr2.value=array_inputs[i].value;

	// 	sub_element.setAttributeNode(attr);
	// 	sub_element.setAttributeNode(attr2);

	// 	sub_element.innerHTML=attr.value+" : "+attr2.value;
	// 	console.log(sub_element);
	// 	//mechanism to attach the property to h5 
	// 	var temp= main_element.getElementsByTagName("h5");
	// 	console.log(temp.length);
	// 	console.log(main_element);
	// 	var check=false;
	// 	var the_element_to_be_changed;

	// 	for (var i = 0; i <= temp.length - 1 && !check; i++) {
	// 		if(temp[i].class=attr.value) {check=true;the_element_to_be_changed=temp[i];}
	// 	}
	// 	console.log(check);
	// 	delete temp;

	// 	if(check){
	// 		the_element_to_be_changed.setAttribute("data-value")=attr2.value;
	// 	}else{
	// 		main_element.appendChild(sub_element);
	// 	}


	// }

	// del_element.remove();
}

function load(classType,format,id){
	if(classType.search("code-statements")!=-1)
		code_statements_handler(classType,format,id);
	if(classType.search("code-region")!=-1)
		code_region_handler(classType,format,id);

}


function select(ev){
    ev.stopPropagation();
    var element=document.getElementById(ev.target.id);

    var string=element.getAttribute("class");
    // string=string+" selected";
    console.log(string);

	// if(element.getAttribute("class").search("selected")==-1)
		// element.setAttribute("class",string+" selected");
	// else
		// element.setAttribute("class",string.replace(" selected",""));

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

