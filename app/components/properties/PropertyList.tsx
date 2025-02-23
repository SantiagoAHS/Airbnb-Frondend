'use client';

import apiService from '@/app/services/apiServices';
import { useEffect, useState } from 'react';

import PRopertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
}

const PropertyList = ()=>{
    const[properties,setProperties]=useState<PropertyType[]>([]);
    
    const getProperties = async () =>{
        const tmpProperties = await apiService.get('/api/properties/')

        setProperties(tmpProperties.data);
    };
    useEffect(()=>{
        getProperties();
    },[]);

    return(
        <>
            {properties.map((property)=>{
                return(
                    <PRopertyListItem
                        key={property.id}
                        property={property}
                    />
                )
            })}
        </>
    )
}
export default PropertyList;