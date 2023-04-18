import {doc,collection,getDocs,getDoc} from 'firebase/firestore';
import {firestore} from '../config/firebase';

const getUsers = async () => {
    let users = [];
    try{
        // to get multiple users
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

        // to get single user
        const id = "XXXXXXXXXXXX";
        const querySnapshotSingle = await getDocs(collection(firestore, "users",id));
        const data = querySnapshotSingle.data();
        console.log("user id",querySnapshotSingle.id);
        console.log("user data",querySnapshotSingle.data());


    }catch (error){
        console.log(error);
    }
}


await getUsers();