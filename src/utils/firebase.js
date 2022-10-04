

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, addDoc, collection, writeBatch} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbZXUDq_oQZJk_PwgjA0Aq3KopcfTStU",
  authDomain: "deakin-ai-forum.firebaseapp.com",
  projectId: "deakin-ai-forum",
  storageBucket: "deakin-ai-forum.appspot.com",
  messagingSenderId: "850387722579",
  appId: "1:850387722579:web:e7f729178852d7a70641a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// For Question and Article to firestore

// 1200 month
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWitGooglePopup = () => signInWithPopup(auth, provider);
export const firestoreDB = getFirestore();

export const storage = getStorage();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestoreDB, collectionKey);
    const batch = writeBatch(firestoreDB);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef, obj.key.toString());
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
    // console.log('addCollectionAndDocuments Success');
}
// Add Question to firestore
export const createQuestionDocFromPost = async (question, additionalInformation={}) => {

    const {title, text, tag, author } = question;
    const createdAt = new Date();

    const questionCollectionRef = collection(firestoreDB, "questions");

    console.log("title: ", title);
    console.log("text: ", text);
    console.log("tag: ", tag);
    console.log("author: ", author);
    console.log("createdAt: ", createdAt);

    await addDoc(questionCollectionRef, {
        "title" : title,
        "text" : text,
        "tag": tag,
        "author" : author,
        createdAt : createdAt,
        // "createdAt" : createdAt.toString(),
        ...additionalInformation
    });

    return questionCollectionRef;
}

// Add Article to firestore
export const createArticleDocFromPost = async (article, additionalInformation={}) => {

    const {title, abstract, text, tag, author, image } = article;
    const createdAt = new Date();

    const articleCollectionRef = collection(firestoreDB, "articles");

    console.log("title: ", title);
    console.log("abstract: ", abstract);
    console.log("text: ", text);
    console.log("tag: ", tag);
    console.log("author: ", author);
    // console.log("image: ", image.name);
    console.log("imageUrl: ", image.imageUrl);
    console.log("image..Url: ", image.url);
    console.log("createdAt: ", createdAt);

    await addDoc(articleCollectionRef, {
        "title" : title,
        "abstract" : abstract,
        "text" : text,
        "tag": tag,
        "author" : author,
        // "image" : image.name,
        // "image" : image.imageUrl,
        "image" : image.url,
        createdAt : createdAt,
        ...additionalInformation
    });

    return articleCollectionRef;
}



// Sign In and Login for User Authentication
export const createUserDocFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth.email) return;

    const userDocRef = doc(firestoreDB, "users", userAuth.uid);
    // console.log(userDocRef);

    const userDocSnapshot = await getDoc(userDocRef);
    // console.log(userDocSnapshot);
    // console.log(userDocSnapshot.exists());

    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password)
}



