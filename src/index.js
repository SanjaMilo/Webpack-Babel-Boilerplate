import './components/style.css';
import $ from 'jquery';
import header from './components/Header';

header();

let getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};

getPosts().then(posts => {
    console.log(posts);
    posts.forEach(post => {
        let postTxt = document.createElement('div');
        postTxt.innerText = post.body;
        document.body.appendChild(postTxt);
    });
    
});
