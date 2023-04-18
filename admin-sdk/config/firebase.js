const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const storage_bucket = "XXXXXXXX.appspot.com";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: storage_bucket,
});

export const db = admin.firestore();
export const bucket = admin.storage().bucket();
