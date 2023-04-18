import {db} from '../config/firebase';

const getUsers = async () => {
    try {
        // to get multiple users
        const querySnapshot = await db.collection("users").get();
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.log(error);
    }
}


await getUsers();