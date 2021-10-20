import React from 'react'
import {AiFillSafetyCertificate} from 'react-icons/ai';
import {FaHandsHelping} from 'react-icons/fa';
import {RiSurgicalMaskFill} from 'react-icons/ri';
import {FaLeaf} from 'react-icons/fa';
import './about.css';


export const About = () => {
    return (
        <> 
           <div class="container">
               <div id="abt" class="shadow-lg p-3 mb-5 bg-white rounded">
                   <h4>Why Toursopher?</h4>
                <div class="row">
                    <div class="col-3">
                    <AiFillSafetyCertificate size="50px" color="green" className="abtLogo"/>
                    <h5>Trusted Advisor</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut. Eveniet nemo fugit quod vero repellat ducimus voluptas molestias quae adipisci harum, est tempora libero magni possimus veniam laborum placeat.</p>
                    </div>
                    <div class="col-3">
                    <FaHandsHelping size="50px" color="green" className="abtLogo"/>
                    <h5>Responsive</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut. Eveniet nemo fugit quod vero repellat ducimus voluptas molestias quae adipisci harum, est tempora libero magni possimus veniam laborum placeat.</p>
                    </div>
                    <div class="col-3">
                    <RiSurgicalMaskFill size="50px" color="green" className="abtLogo"/>
                    <h5>Safe and Hygenic</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut. Eveniet nemo fugit quod vero repellat ducimus voluptas molestias quae adipisci harum, est tempora libero magni possimus veniam laborum placeat.</p>
                    </div>
                    <div class="col-3">
                    <FaLeaf size="50px" color="green" className="abtLogo"/>
                    <h5>Memorable Experience</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut. Eveniet nemo fugit quod vero repellat ducimus voluptas molestias quae adipisci harum, est tempora libero magni possimus veniam laborum placeat.</p>
                    </div>
                </div>
                </div>
            </div> 
        </>
    )
}
