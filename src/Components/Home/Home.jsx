import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogHome } from "../../Blog/BlogHome";
import International from "../../international/International";
import { Header } from "../../LayOut/Header/Header";




import Summer from "../../Summer/Summer";
import Winter from "../../winter/Winter";

import { Contact } from "../Contact/Contact";
import "./Home.css";
import { Footer } from "../../footer/Footer";
import Search from "../../Search/Search"
import { About } from "../About/About";


export const Home = () => {
  return (
    <>
      <body id="home">
        <div id="top">
          <Header></Header>

          <Search/>
        </div>
        <div id="covid">
          <h6>
            Book When Daily Covid-19 Case Is Less Than 10,000 In Our Country 
          </h6>
          <h6>
            Check Covid-19 Case Here
            <a href="https://www.covid19india.org/">
              <button id="covidbtn"> Click Here </button>
            </a>
          </h6>
        </div>
        

        <div class="container">
          <div class="row" >
            <div class="col-4"><Summer/></div>
            <div class="col-4"><Winter/></div>
            <div class="col-4"><International/></div>
          </div>
        </div>
        
        <BlogHome/>

        <About/>

        <Contact/>

        
        
      </body>
      <Footer/>
    </>
  );
};
