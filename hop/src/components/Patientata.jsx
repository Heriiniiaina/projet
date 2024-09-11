import React from "react";
export function PatientData(promps){
    return(
        <div className="PatientData" data-aos={promps.dataAos} data-aos-delay={promps.delay}>
            <p className="label">{promps.label}</p>
            <p className="value">{promps.value}</p>
        </div>
    )
}