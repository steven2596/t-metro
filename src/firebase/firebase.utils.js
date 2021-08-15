import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD4vhLPGDiP3cPPwfd5UnQInz3M-Ket-ZA",
    authDomain: "t-metro.firebaseapp.com",
    projectId: "t-metro",
    storageBucket: "t-metro.appspot.com",
    messagingSenderId: "385361822684",
    appId: "1:385361822684:web:df7ffedc3038a4990a8519",
    measurementId: "G-GKJS51CQLX"
};

//this function takes userAuth as parameter and return userRef which is documentRef
//If the user document is already in users, it will just return userRef
//If not, it will create a new user profile document and return userRef
export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    //Checks whether user document already exists or not
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createAt,
                cartItems: [],
                ...additionalData
            })
        } catch (error) {
            console.log('Error occurs while creating user account', error.message);
        }
    }

    return userRef;
}

//This function take collectionSnapshot as a parameter. collections = collection snapshot
//collections.docs gives us documents of that collection
// doc.data() gives actual data inside that doc
// We will add other infos like routeName, id
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        console.log(title, items);
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    //Eg. hats: {id,item,title,route}
    //Initial object is empty object
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})

};

//Add items to the store in firebase
//parameters: category name and items in the category. Eg. addCollectionsToData('albums', albums.items)
export const addCollectionsToDatabase = async (items) => {
    const ref = firestore.doc(`store/merch`);

    try {
        ref.set({
            items: items
        })
    } catch (error) {
        console.log(error)
    }


}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setup for google sign in
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;