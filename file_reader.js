const fs=require('fs');

// Asynchronous read
function read_file(file,string){
	fs.readFile(file, function (err, data) {
	  if (err) {
	    return console.error(err);
	  }
	  // console.log("Asynchronous read: " + data.toString());
	string=JSON.parse(data.toString());
	});


}