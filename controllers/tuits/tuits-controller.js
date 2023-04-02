import posts from './tuits.js';
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date().getTime() + '');
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.time = "Now";
    newTuit.liked = false;
    newTuit.disliked = false;
    tuits.push(newTuit);
    res.json(newTuit);
};

const findTuits = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const tuitId = req.params['tid'];
    const newTuit = req.body;
    const tuitIndex = tuits.findIndex(t => t._id === tuitId);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...newTuit};
    res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const tuitId = req.params['tid'];
    tuits = tuits.filter(t => t._id !== tuitId);
    res.sendStatus(200);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};