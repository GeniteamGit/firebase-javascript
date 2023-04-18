import {doc,updateDoc,getDoc} from 'firebase/firestore';
import {firestore} from '../config/firebase';

const updateUser = async (id,data) => {
    try{
        const   docRef = doc(firestore, "users", id);
    //     check doc exists
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        //     update doc
            await updateDoc(docRef, data);
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }catch (error){
        console.log(error);
    }
}

await updateUser("XXXXXXXX",{
    name: "XYZ",
    age: 20
})