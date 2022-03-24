const path = require('path');
const fs = require('fs');

let chirps = [
{name:"JamesDale2", message:"How is everyone doing", date:"May 25"},
{name:"TaylorT", message:"Great day to go to the park", date:"May 28"},
{name:"SuperLejay", message:"I can wait to visit LA on the 5th", date:"May 28"},
{name:"Boss45", message:"Looking forward to the new game release Saturday", date:"May 29"},
{name:"Lauren2Great", message:"It's been a great month, excited about June", date:"May 30"}
];

const chirpPath = path.join(__dirname,"../chirps.json");
const chirpsArray = JSON.stringify(chirps);

fs.writeFile(chirpPath,chirpsArray + '\n', err => {
    if (err) {
      console.error(err)
      return
    }
   
});

// fs.readFile(chirpPath,{
//     encoding:"UTF-8"
// },(err, data)=>{
//     console.log(data);
// });

