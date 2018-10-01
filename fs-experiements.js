let fs = require('fs')

fs.readFile('example.txt', (err, data) => {
  console.log('The contents:', data.toString())
})

fs.writeFile('example.txt', 'This is totally new data', (err) => {
    if (err) {
      //deal witih it
    } else {
    console.log('Saved!')
  }
})
