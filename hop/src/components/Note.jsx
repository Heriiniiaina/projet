import React from "react";
import {Button, IconButton} from '@mui/material'
import { FaPencilAlt } from "react-icons/fa";
export function Note(){
    return(
        <div className="note" data-aos="zoom-left" data-aos-delay="1200" data-aos-duration="1000">
            <div className="tete">
                <h3>Note</h3>
                <a href="">Voir tout</a>
            </div>

            <div className="modifier">
                <IconButton aria-label="delete" size="large" sx={{color:"#010f22"}} href="#">
                <FaPencilAlt />
                </IconButton>
            </div>
            <div className="noteEl">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni iste eligendi commodi. Asperiores aspernatur sed alias repellendus quia ducimus tempora magni explicabo? In neque harum itaque optio tenetur cum praesentium quidem? Corporis harum ipsam saepe sequi perferendis non adipisci sapiente minus molestias quod eveniet dignissimos laborum deleniti, veniam, possimus quam. Obcaecati cupiditate odit laboriosam! Labore omnis deleniti itaque reiciendis delectus iusto, harum impedit eum! Dolore officiis quibusdam minus porro id inventore deleniti debitis maxime reiciendis, itaque adipisci reprehenderit, natus cumque harum quo impedit eveniet atque, iure laudantium vitae omnis ullam ipsum. Rem, quis saepe maiores quisquam eius quasi recusandae. 
            </div>
            <div className="tete">
                <h5>Note 5</h5>
                <p >20 mars 2020</p>
            </div>
            <div className="newConsult">
            <Button variant="contained" href="#" sx={{bgcolor:"#010f22", padding:"10px 20px", fontWeight:'bolder', margin:'10px 0', textAlign:"center"}}> Nouvelle Consultation</Button>
            </div>
            
        </div>
    )
}