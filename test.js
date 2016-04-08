var fsp = require('fs-promise');
var fileName = process.argv[2];
var DBText = [];
var counts = {};

fsp.readFile(fileName, 'utf8')
.then((data, err)=>{
  if(err)console.log(err);
  else {
    data = data.split("\n");
    for(var i in data){
      var choppedUpData = data[i].split(',');
      if(choppedUpData[0] && choppedUpData[1]){
        if(counts[choppedUpData[1]])
        {
          counts[choppedUpData[1]]++;
        }
        else {
          counts[choppedUpData[1]] = 1;
        }
      }
    }
    for(var j in counts)
    {
      console.log(j+','+counts[j]);
    }
  }
});
