import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './blog.css';

export const BlogHome = () => {
    return (
        <>
         <Container>
             <div>
                 <h4 id="read">Reading Corner</h4>
                 <div id="blogH">
                     <h5 id="blh">Travel Blogs Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.</h5>
                     <button id="blHB"><Link to={`/Blog/`}>Explore</Link></button>
                 </div>
             </div>
         </Container>   
        </>
    )
}
