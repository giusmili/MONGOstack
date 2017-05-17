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
//route principale
router.get('/',(req, res, next)=>{
    //comportement de la router
    res.render('pages/index');

});
router.get('/add-recep',(req, res, next)=>{
    //comportement de la router
    // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {

                // Récupération des documents de la collection 'list' => find
                db.collection('myIngredients').find().toArray((err, db) => {

                    // Tester la commande MongoDb
                    if(err){ res.send(err) }

                    else{ 
                        // Envoyer les données au format json
                     
                        res.render('pages/recep',{data:db});
                        
                    }
                })
            }

            // Fermer la connexion à la base MongoDb
            db.close();
        })

});


/*
Configuration de la route pour afficher la liste des tâches => get
*/
    router.get('/ingredients', (req, res, next) => {

        // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {

                // Récupération des documents de la collection 'list' => find
                db.collection('myIngredients').find().toArray((err, db) => {

                    // Tester la commande MongoDb
                    if(err){ res.send(err) }

                    else{ 
                        // Envoyer les données au format json
                     
                        res.render('pages/ingredients',{data:db});
                        
                    }
                })
            }

            // Fermer la connexion à la base MongoDb
            db.close();
        })
});

//exporter
module.exports=router;
