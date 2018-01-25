var global_id=0;

var statements_info=[];
var regions_info=[];
read_file("statements_info.json",statements_info);
read_file("regions_info.json",regions_info);


Object.prototype[Symbol.iterator] = function*() {
 for(let key of Object.keys(this)) {
  yield([ key, this[key] ])
} }

function erase(ev) {
	ev.target.remove();	
}

function get_id(){
	return global_id++;
}


function code_statements_handler(classType,format,id){

	var element=document.createElement("div");
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);

	var attr4=document.createAttribute("id");
	attr4.value=id+" yo!";
	element.setAttributeNode(attr4);
	
	for(let [ key,value ] of statements_info[0][format]){
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
		}


		element.appendChild(sub_element);

	}

	var marking_line=document.createElement("hr");
	element.appendChild(marking_line);

	var portion_right=document.getElementById("portion-right");
	console.log(element);
	portion_right.appendChild(element);
	
}

function code_region_handler(classType){
		var element=document.createElement("div");
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);

	var attr4=document.createAttribute("id");
	attr4.value=id+" yo!";
	element.setAttributeNode(attr4);
	
	for(let [ key,value ] of statements_info[0][format]){
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
	var portion_right=document.getElementById("portion-right");

	var del_element=document.getElementById(id+" yo!");
	del_element.remove();
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
		element.style.background="pink";
		unload(element.getAttribute("id"));
	}

	}
