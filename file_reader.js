const fs=require('fs');

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