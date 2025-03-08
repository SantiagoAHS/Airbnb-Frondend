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

interface PropertyListProps {
    landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id
})=>{
    const[properties,setProperties]=useState<PropertyType[]>([]);
    
    const getProperties = async () =>{
        let url = '/api/properties/';

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`
        }

        const tmpProperties = await apiService.get(url)

        console.log(tmpProperties);  // Verifica la respuesta
        setProperties(tmpProperties.data || []); 
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