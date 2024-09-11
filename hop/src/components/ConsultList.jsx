import * as React from 'react';
import { ConsulItem } from './ConsulItem';
export function ConsultList(props){
    return (
        <>
            <div className='ConsultList'data-aos="zoom-left" data-aos-delay="200">
                <ConsulItem date="01 juin 22" heure="09:00 AM" type="Consultation" docteur="Dr Rakoto" val="Lorem Ipsum"/> 
                <ConsulItem date="01 juin 22" heure="09:00 AM" type="Consultation" docteur="Dr Rakoto" val="Lorem Ipsum"/> 
                <ConsulItem date="01 juin 22" heure="09:00 AM" type="Consultation" docteur="Dr Rakoto" val="Lorem Ipsum"/> 
                <ConsulItem date="01 juin 22" heure="09:00 AM" type="Consultation" docteur="Dr Rakoto" val="Lorem Ipsum"/> 
                <ConsulItem date="01 juin 22" heure="09:00 AM" type="Consultation" docteur="Dr Rakoto" val="Lorem Ipsum"/> 
            </div>
        </>
    )
}