const { firebase } = require('../configFirebase');

const controller = {};
const db = firebase.firestore();


controller.save = (req, res) => {
    console.log(req.body);

    db.collection('date').add({
        name: req.body.titulo,
        descripcion: req.body.descripcion
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        
    });

    res.render('../views/layouts/admin/admin.hbs')

}

controller.getDate = (req, res) => {
    let date = db.collection('date');
    let alldate = date.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });


    res.render('../views/layouts/admin/admin.hbs')

}




module.exports = controller;