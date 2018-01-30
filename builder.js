var output_format=[];
read_file("build-file.json",output_format,true,false);

function recursive_build(node){

	var opening_string= output_format[0][node.getAttribute("data-format")]["open"]["string"];
	var array_args=[];
	var sub_details_element=node.getElementsByTagName('h6');
	for (var i = 0; i < sub_details_element.length; i++) {
		array_args.push(sub_details_element[i].getAttribute('data-value'));
	}
	write_file('output.cpp',vsprintf(opening_string,array_args));



	var children=node.childNodes;

	for (var i = 0;i<=children.length - 1; i++) {
		if(children[i].nodeType==1){
			console.log("children ::");
	
				if(children[i].getAttribute("class").search("code-region")!=-1){
					recursive_build(children[i]);
				}
				if(children[i].getAttribute("class").search("code-statements")!=-1){
					console.log(children[i]);
					console.log(children[i].getAttribute("data-format"));

					var string=output_format[0][children[i].getAttribute("data-format")]["string"];
					var array_args=[];
					//building the array  of args
					var sub_children=children.childNodes;
					if(sub_children)
					for (var j = 0; j < sub_children.length; j++) {
						array_args.push(sub_children[j].getAttribute("data-value"));
					}
	
					write_file(vsprintf(string,array_args));
			}
		}
	}


	var closing_string= output_format[0][node.getAttribute("data-format")]["close"]["string"];
	write_file('output.cpp',vprinf(closing_string));
}


function build() {

	var center_container=document.getElementById('container');
	var children=center_container.childNodes;
	console.log(children);

	for (var i = 0;i<=children.length - 1; i++) {
		if(children[i].nodeType==1){
			console.log("children ::");
	
				if(children[i].getAttribute("class").search("code-region")!=-1){
					recursive_build(children[i]);
				}
				if(children[i].getAttribute("class").search("code-statements")!=-1){
					console.log(children[i]);
					console.log(children[i].getAttribute("data-format"));

					var string=output_format[0][children[i].getAttribute("data-format")]["string"];
					var array_args=[];
					//building the array  of args
					var sub_children=children[i].childNodes;
					
					for (var j = 0; j < sub_children.length; j++) {
						if(sub_children[j].nodeType==1)
						array_args.push(sub_children[j].getAttribute("data-value"));
					}
					console.log("Getting to know the ARGS:: ");
					console.log(array_args);
					console.log(sub_children);
					console.log(children[i]);
					console.log("string"+string);
	
					write_file('output.cpp',vsprintf(string,array_args));
			}




		}
	}
}