const path = require('path');
const fs = require('fs');
const request = require('request-promise');
const https = require('https');
const download = require('image-downloader')

const downloadPath = path.join(__dirname,"downloads/");
request('https://reddit.com/r/popular.json',(err,res,body)=>{
if(err) console.log(err);

JSON.parse(body).data.children.forEach(element => {
  const images = element.data.thumbnail;
  //  console.log(images);
  const paths = path.extname(images);
   let imageArr = [];
   if(paths === '.JPG' | paths === '.PNG' | paths === 'GIF'){
    return imageArr.push(element)
  }
  console.log(imageArr);

 
  const options = {
    url: images,
    dest: downloadPath,               // will be saved to /path/to/dest/image.jpg
  }
  
  download.image(options)
    .then(({ filename }) => {
      console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
    })
    .catch((err) => console.error(err))
  
   })

  
});





