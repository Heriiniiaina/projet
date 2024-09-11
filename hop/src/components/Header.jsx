import React from "react";
import {Grid2 as Grid, Avatar, Badge, Chip} from '@mui/material'
import { BiPlusMedical } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Profil from '../Static/Profil.jpg';
import Linked from "./Linked";
export function Header(){
    return (
        <Grid size={16}>
            <div id="header">
                <div className="brand">
                    <BiPlusMedical /><h1>  Symptoscan</h1>
                </div>
                <div className="HeaderData">
                        <Badge badgeContent={4} color="error">
                            <Avatar sx={{ bgcolor: "#FFF", color:"#010f22" }}>
                                <FaMessage />
                            </Avatar>
                        </Badge>
                        <Avatar sx={{ bgcolor: "#FFF", color:"#010f22" }}>
                            <FaBell/>
                        </Avatar>
                        <Avatar src={Profil} />
                </div>
            </div>
            
            <div className="linked">
                <Linked/>
                <a href="">
                    <Chip avatar={<Avatar  sx={{bgcolor: "#fff", color:"#010f22" }} ><FaPencilAlt/> </Avatar>} label="Modfier les informations" sx={{bgcolor: "#fff"}}/>
                </a>
            </div>
        </Grid>
    )
}