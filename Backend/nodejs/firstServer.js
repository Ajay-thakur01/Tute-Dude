// Creating a first node server

// import http protocol
const http = require('http');

const app = http.createServer((req, res) =>{
    console.log(req);
}
)

const port = 4000;
app.listen(port, ()=>{
    console.log('Server is listening on port http://http://localhost:4000/');
});