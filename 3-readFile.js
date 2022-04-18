const fs = require('fs')

const callbackError = (err, data) => {
  if (err) console.log(err)
  else {
    console.log('File read successfully\n')
    console.log(`With the following contents: ${data}`)
  }
}

fs.readFile('test.html', callbackError)
