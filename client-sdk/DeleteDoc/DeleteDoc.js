import {deleteDoc,doc,collection} from 'firebase/firestore';
import {firestore} from '../config/firebase';

const deleteUser = async (id) => {
    try{
        await deleteDoc(doc(firestore, "users", id));
    }catch (error){
        console.log(error);
    }
}

await deleteUser("XXXXXXXXXXXX");



