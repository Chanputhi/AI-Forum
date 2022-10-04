// Name: Chanputhi TITH
// Deakin SIT313

import React, { useState, useRef } from "react";
import { firestoreDB , storage} from './utils/firebase';
import { ref, uploadBytesResumable ,getDownloadURL} from "firebase/storage";
import { collection, addDoc} from "firebase/firestore";
import './Article.css';
import {v4} from 'uuid';

const Article =() => {

    const [imageUpload, setImageUpload] = useState(null);
    // const [previewUrl, setPreviewUrl] = useState(null);
    // const imagePickerRef = useRef();

    const [article, setArticle] = useState({
        title: '',
        abstract: '',
        text: '',
        tag: '',
        author: '',
        // image: null,
    });

    const {title, abstract, text, tag, author} = article;

    const handleImageUpload = (e) => {

        e.preventDefault();
        const file = e.target[0]?.files[0];

        if (!file) return;
        const imageStorageRef = ref(storage, `images/${file.name + v4()}`);
        const uploadFile = uploadBytesResumable(imageStorageRef, file);

        uploadFile.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            console.log(error);
            alert("error:", error.message);
        }, () => {
            getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setImageUpload(downloadURL);
            });
        });
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const articleCollectionRef = collection(firestoreDB, "articles");

            console.log(imageUpload);

            await addDoc(articleCollectionRef, {
                "title" : title,
                "abstract" : abstract,
                "text" : text,
                "tag": tag,
                "author" : author,
                "image" : imageUpload,
                // createdAt : createdAt,
            });


            // await createArticleDocFromPost(article);
            alert('Article posted successfully!');
        }
        catch (error) {
            console.log('Error in submitting article', error.message);
            alert(error.message);
        }
    }


    return (
        <div className='articleDiv'>

            <div className='titlePost'>
                <p>Title</p>
                <input type='text' 
                value= {article.title}
                onChange = { (e) => setArticle((preValue)=>({...preValue, "title" : e.target.value}) ) }
                placeholder='Enter a descriptive title' />
            </div>

            {/* Image */}
            <form className='imagePost' onSubmit = {handleImageUpload}>
                <p>Add an Image:</p>
                <input type='file' accept = ".jpg, .png, .jpeg" />
            
                {/* <div className="imagePreview" >
                    {previewUrl && <img src={previewUrl} alt="Preview"/>}
                    {
                        !previewUrl && <p>Please pick an image.</p>
                    }
                </div> */}

                {/* <button type="button" onClick={handleImageUpload} >Upload</button> */}
                <button type="submit" >Upload</button>

            </form>

            <div className='abstractPost'>
                <p>Abstract</p>
                <textarea rows = "5" cols = "80" name = "description" 
                value= {article.abstract}
                onChange = { (e) => setArticle((preValue)=>({...preValue, "abstract" : e.target.value}) ) }
                placeholder='Enter a 1-paragraph abstract'>
                </textarea>
            </div>

            <div className='articleTextPost'>
                <p>Article Text</p>
                <textarea rows = "10" cols = "80" name = "description" 
                value= {article.text}
                onChange = { (e) => setArticle((preValue)=>({...preValue, "text" : e.target.value}) ) }
                placeholder='Write your article'>
                </textarea>
            </div>

            <div className='tagPost'>
                <p>Tags</p>
                <input type='text' 
                value= {article.tag}
                onChange = { (e) => setArticle((preValue)=>({...preValue, "tag" : e.target.value}) ) }
                placeholder='Please add up to 3 tags to describe what your article is about e.g. robotic ' />
            </div>

            <div className='authorPost'>
                <p>Author</p>
                <input type='text' 
                value= {article.author}
                onChange = { (e) => setArticle((preValue)=>({...preValue, "author" : e.target.value}) ) }
                placeholder='Please write your name' />
            </div>

            <br />

            <button type="submit" className='postButton' onClick={handleSubmit}>
                 Post
            </button>
        </div>
    );
}

export default Article;