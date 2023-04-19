import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
    //Un hook es una función predefinida en react
    const [categorias, setCategorias] = useState(['Demon Slayer']);

    const onAddCategory = (newCategoryAdded) => {
        //analizar si la categoria insertada ya existe en elarray
        if (categorias.includes(newCategoryAdded)) return;

        // ... operador spret (Copiar todo lo demas del array de categorias)
        setCategorias([newCategoryAdded, ...categorias]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifApp</h1>

            {/* Input */}
            <AddCategory newCategory={(value) => onAddCategory(value)} />

            {/* Listado de los gifs */}
            {
                categorias.map((cat) =>
                (
                    <GifGrid key={cat} category={cat} />
                )
                )
            }

        </>
    )
}