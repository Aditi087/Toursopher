import React from 'react'
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../Components/Home/Home'
import { Catagory } from '../Packages/Catagory/Catagory'
import Places from '../Packages/Places/Places'
import Login from '../Components/Form/login'

import { Details } from '../Packages/Details/Details'
import SignUp from '../Components/Form/SignUp'
import { Blog } from '../Blog/Blog'

import policy from '../Components/Contact/policy'
import { Contact } from '../Components/Contact/Contact'
import { AboutPage } from '../AboutPage/AboutPage'
import {About} from '../Components/About/About'
import { ContactUs } from '../ContactUs/ContactUs'
import ScrollToTop from './ScrollToTop'



export const Routes = () => {
    return (
        <Router>
            <ScrollToTop/>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/places" component={Places}></Route>
            <Route path="/Catagory/:place_id" component={Catagory}></Route>
            <Route path="/Details/:place_id/:cat_id" component={Details}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
            <Route path="/Blog" component={Blog}></Route>
            <Route path="/AboutUs" component={AboutPage}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/contactUs" component={ContactUs}></Route>
            <Route path="/privacy policy" component={policy}></Route>
            


            <Route render={()=><h4>Page Not Found</h4>}></Route>
            
            </Switch> 
        </Router>
    )
}
