const fs=require('fs');
const vsprintf=require('sprintf-js').vsprintf;
// Asynchronous read
function read_file(file,string){
	fs.readFile(file, function (err, data) {
	  if (err) {
	    return console.error(err);
	  }

	 // using pointers
	string[0]=JSON.parse(data.toString());
	});


}

function write_file(file,string){
	fs.appendFileSync(file,string);
}