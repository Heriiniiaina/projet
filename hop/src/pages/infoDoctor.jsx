import React from "react";
import '.././style/App.css';
import {Grid2 as Grid, Paper} from '@mui/material'
import { Header } from ".././components/Header.jsx";
import { InfoGeneral } from ".././components/InfoGeneral.jsx";
import { Note } from ".././components/Note.jsx";
import { ConsultList } from ".././components/ConsultList.jsx";
import { Payment } from ".././components/Payment.jsx";

export function InfoDoctor(){

    return(
        <>
            <Grid container spacing={2} columns={16}>
                <Header/>     
                <Grid size={11.5} container spacing={2} columns={16}>
                <Grid size={10.5}>                   
                    <InfoGeneral/>
                </Grid>              
                <Grid size={5.5}>
                    <Payment/>
                </Grid> 
                <Grid size={16}>
                    <Paper elevation={0.2} style={{height:"25vh", background:"#fff"}}>
                    <ConsultList/>
                    </Paper>
                </Grid>                  
                </Grid>                 
                <Grid size={4.5}>
                    <Paper style={{height:"75vh", background:"#fff"}}>
                    <Note/>
                    </Paper>
                </Grid>
            </Grid>
        
        </>

    )
}

