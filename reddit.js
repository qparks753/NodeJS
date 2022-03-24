const path = require('path');
const fs = require('fs');
const request = require('request-promise');
const { title } = require('process');

const redditPath = path.join(__dirname,"/popular-articles.json");
// console.log(redditPath);

request('https://reddit.com/r/popular.json',(err,res,body)=>{
if(err) console.log(err);

JSON.parse(body).data.children.forEach(element => { 
     {fs.appendFileSync(redditPath, element.data.title + '\n'),
     fs.appendFileSync(redditPath,element.data.url + '\n'),
     fs.appendFileSync(redditPath, element.data.author+ '\n');   
      };
});

});



