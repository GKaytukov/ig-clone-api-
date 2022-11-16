import functions from "firebase-functions";
import  express  from "express";
import cors from "cors"; 
import { getAllPhotos, addNewPhoto } from "./src/photos.js";

const app = express();
app.use(cors());
app.use(express.json()); // any time we do anything other than .get 

// routes here...
app.get('/photos', getAllPhotos); // get all photos
app.post('/photos', addNewPhoto);  // add a new photo

export const api = functions.https.onRequest(app); 

