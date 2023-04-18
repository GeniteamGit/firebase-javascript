import {db} from '../config/firebase';

const updateUser = async (id,data) => {
    try{
        const   docRef = db.collection("users").doc(id);
    //     check doc exists
        const docSnap = await docRef.get();
        if (docSnap.exists()) {
        //     update doc

            // if you want to merge the existing data with new data then use merge: true
            await docRef.set(data, { merge: true });
            // else use this line to overwrite the existing data
            // await docRef.set(data);
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