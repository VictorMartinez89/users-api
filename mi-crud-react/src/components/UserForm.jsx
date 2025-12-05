
import { useState } from "react";

function UserForm({onSubmit}){


    const[formulario, setFormulario] = useState({
        name:'',
        email:'',
        city:''    
    })

    const handleChange = (e)=>{
        setFormulario({...formulario, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault;
        onSubmit(formulario);
        setFormulario({
            name:'',
            email:'',
            city:''
        }); 
        
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <legend>Perfil:</legend>
        <label htmlFor="">
            <input  name="name" type="text" placeholder="Nombre" value={formulario.name} onChange={handleChange} required/>
        </label>
        <label htmlFor="">
            <input  name="email" type="text" placeholder="Email" value={formulario.email} onChange={handleChange} required/>
        </label>
        <label htmlFor="">
            <input  name="city" type="text" placeholder="Ciudad" value={formulario.city} onChange={handleChange} required/>
        </label>
        <button type="submit">Guardar</button>
        </form>
        </>
    )



}


export default UserForm;