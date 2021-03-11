const express = require('express');
const cors = require('cors');
const app = express();
require('./data/database')
const dishModel = require('./Models/dish');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

app.get('/GiveMeTwo', (req, res) => {
    dishModel.find({}, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else {
            if (documents.length <= 2) {
                res.status(200).send(documents);
            }
            const answer = [];
            const randum1 = Math.floor(Math.random() * documents.length);
            answer.push(documents[randum1])
            let randum2 = 0;
            do {
                randum2 = Math.floor(Math.random() * documents.length);
                if (randum1 != randum2) {
                    answer.push(documents[randum2])
                }
            } while (randum1 == randum2);

            res.status(200).send(answer);
        };
    })
})

app.get('/', (req, res) => {
    dishModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })
})

app.post('/add', (req, res) => {
    dishModel.find({ id: req.body.id }, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else if (documents.length > 0) {
            res.status(400).send('alerdy have this id');
        } else {
            // TODO : VALIDATION
            const dish = new dishModel(req.body);
            dish.save().then(() => res.send("success")).catch((err) => console.log(err));
        }
    })

})

app.listen(3002, () => console.log("server run..."))