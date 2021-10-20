import React,{useState} from 'react';
import { Container,DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PlaceData from "../json/tour.json";
import './Search.css';
import Dropdown from '@restart/ui/esm/Dropdown';


export default function Search() {
    
    
    return (
        <>
            <Container >
                
                <DropdownButton id="dropdown-button" title="Select where you want to go...">
                <div id="dropdownmenu" >
                  {PlaceData.Places.map((PlaceData) => (
                  <Dropdown.Item  id="options" as={Link} to={`/catagory/${PlaceData.id}`} key={PlaceData.id}>{PlaceData.p_name}</Dropdown.Item>
                  ))}
                  </div>
                </DropdownButton>
                
            </Container>
        </>
    )
}


