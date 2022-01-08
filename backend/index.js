const colors = require('colors');
const express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const path = require('path');


//Definicion de puerto
const PORT = process.env.PORT || 65655;


//Cors
const cors = require('cors');

//Socket.io

const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const server = createServer(app);
const io = new Server(server, {  })
// require('./Controller/Socket')(io);


/*
const app = express();
const { createServer } = require("http");
const server = createServer(app);
const io = require("socket.io")(server);
require('./Controller/Socket')(io);

*/

//Db
const sequelize = require("./Model/Db");
const Models = require('./Model/CreateModels');

const {database} = require('./key');




//Passport
const passport = require('passport')
const session = require('express-session')
const MySQLStore = require('express-mysql-session');
// const Account = require('./Model/Initialization/Account');

//Rutas
const AccountRoutes = require('./Routes/AccountRoutes');
// const Logger = require('./Routes/LoggerRoutes');
// const Post = require('./Routes/PostRoutes');
// const Card = require('./Routes/CardsRoutes');
// const Shop = require('./Routes/ShopRoutes');
// const Search = require('./Routes/SearchRoutes');
// const AuthRoutes = require('./Routes/AuthRoutes');
// const Member = require('./Routes/MemberRoutes');
// const Notify = require('./Routes/NotifyRoutes');
// const Exchange = require('./Routes/ExchangeRoutes');
// const Contact = require('./Routes/ContactRoutes');

//inicializaciones
require('./Lib/Passport');


//middleware
const corsOptions = {origin: "http://localhost:4401"}
app.use(cors({
    origin: "http://localhost:4401",
    credentials: true
}));
// const corsOptions = {origin: "https://comercio-electronico.herokuapp.com/api"}
// app.use(cors({
//     origin: "https://comercio-electronico.herokuapp.com/api",
//     credentials: true
// }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({
    secret: 'fruitshop',
    resave: false,
    saveUninitialized: false,
    // cookie:{
    //     maxAge:36000000,
    //     httpOnly:true,
    //     secure:false
    // },
   store: new MySQLStore(database)
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());
app.use(passport.session());


//app.use(express.static('View'));



//Agregar a app
app.use("/api",AccountRoutes);
// app.use("/api",Logger);
// app.use("/api",Post);
// app.use("/api",Card);
// app.use("/api",Shop);
// app.use("/api",Search);
// app.use("/api",AuthRoutes);
// app.use("/api",Member);
// app.use("/api",Notify);
// //p.use(Exchange);
// app.use("/api",Contact);

app.use(express.static(__dirname+'/frontend/dist/View'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/frontend/dist/View/index.html'));
});


server.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`.yellow);

    //Conexion a la base de datos
//    sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(
        sequelize.sync({force: false}).then(() => {
        console.log("Conexion a DB establecida".green);
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db".red,error);
    })
})
