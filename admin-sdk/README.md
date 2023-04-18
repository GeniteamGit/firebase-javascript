#### Hi there 👋

This is the example snippets of firebase client sdk for basic database operations in firestore database.

### Initialize a firestore project 🔥

### Add Data to firebase doc 🔥

### Edit Data to firebase doc 🔥

### Delete Data to firebase doc 🔥

### Get Data from firebase doc 🔥

### Get file from Firebase Storage 🔥

#### Tech Stack

<ul>
    <li>Firebase Admin SDK</li>
    <li>Node JS</li>
</ul>

#### Prerequisites

<ul>
    <li>Basic Knowledge of Javascript</li>
    <li>Basic Knowledge of Firebase</li>
</ul>

#### How to Add Data to firebase doc ??

### Initialize a firestore project 🔥

<ul>
    <li>go to <a href="https://console.firebase.google.com">console.firebase.google.com</a></li>
    <li>Create a new Firebase Console Project </li>
    <li>Select that project by click on the Project card</li>
    <li>Now click on the Gear Icon ⚙️and then ➡️ <b>Service Account</b> </li>
    <li>Scroll Down ⬇️ and the Click on <b>Generate new private key</b> and then save that file to the root directory
    of your project and rename it to <b>serviceAccountKey.json</b>
</li>
    <li>
        create firebase config directory and then create a file named <b>firebaseConfig.js</b> and then copy the code snippet like given below
    </li>
    <li>
        <u>imports for the config file 👇<br></u>
        <code>
            const admin = require("firebase-admin"); <br>
            const serviceAccount = require("./serviceAccountKey.json"); <br>
            const storage_bucket = "XXXXXXXX.appspot.com";
        </code>
    </li>

<li>
copy this to your config folder 
    <code>
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            storageBucket: storage_bucket,
        }); <br>
        export const db = admin.firestore(); <br>
        export const bucket = admin.storage().bucket();
    </code>
</li>
<li>
    Now you have to go to firebase dashboard and follow the given steps.
    <ol>
        <li>Click on <b>build</b> on left 👈 sidebar </li>
        <li>Select <b>Firestore Database</b></li>
        <li>Click on 👉 <b>Create Database</b></li>
        <li>Now Select <b>Start in Production</b> or <b>Start in Test Mode</b> and click on <b>Next</b></li>
        <li>Now Select <b>us-central</b> and click on <b>Enable</b></li>
    </ol>

</li>
</ul>

### Add Data to firebase doc 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
        import {db} from '../config/firebase'; <br>
    </code>
</li>

<li>
    Now you can use the addDoc function to add data to the firestore <br>
    <code>
        const addUser = async () => { <br>
        try { <br>
        const docRef = await db.collection("users").add({ <br>
            first: "Ada", last: "Lovelace", born: 1815 <br>
        }); <br>
        console.log("Document written with ID: ", docRef.id); <br>
        console.log("Document written with Data: ", docRef.data()); <br>
    } catch (err) { <br>
        console.log("some kind of server error", err) <br>
    } <br>
        }
    </code>
</li>

<li>
    Now All you need to do is call this asynconus function using the await keyword.
    <code>
        await addUser();
    </code>

</li>
</ul>

### Edit Data to firebase doc 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
       import {db} from '../config/firebase';
    </code>
</li>
<li>
    Now we can use the updateDoc function to update the data in the firestore <br>
    <code>
        const updateUser = async (id,data) => { <br>
        try{<br>
            const docRef = db.collection("users").doc(id); <br>
            // check doc exists <br>
            const docSnap = await docRef.get(); <br>
            if (docSnap.exists()) { <br>
                // update doc <br>
                // if you want to merge the existing data with new data then use merge: true <br>
                await docRef.set(data, { merge: true }); <br>
                // else use this line to overwrite the existing data <br>
                // await docRef.set(data); <br>
            } else { <br>
                // doc.data() will be undefined in this case <br>
                console.log("No such document!"); <br>
            } <br>
        }catch (error){ <br>
            console.log(error); <br>
            } <br>
        } <br>
    </code>
</li>

<li>
    Now All you need to do is call this asynconus function using the await keyword.
    <code>
        await updateUser(id,data);
    </code>
</li>
</ul>
### Delete Data to firebase doc 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
        import {db} from '../config/firebase';
    </code>
</li>
<li>
    Now we can use the deleteDoc function to delete the data in the firestore <br>
    <code>
        const deleteUser = async (id) => { <br>
        try{ <br>
            await db.collection("users").doc(id).delete(); <br>
        }catch (error){ <br>
            console.log(error); <br>
            } <br>
        } <br>
    </code>
</li>
<li>
    Now All you need to do is call the delete function
    <code>
        await deleteUser(id);
    </code>
</li>
</ul>

### Get Data from firebase doc 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
        import {db} from '../config/firebase';
    </code>
</li>
<li>
    Now we can use the getDoc function to get the data in the firestore <br>
    <code>
        const getUser = async (id) => { <br>
        try{ <br>
            const querySnapshot = await db.collection("users").get(); <br>
            querySnapshot.forEach((doc) => { <br>
            // doc.data() is never undefined for query doc snapshots <br>
            console.log(doc.id, " => ", doc.data()); <br>
        });
        }catch (error){ <br>
            console.log(error); <br>
            } <br>
        } <br>
    </code>
</li>
<li>
    Now All you need to do is call the get function
    <code>
        await getUser(id);
    </code>
</li>
</ul>

### Get file from Firebase Storage 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
        import {bucket} from '../config/firebase';
    </code>
</li>
<li>
    Now we can use the uploadBytesResumable function to upload the file in the firestore <br>
    <code>
        const getFile = async (fileName) => {
        try {
            const file = bucket.file(`path/to/${fileName}`);
            let fileURL = await file.getSignedUrl({
                action: "read",
                expires: "03-09-2491",
            });
        console.log("file url ", fileURL);
    } catch (error) {
        console.log(error);
    }
}
    </code>
</li>
<li>
    Now All you need to do is call the upload function
    <code>
        await uploadFile(file);
    </code>
</li>
</ul>

### Thank You

