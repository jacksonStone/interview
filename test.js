var fileName = process.argv[2];
var counts = {};

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(fileName)
});

lineReader.on('line', function (data) {
  data = data.split(',');
  if(data[0] && data[1]){
    if(counts[data[1]])
    {
      counts[data[1]]++;
    }
    else {
      counts[data[1]] = 1;
    }
  }
});

lineReader.on('close', function (line) {
  var output = '';
  for(var j in counts)
  {
    output+="("+j+","+counts[j]+"),"
  }
  //gets ride of trailing comma
  console.log(output.substring(0,output.length-1));
});
