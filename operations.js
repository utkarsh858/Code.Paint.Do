var global_id=0;

function erase(ev) {
	ev.target.remove();	
}

function get_id(){
	return global_id++;
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
		element.style.background="blue";}
	else{
		element.setAttribute("class",string.replace(" selected",""));
		element.style.background="pink";
	}

	}


