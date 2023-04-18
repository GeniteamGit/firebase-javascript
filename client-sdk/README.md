#### Hi there 👋

This is the example snippets of firebase client sdk for basic database operations in firestore database.

### Initialize a firestore project 🔥

### Add Data to firebase doc 🔥

### Edit Data to firebase doc 🔥

### Delete Data to firebase doc 🔥

### Get Data from firebase doc 🔥

### Upload file to Firebase Storage 🔥

#### Tech Stack

<ul>
    <li>Firebase</li>
    <li>Javascript</li>
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
    <li>Now click on the Gear Icon ⚙️and then ➡️ <b>Project Setting</b> </li>
    <li>Scroll Down ⬇️ and the Click on <b>Add App</b> and select <b>Web App</b> and copy the code snippet like given below</li>
    <li>
        <u>imports for the config file 👇<br></u>
        <code>
            import {initializeApp } from "firebase/app"; <br>
            import {getFirestore,serverTimestamp} from "firebase/firestore"; <br>
            import { getStorage, ref } from "firebase/storage";
        </code>
        <u>config example of the firebase project 👇<br></u>
        <code>
              const firebaseConfig = { <br>
               &emsp;     apiKey: "XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXX",<br>
               &emsp;     authDomain: "XXXXXXXXXXXX.firebaseapp.com",<br>
               &emsp;     projectId: "XXXXXXXXXXXX",<br>
               &emsp;     storageBucket: "XXXXXXXXXXXX.appspot.com",<br>
               &emsp;     messagingSenderId: "XXXXXXXXXXXX",<br>
               &emsp;     appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",<br>
               &emsp;     measurementId: "X-XXXXXXXXXXX"<br>
            }
        </code>
</li>

<li>
    copy this to your config folder 
<code>

const app = initializeApp(firebaseConfig); <br>

export const firestore = getFirestore(app); <br>

export const storage = getStorage(app);

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
        import {addDoc, collection} from "firebase/firestore";<br>
        &nbsp;import {firestore} from '../config/firebaseConfig';
    </code>
</li>

<li>
    Now you can use the addDoc function to add data to the firestore <br>
    <code>
        const addUser = async () => { <br>
        const docRef = await addDoc(collection(firestore, "users"), {<br>
        &emsp; first: "Ada",
        <br> &emsp; last: "Lovelace",
        <br> &emsp; born: 1815
        <br>
        });<br>
        console.log("Document written with ID: ", docRef.id); <br>
        console.log("Document written with Data: ", docRef.data()); <br>
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
        import {updateDoc, doc} from "firebase/firestore";<br>
        &nbsp;import {firestore} from '../config/firebaseConfig';
    </code>
</li>
<li>
    Now we can use the updateDoc function to update the data in the firestore <br>
    <code>
        const updateUser = async (id,data) => { <br>
        try{<br>
            const   docRef = doc(firestore, "users", id);<br>
            //     check doc exists <br>
            const docSnap = await getDoc(docRef); <br>
            if (docSnap.exists()) { <br>
            //     update doc <br>
            await updateDoc(docRef, data);  <br>
            } else { <br>
            // doc.data() will be undefined in this case <br>
            console.log("No such document!"); <br>
            } <br>
            }   <br>
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
        import {deleteDoc, doc} from "firebase/firestore";<br>
        &nbsp;import {firestore} from '../config/firebaseConfig';
    </code>
</li>
<li>
    Now we can use the deleteDoc function to delete the data in the firestore <br>
    <code>
        const deleteUser = async (id) => { <br>
        try{ <br>
            await deleteDoc(doc(firestore, "users", id)); <br>
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
        import {getDoc, doc} from "firebase/firestore";<br>
        &nbsp;import {firestore} from '../config/firebaseConfig';
    </code>
</li>
<li>
    Now we can use the getDoc function to get the data in the firestore <br>
    <code>
        const getUser = async (id) => { <br>
        try{ <br>
            const docRef = doc(firestore, "users", id); <br>
            const docSnap = await getDoc(docRef); <br>
            if (docSnap.exists()) { <br>
            console.log("Document data:", docSnap.data()); <br>
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
    Now All you need to do is call the get function
    <code>
        await getUser(id);
    </code>
</li>
</ul>

### Upload file to Firebase Storage 🔥

<ul>
<li>
Now You have to do is import the firestore from the config folder
in your desired file and use it to add data to the firestore <br>
    <code>
        import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";<br>
        &nbsp;import {firestore} from '../config/firebaseConfig';
    </code>
</li>
<li>
    Now we can use the uploadBytesResumable function to upload the file in the firestore <br>
    <code>
        const uploadFile = async (file) => { <br>
        try{ <br>
            const storage = getStorage(); <br>
            const storageRef = ref(storage, file.name); <br>
            const uploadTask = uploadBytesResumable(storageRef, file); <br>
            uploadTask.on('state_changed', <br>
            (snapshot) => { <br>
            // Observe state change events such as progress, pause, and resume <br>
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded <br>
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; <br>
            console.log('Upload is ' + progress + '% done'); <br>
            switch (snapshot.state) { <br>
            case 'paused': <br>
            console.log('Upload is paused'); <br>
            break; <br>
            case 'running': <br>
            console.log('Upload is running'); <br>
            break; <br>
            } <br>
            }, <br>
            (error) => { <br>
            // Handle unsuccessful uploads <br>
            }, <br>
            () => { <br>
            // Handle successful uploads on complete <br>
            // For instance, get the download URL: https://firebasestorage.googleapis.com/... <br>
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { <br>
            console.log('File available at', downloadURL); <br>
            }); <br>
            } <br>
            ); <br>
        }catch (error){ <br>
            console.log(error); <br>
            } <br>
        } <br>
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

