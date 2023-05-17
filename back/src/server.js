import Express from 'express';
import Morgan from 'morgan';
import Cors from 'cors';

const App = Express();


//!Default middlerwares
App.use(Morgan("dev"));
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));
App.use(Cors({
    origin: "http://localhost:5173/",
    credentials: true,
}));


//!Rutas de procesamiento


App.listen(3000);
console.log("Server on port 3000");

