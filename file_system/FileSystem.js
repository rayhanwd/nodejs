const http = require('http');
const fs = require('fs');
const path = require('path');
var url = require('url');

const port = process.env.PORT || 3000

function reName(){
  fs.rename('./a.pdf', 'English_Book.pdf', err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('success!')
  })
}

fs.open('./name/abdullah.txt', (err, fd) => {
  if (err) {
    console.error(err)
    return
  }
})

try {
  const fd = fs.openSync('./English_Book.pdf', 'r');
  console.log(fd)
} catch (err) {
  console.error(err)
}

try {
  const stats = fs.statSync('./English_Book.pdf');
  console.log(stats)
} catch (err) {
  console.error(err)
}

const notes = './createHttp.js'

console.log(path.basename(notes, path.extname(notes)) //notes
)
const join = path.join('/', 'users', name, 'notes.txt') ;

const createdFile = (name) => {

  for (let i = 0; i < name.length; i++) {
    const element = name[i];
    fs.writeFile(`./name/${element}.txt`, `This is the ${element} file`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  }
}

// createdFile(["abul","kabul","jobul"]);

const updatedTextByName = (value, text) => {
  fs.appendFile(`./name/${value}.txt`, text, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
}

// updatedTextByName("rayhan", "rayhan's text is updated now!");

const removedFile = (fname) => {
  fs.unlink(`./name/${fname}.txt`, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}
// removedFile("abul");

// const EventEmitter = require('events')
// const door = new EventEmitter()
// door.addListener("open", () => {
//   console.log("reloading!")
// })

// console.log(door.eventNames())

// event handler

var rs = fs.createReadStream('./name/abdullah.txt');
rs.on('open', function () {
  console.log('The file is open');
})



//read frontend api url

var adr = `http://localhost:8080/api/key=${`g5$%^&*(UHGG4ytfgy5$%^)`}`;
var q = url.parse(adr, true);

console.log(q);

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})


