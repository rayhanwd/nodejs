
module.exports.handleReqRes = async (req, res) => {
    const method = req.method;
    const headers = req.rawHeaders;
    const path = req.url;
    
    if (method === "POST" && path==="login") {
        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const body = Buffer.concat(buffers).toString();
        const data = JSON.parse(body);

        if (data.username.length < 5) {
            res.end("username to be alphanumeric ,username to be between 6-12 letters")
        }
        if (data.password.length < 5) {
            res.end("password to allow alphabet, numbers, special characters,minimum password length is 6")
        }
     
            res.end("login successfully!")
        
    }
};