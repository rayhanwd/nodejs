const http = require('http');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();
const port = process.env.PORT || 3000;
const formData = new FormData();
formData.append('instructions', JSON.stringify({
  parts: [
    {
      html: "index.html"
    }
  ]
}))
formData.append('index.html', fs.createReadStream('./htmlFile/index.html'));

(async () => {
  try {
    const response = await axios.post('https://api.pspdfkit.com/build', formData, {
      headers: formData.getHeaders({
          'Authorization': `Bearer ${process.env.your_api_key}`
          
      }),
      responseType: "stream"
    })

    response.data.pipe(fs.createWriteStream(`./generatedPdf/result.pdf`))
  } catch (e) {
    const errorString = await streamToString(e.response.data)
    console.log(errorString)
  }
})()

function streamToString(stream) {
  const chunks = []
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)))
    stream.on("error", (err) => reject(err))
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")))
  })
}

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
  })

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  })