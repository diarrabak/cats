// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, giveInfo) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) giveInfo(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we can use directly the callback
// breedDetailsFromFile('Bombay', result=>console.log('Return Value: ', result));

//Or define the callback function first
// const displayInfo=(info)=>{
//     console.log('Return Value: ', info);
// }

//Or 
const displayInfo=(info)=>console.log('Return Value: ', info);

breedDetailsFromFile('Bombay', displayInfo);
