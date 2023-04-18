import {db} from '../config/firebase'
const addUser = async () => {
    try {
        const docRef = await db.collection("users").add({
            first: "Ada", last: "Lovelace", born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with Data: ", docRef.data());
    } catch (err) {
        console.log("some kind of server error", err)
    }

}

await addUser();
