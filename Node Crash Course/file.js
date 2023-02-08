const { Console } = require('console')
const fs = require('fs')

// READING FILES

// fs.readFile('./docs/blog12.txt' , (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("last line")

// WRITING FILES

// fs.writeFile('./docs/blog1.txt', "hello, world", () => {
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', "hello, again", () => {
//     console.log('file was written')
// })

// DIRECTORIES
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created')
    })
} else {
        fs.rmdir('./assets', (err) => {
            if (err) {
                console.log(err)
            }
            console.log('deleted')
        })
    }

// DELETING FILES
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', () => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    } )
}


