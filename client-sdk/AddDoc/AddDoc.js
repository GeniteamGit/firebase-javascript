import {firestore} from '../config/firebase'
import {addDoc, collection} from "firebase/firestore";

const addUser = async () => {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            first: "Ada", last: "Lovelace", born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with Data: ", docRef.data());
    } catch (err) {
        console.log("some kind of server error", err)
    }

}

await addUser();
