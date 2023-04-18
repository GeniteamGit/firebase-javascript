import {bucket} from '../config/firebase';

const getFile = async (storyID) => {
    try {
        const file = bucket.file(`path/to/${storyID}`);
        let icon = await file.getSignedUrl({
            action: "read",
            expires: "03-09-2491",
        });
        return icon;
    } catch (error) {
        console.log(error);
    }
}

await getFile(file);


