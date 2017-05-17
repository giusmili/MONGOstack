//importer les dépendances
let express=require('express');
let bodyParser=require('body-parser');//analyser les requetes



//importer les fichier route
let front=require('./routes/front')
let api=require('./routes/api') 

//définir le port
let port=8080;

//creating server
let server=express();

//configurer le moteur de tamplate
server.set('view engine','ejs');

//définir le dossier static pour les fichier importées dans les view voir css
server.use(express.static('public'));
// Body Parser
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));


//définir les fichier à définir pour les routes
server.use('/',front);
server.use('/api',api);



//listener
server.listen(port, ()=>console.log('Le serveur est chargé : '+port));