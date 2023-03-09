import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDmLjSTV21z338xebZ_siOIpGh8-kZ0I9g",
    authDomain: "zoodmall-b359e.firebaseapp.com",
    projectId: "zoodmall-b359e",
    storageBucket: "zoodmall-b359e.appspot.com",
    messagingSenderId: "831603781812",
    appId: "1:831603781812:web:3b05be6fadd9b7aeb167e1",
    measurementId: "G-J1LY3MJ9W4"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)     

export const getCollection = async<T>(collectionName: string): Promise<T | any> => {
    try{
        const citiesCol = await collection(db, collectionName);
        const citySnapshot = await getDocs(citiesCol);
        const data = (citySnapshot.docs.map(doc => doc.data()));
        return data
    } catch(e) {
        console.log('Fail data fetching ' + collectionName, e)
    }
}