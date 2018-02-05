function  getRandomColor(){
	return color_array[Math.floor(Math.random() * color_array.length) ];
}

function erase(ev) {
	// ev.target.remove();
	flag_erase=(flag_erase+1)%2;
}

function get_id(){
	return global_id++;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function updateUsedVariables(string){
	var i;
	if(( i=used_keywords.indexOf(string))>-1){
		console.log(used_keywords);
		used_keywords.splice(i,1);
		console.log(used_keywords);
		
		used_keywords.push(string);
	}else{
		used_keywords.push(string);
	}
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

			var attr3=document.createAttribute("ondragstart");
			attr3.value="dragForInput(event)";
			sub_element.setAttributeNode(attr3);

			array[0].appendChild(sub_element);
		}

		flag_common_variables=1;
	}

	if(flag_shortcuts==0){

		for (var i = 0; i < shortcuts_symbols.length; i++) {
			var sub_element= document.createElement("li");	
			sub_element.innerHTML= shortcuts_symbols[i];

			var attr=document.createAttribute("class");
			attr.value="shortcuts-items";
			sub_element.setAttributeNode(attr);

			var attr2=document.createAttribute("draggable");
			attr2.value="true";
			sub_element.setAttributeNode(attr2);

			var attr3=document.createAttribute("ondragstart");
			attr3.value="dragForInput(event)";
			sub_element.setAttributeNode(attr3);

			array[1].appendChild(sub_element);
		}

		flag_shortcuts==1;
	}

	if(flag_numberdumber==0){

		for (var i = 0; i < used_keywords.length; i++) {
			var sub_element= document.createElement("li");	
			sub_element.innerHTML= used_keywords[i];

			var attr=document.createAttribute("class");
			attr.value="used-keywords-items";
			sub_element.setAttributeNode(attr);

			var attr2=document.createAttribute("draggable");
			attr2.value="true";
			sub_element.setAttributeNode(attr2);

			var attr3=document.createAttribute("ondragstart");
			attr3.value="dragForInput(event)";
			sub_element.setAttributeNode(attr3);

			array[2].appendChild(sub_element);
		}

		flag_shortcuts==1;
	}

	// manifest all blue bloxes
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

			sub_element.style.color="#038387";

			var attr2=document.createAttribute("class");
			attr2.value="property-heading";
			sub_element.setAttributeNode(attr2);

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

		var attr5=document.createAttribute("ondragover");
		attr5.value="allowDrop(event)";
		sub_element.setAttributeNode(attr5);

		var attr5=document.createAttribute("ondrop");
		attr5.value="dropForInput(event)";
		sub_element.setAttributeNode(attr5);

		var attr6=document.createAttribute("value");
		attr6.value="";
		sub_element.setAttributeNode(attr6);

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

	element.style.border="double #00cc6a 0px 0px 2px 0px";

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

		var attr5=document.createAttribute("ondragover");
		attr5.value="allowDrop(event)";
		sub_element.setAttributeNode(attr5);

		var attr5=document.createAttribute("ondrop");
		attr5.value="dropForInput(event)";
		sub_element.setAttributeNode(attr5);

		var attr6=document.createAttribute("value");
		attr6.value="";
		sub_element.setAttributeNode(attr6);

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
	var temptemparray=main_element.getElementsByTagName('h6');
	var temparray=[];


	//  ONLY IMMEDIATE H6 MEMBERS ARE REQUIRED
	for (var i = temptemparray.length - 1; i >= 0; i--) {
		if(temptemparray[i].parentNode.id==main_element.id)
			temparray.push(temptemparray[i]);
	}

	for (var i = temparray.length - 1; i >= 0; i--) {
		temparray[i].parentNode.removeChild(temparray[i]);
	}
	
	for (var i = 0; i<=array_inputs.length - 1; i++) {
		var sub_element=document.createElement("h6");
		var attr=document.createAttribute("class");
		attr.value=array_inputs[i].getAttribute("class");
		var attr2=document.createAttribute("data-value");
		attr2.value=array_inputs[i].value;

		var attr3=document.createAttribute("ondrop");
		attr3.value="drop_for_regionDescriptions(event)";

		sub_element.setAttributeNode(attr);
		sub_element.setAttributeNode(attr2);
		sub_element.setAttributeNode(attr3);

		sub_element.innerHTML=attr.value+" : "+attr2.value;
	
		if(attr.value=="variable-name") updateUsedVariables(attr2.value);

		//OLD METHOD FOR ADDING THE CHILD
		// main_element.appendChild(sub_element);

		//NOW lets add it after the h5 tag
		var title_main_element=main_element.getElementsByTagName('h5')[0];
		insertAfter(sub_element,title_main_element);

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
    	var element;
    	if(ev.target.className.search('region-heading')!=-1 )
    		element=ev.target.parentElement;
    	else if(ev.target.className.search('code-statements')!=-1)
    		element=document.getElementById(ev.target.id);
    	else
    		element=document.getElementById(ev.target.id);
    	
    	console.log(element);
    	var string=element.getAttribute("class");
	
			if(element.getAttribute("class").search("selected")==-1)
				{element.setAttribute("class",string+" selected");
				element.style.background="#8E8CD8";
				console.log(element.getAttribute("id"));
				load(element.getAttribute("class"),element.getAttribute("data-format"),element.getAttribute("id"));
			}
			else{
				var string=getRandomColor();
                var a=string.substr(1,2);
                var b=string.substr(3,4);
                var c= string.substr(5,6);
				 a= parseInt(a, 16);
				 b= parseInt(b, 16);
				 c= parseInt(c, 16);
				element.setAttribute("class",element.className.replace(" selected",""));
				if(element.getAttribute("class").search("code-statements")!=-1) 
					{element.style.background="none";console.log('hoal')}
				if(element.getAttribute("class").search("code-regions")!=-1) 
					{element.style.background="linear-gradient(to right,\
					 rgba("+a+","+b+","+c+",0), rgba("+a+","+b+","+c+",1))";
					console.log('pp');}
				unload(element.getAttribute("id"));
		}

	}
	else{
		var temp=document.getElementById(ev.target.id+" yo!");
		if(temp!=null) temp.remove();
		ev.target.remove();

	}

}

