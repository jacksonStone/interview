/*
  In order to call the function from the CL
  > node test.js example.txt
  example.txt is the file containing the data

*/
var fileName = process.argv[2];
var counts = {};
var usersSoFar = {};

/*
  what will be handling the actual input. Is lineReader
  so only has one line in memory at
  any one time
*/
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(fileName)
});

//reads through every line of the file while it has lines to read
lineReader.on('line', function (data) {
  //parse the line into array
  data = data.split(',');
  //checks to make sure it at least has two entries, otherwise ignores
  if(data[0] && data[1]){
    //I store user IDs in a hash so that way I get constant lookup time
    if(!usersSoFar[data[0]])
    {
      //I use the age as a key in a json object
      if(counts[data[1]])
      {
        counts[data[1]]++;
      }
      else {
        counts[data[1]] = 1;
      }
      usersSoFar[data[0]] = true;
    }

  }
});

//fires once all lines have been read
lineReader.on('close', function (line) {
  //what will be output into the CL
  var output = '';
  for(var j in counts)
  {
    //forms the actual tuple
    output+="("+j+","+counts[j]+"),"
  }
  //gets ride of trailing comma
  console.log(output.substring(0,output.length-1));
});
