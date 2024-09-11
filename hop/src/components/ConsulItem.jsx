import * as React from 'react';
import { PatientData } from './Patientata';
export function ConsulItem(props){
    return (
        <div className='ConsultItem'>
            <PatientData label={props.date} value={props.heure} />
            <PatientData label="Type" value={props.type} />
            <PatientData label="Medecin" value={props.docteur} />
            <PatientData label="Sexe" value={props.val} />
        </div>
    )
}