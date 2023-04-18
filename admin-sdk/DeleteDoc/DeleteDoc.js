import {db} from '../config/firebase';

const deleteUser = async (id) => {
    try{
        await db.collection("users").doc(id).delete();
    }catch (error){
        console.log(error);
    }
}

await deleteUser("XXXXXXXXXXXX");



