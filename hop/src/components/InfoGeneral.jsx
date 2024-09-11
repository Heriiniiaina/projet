import React from "react";
import Profil from "../Static/PatientPicture.jpg"
import {Grid2 as Grid, Avatar, Badge, Chip} from '@mui/material'
import { PatientData } from "./Patientata";


export function InfoGeneral(){
    return(
        <div  className="InfoGeneral">
            <div className="basic" data-aos="flip-left" delay="100">
                <Avatar  src={Profil} sx={{width:100, height:100}} />  
                <h2 >RAKOTOARISOA Ngahy Tsaramaso</h2>
                <h3>mrBean321@gmail.com</h3>
                <p>Rendez Vous</p>
                <div className="details">
                    <div className="data">
                        <h4>5 </h4>
                        <p>Passé</p>
                    </div>
                    <hr />
                    <div className="data">
                        <h4>2 </h4>
                        <p>A venir</p>
                    </div>

                </div>
            </div>

            <div className="detail"  >
               <PatientData label="Sexe" value="masculin" dataAos="fade-down-right" delay="200"/>
               <PatientData label="Naissance" value="Janv, 12, 2001" dataAos="fade-down-right" delay="300"/>
               <PatientData label="Numero Mobile" value="0243546791" dataAos="fade-down-right" delay="400"/>
               <PatientData label="Adresse" value="masculin" dataAos="fade-down-right" delay="500"/>
               <PatientData label="Cité" value="Ambalavao" dataAos="fade-down-right" delay="600"/>
               <PatientData label="Groupe SAnguin" value="A+" dataAos="fade-down-right" delay="700"/>
               <PatientData label="inscription" value="oct, 25, 2015" dataAos="fade-down-right" delay="800"/>
               <PatientData label="Status" value="Menbre Actif" dataAos="fade-down-right" delay="900"/>
            </div>


        </div>

    )
}