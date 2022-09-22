const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input placeholder="email" />
                <input placeholder="password" />
                <input placeholder="password confirmation" />
                <button>Sign Up</button>
            </form>
        </div>
    `);
});


const bodyParser = (req, res, next) => {

    if (req.method === 'POST') {
        req.on('data', data => {
            const parsed = data.toString('utf8').split('&');
            const formData = {};
            for (let pair of parsed) {
                const [key, value] = pair.split('=');
                formData[key] = value; 
            }
            req.body = formData;
            next();
        }); 
    } else {
            next();
        }
    };



app.post('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
    res.send('Account Created!!!');
});








app.listen(3000, () => {
    console.log('Listening');
});