//inporter les dépendances
let express=require('express');
//configurer le routeur
let router=express.Router();
//définir les routes
//configurer mongoDB
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/reset';



/*
Configuration de la route pour afficher la liste des tâches => get
*/
    router.get('/', (req, res, next) => {

        // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {

                // Récupération des documents de la collection 'list' => find
                db.collection('myRecep').find().toArray((err, db) => {

                    // Tester la commande MongoDb
                    if(err){ res.send(err) }

                    else{ 
                        // Envoyer les données au format json
                        res.json(db)
                    }
                })
            }

            // Fermer la connexion à la base MongoDb
            db.close();
        })
});
//ingredients
/*
Configuration de la route pour afficher la liste des tâches => get
ajouter un ingredient
*/
    router.post('/ingredients', (req, res, next) => {
        //récupérer les données de la requete
        let newIngredient=req.body;
                    // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {
                db.collection('myIngredients').insert(newIngredient,(err,data)=>{
                    if(err){ 
                        res.send(err) 
                    } 
                    else{
                        //envoi dans la vu après validation
                        res.send(true);
                        db.close();
                    }

                })
                

                
                }

        })
});
 router.post('/recep', (req, res, next) => {
        //récupérer les données de la requete
        let newRecep=req.body;
                    // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {
                db.collection('myRecep').insert(newRecep,(err,data)=>{
                    if(err){ 
                        res.send(err) 
                    } 
                    else{
                        //envoi dans la vu après validation
                        res.send(true);
                        db.close();
                    }

                })
                

                
                }

        })
});


//exporter
module.exports=router;