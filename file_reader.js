const fs=require('fs');
const vsprintf=require('sprintf-js').vsprintf;
// Asynchronous read
function read_file(file,string,check_parse,check_debug){
	console.log("the read file is"+file);
	fs.readFile(file, function (err, data) {
	  if (err) {
	    return console.error(err);
	  }

	 // using pointers
	 if(check_parse)
	string[0]=JSON.parse(data.toString());
	
	if(check_debug)
		console.log(data.toString());
	});


}

function read_file_Sync(file,string,check_parse,check_debug){
	console.log("the read file is"+file);
	fs.readFile(file, function (err, data) {
	  if (err) {
	    return console.error(err);
	  }

	 // using pointers
	 if(check_parse)
	string[0]=JSON.parse(data.toString());
	
	if(check_debug)
		console.log(data.toString());
	});


}

function write_file(file,string){
	console.log("Written this to file "+string);
	fs.appendFileSync(file,string);
}