const csvjson = require("csvjson");
const fs = require("fs");
const path = require("path");

var data = fs.readFileSync(path.join(__dirname, "data.csv"), {
  encoding: "utf8"
});
/*
{
    delimiter : <String> optional default is ","
    quote     : <String|Boolean> default is null
}
*/
var options = {
  delimiter: ",", // optional
  quote: '"' // optional
};
// for multiple delimiter you can use regex pattern like this /[,|;]+/

/* 
  for importing headers from different source you can use headers property in options 
  var options = {
    headers : "sr,name,age,gender"
  };
*/

const t = csvjson.toObject(data, options);
// console.log(t.filter(object => object.Clicks > 1 && object.Clicks < 4));

const filterFunction = (array, parameter, min, max) => {
  return array.filter(
    object => object[parameter] > min && object[parameter] < max
  );
};



console.log(filterFunction(t, "Clicks", 1, 4));

/*
    returns
 
    [
        {
            sr : 1,
            name : "rocky",
            age : 33,
            gender : "male"
        },
        {
            sr : 2,
            name : "jacky",
            age : 22,
            gender : "male"
        },
        {
            sr : 3,
            name : "suzy",
            age : 21,
            gender : "female"
        }
 
    ]
 
*/
