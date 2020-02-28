const filehandle = require("fs").promises;
const path = require("path");

let master = [];

const csv = filehandle.readFile(
  path.join(__dirname, "./data.csv"),
  { encoding: "utf8", flag: "r" },
  (err, data) => {
    if (err) {
      throw err;
    }
    // console.log(data);
    // console.log(typeof data);
    // 1.) splits the data into a new array,
    // 2.) iterates through the whole array and adds it to the master array if it does not equal an empty string.
    return data.split(/\n/).forEach(line => (line ? master.push(line) : ""));
    // return data.split(/\r?\n/);
    // .forEach(line => array.push(line));
    // return array;
  }
);

console.log(csv);

console.log(master);

// const parseCSV = csv => {
//   console.log("Hello World, here is my data: ", csv);
// };

// parseCSV(csv);
