var global_id=0;

var statements_info=[];
read_file("statements_info.json",statements_info);


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


function code_statements_handler(classType,format){

	var element=document.createElement("div");
	var attr=document.createAttribute("data-type");
	attr.value=format;
	element.setAttributeNode(attr);
	console.log(element);
	for(let [ key,value ] of statements_info[0][format]){
	console.log(key+" "+value);

		var sub_element=document.createElement("input");
		var attr2=document.createAttribute("type");
		attr2.value=value;
		sub_element.setAttributeNode(attr2);

		var attr3=document.createAttribute("class");
		attr3.value=key;
		sub_element.setAttributeNode(attr3);
	console.log(sub_element);

		element.appendChild(sub_element);
	}
	console.log(element);
	var portion_right=document.getElementById("portion-right");

	portion_right.appendChild(element);
}

function code_region_handler(classType){

}

function unload(){
	var portion_right=document.getElementById("portion-right");

	var array=portion_right.getElementsByTagName("div");
	array[array.length-1].remove();
}

function load(classType,format){
	if(classType.search("code-statements")!=-1)
		code_statements_handler(classType,format);
	if(classType.search("code-region")!=-1)
		code_region_handler(classType,format);

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
		load(element.getAttribute("class"),element.getAttribute("data-format"));
	}
	else{
		element.setAttribute("class",string.replace(" selected",""));
		element.style.background="pink";
		unload();
	}

	}
