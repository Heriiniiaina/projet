import * as React from 'react';
import Link from '@mui/material/Link';

export function Lien(props){
    return (
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize:"14px" ,color:"Blue", fontWeight:"700" }} color="inherit" href="">
          
          {props.name}
        </Link>
    )
}