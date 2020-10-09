const admin = require("firebase-admin");
const serviceAccount = require("./pixel-68b4f-d4143a42de3d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "pixel-68b4f.appspot.com",
  databaseURL: "https://pixel-68b4f.firebaseio.com",
});
const db = admin.firestore();

module.exports = { admin, db };
