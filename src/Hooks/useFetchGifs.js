import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    // Creo un state para manejar el cargando porque se renderiza dos veces
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    };

    useEffect(() => {
        getImages();
    }, []);
    return {
        // Como es atributo y valor tienen el mismo nombre images: images
        // Se evita poner dos veces por js
        images,
        isLoading
    }
}
