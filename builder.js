var output_format=[];

function recursive_build(node){
	var opening_string= output_format[0][node.getAttribute("data-format")]["open"]["string"];
	
	vprintf(opening_string,);

	var children=node.childNodes;

	for (var i = 0;i<=children.length - 1; i++) {
		if(children[i].getAttribute("class").search("code-statements")!=-1){
			recursive_build(children[i]);
		}
		if(children[i].getAttribute("class").search("code-region")!=-1){

		}
	}

	var closing_string= output_format[0][node.getAttribute("data-format")]["close"]["string"];

}


function build() {
	var center_portion=document.getElementById('center-portion');
	read_file("build-file.json",output_format);

	var children=center_portion.childNodes;

	for (var i = 0;i<=children.length - 1; i++) {
		if(children[i].getAttribute("class").search("code-statements")!=-1){
			recursive_build(children[i]);
		}
		if(children[i].getAttribute("class").search("code-region")!=-1){
			var string=output_format[0][node.getAttribute("data-format")]["string"];
			var array_args=[];
			//building the array  of args
			var sub_children=children.childNodes;
			for (var j = 0; j < sub_children.length; j++) {
				array_args.push(sub_children[j].getAttribute("data-value"));
			}

			w- vprintf(string,array_args);
		}
	}
}