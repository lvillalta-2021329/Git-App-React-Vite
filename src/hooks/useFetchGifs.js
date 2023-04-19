import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

//Los hooks son funcione que retornan algo

export const useFetchGifs = ( category ) => {
    
    //manejar el array de las imagenes
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    
    //useEffect ejecuta efecto secundarios al realizar una acción
    useEffect(() => {
        getImages();
    }, [] );
    
    return {
        images
    }
    
}