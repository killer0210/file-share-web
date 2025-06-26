const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://file-share-3c1a8-default-rtdb.firebaseio.com"
});

const db = admin.database();
module.exports = db;
