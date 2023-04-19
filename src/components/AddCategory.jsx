import { useState } from "react";

export const AddCategory = ( { newCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( { target } ) => {
    //console.log(target);
    setInputValue( target.value );
    //console.log(inputValue);
  }

  const onSubmitCategory = (event) => {
    // preventDefault ayuda a mantener los datos del formulario sin recargar la pagina
    event.preventDefault();
    //console.log(event.target);

    //verificar que no se envien espacios en blanco
    if(  inputValue.trim().length <=1 ) return ;

    newCategory(inputValue);
    setInputValue(''); //Limpiamos el input

  }

  return (

    <>
        <form onSubmit={ onSubmitCategory } aria-label='form' >

            <input type='text'
            placeholder='search gifs...'
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
            />

        </form>
    </>
    )

}