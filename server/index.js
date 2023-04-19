const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const db = require('./config/db');
const routes = require('./routes/routes')
const route = require('./routes/userRoutes')
const bodyParser = require('body-parser');
const cors = require('cors')
const errMiddleware = require('./middleware/error');

dotenv.config({ path: path.join(__dirname, "config.env") })

//middleware
// app.use(cors());
// app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));


app.use('/users',route)
app.use('/api', routes);
app.use(errMiddleware)

const server = app.listen(process.env.port, () => {
    db();
    console.log(`App is running on the port ${process.env.port} and ${process.env.node_env}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Err : ${err.msg}`);
    console.log("Shutting down the server to unhandled rejection");
    server.close(() => {
        process.exit(1);
    })
})

process.on('uncaughtException', (err) => {
    console.log(`Err : ${err.msg}`);
    console.log("Shutting down the server to uncaught Exception error");
    server.close(() => {
        process.exit(1);
    })
})
