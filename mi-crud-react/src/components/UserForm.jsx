
import { useState } from "react";

function UserForm({onSubmit}){


    const[formulario, setFormulario] = useState({
        name:'',
        email:'',
        password:''    
    })

    const handleChange = (e)=>{
        setFormulario({...formulario, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formulario);
        setFormulario({
            name:'',
            email:'',
            password:'',
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
            <input  name="password" type="text" placeholder="Contrasena" value={formulario.password} onChange={handleChange} required/>
        </label>
        <button type="submit"> Gurdar</button>
        </form>
        </>
    )



}


export default UserForm;