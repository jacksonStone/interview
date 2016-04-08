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
  for(var j in counts)
  {
    console.log(j+','+counts[j]);
  }
});
