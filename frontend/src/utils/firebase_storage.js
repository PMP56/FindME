import "firebase/storage";
import { Storage } from "./firebase";

const bucket_url = "gs://findme-56.appspot.com";

export const uploadPicture = async (username, file) => {
    //console.log(username, file);
    const uploadTask = await Storage.ref(`${username}/profilePic.jpg`).put(file)
        .then((snapshot) => snapshot.ref.getDownloadURL());
    return uploadTask;

}