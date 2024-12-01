const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json()); // parsing JSON in request body

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API REST - Anton ADAM');
});

app.listen(port, () => {
  console.log(`Le serveur est sur: http://localhost:${port}`);
});

const utilisateurs = [
    { id: 1, firstName: 'Test0', lastName: 'Test1', role: 'admin' },
    { id: 2, firstName: 'Test2', lastName: 'Test3', role: 'user' },
    { id: 3, firstName: 'Test4', lastName: 'Test5', role: 'moderator' }
];


// GET all utilisateurs
app.get('/utilisateurs', (req, res) => {
    res.json(utilisateurs);
});

// GET utilisateur by id
app.get('/utilisateurs/:id', (req, res) => {
    const utilisateur = utilisateurs.find(u => u.id === parseInt(req.params.id));
    if (!utilisateur) return res.status(404).send('Utilisateur non trouvé');
    res.json(utilisateur);
});

// POST create utilisateur
app.post('/utilisateurs', (req, res) => {
    const utilisateur = {
        id: utilisateurs.length + 1,
        prénom: req.body.firstName,
        nom: req.body.lastName,
        role: req.body.role
    };
    utilisateurs.push(utilisateur);
    res.status(201).send(utilisateur);
    res.send("Utilisateur ajouté");
});

// PUT update utilisateur
app.put('/utilisateurs/:id', (req, res) => {
    const utilisateurIndex = utilisateurs.findIndex(u => u.id === parseInt(req.params.id));
    if (!utilisateurIndex) return res.status(404).send('Utilisateur non trouvé');

    const utilisateur = {   // sert à mettre à jour les données de l'utilisateur ici
        id: parseInt(req.params.id),
        prénom: req.body.firstName || utilisateurs[utilisateurIndex].firstName,
        nom: req.body.lastName || utilisateurs[utilisateurIndex].lastName,
        role: req.body.role || utilisateurs[utilisateurIndex].role
    };

    utilisateurs[utilisateurIndex] = utilisateur; // sert à update les utilisateurs dans la liste
    res.send(utilisateur);
});

// DELETE utilisateur by id
app.delete('/utilisateurs/:id', (req, res) => {
    const utilisateurIndex = utilisateurs.findIndex(u => u.id === parseInt(req.params.id));
    if (!utilisateurIndex) return res.status(404).send('Utilisateur non trouvé');
    else res.status(200).send("Utilisateur supprimé");
    
    utilisateurs.splice(utilisateurIndex, 1);
    res.send(utilisateurs[utilisateurIndex]);
});