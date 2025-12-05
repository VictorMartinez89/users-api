import { createContext, useContext, useState } from "react";
import _users from "../assets/users.json";
import CreateUser from "../pages/CreateUser";


const UserContext=createContext();

export function UserProvider({children}){
    const [loading, setLoading] = useState(false); 
  

      const [users, setUsers] = useState(_users);


    
  const fakeDelay = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
  };

    const createUser =async(user)=>{
        await fakeDelay();
        setUsers([...users, {...user, id: Date.now()}]);
        alert("Usuarios ha creado ");
    }


    const updateUser = async (id, updateUser) =>{
        await fakeDelay();
        setUsers(users.map((user)=>(user.id===id? updateUser : user)));
        alert("Modificado correcto!")
    }

    const deleteUser=async(id) =>{
        await fakeDelay();
        setUsers(users.filter(user=> user.id !==id));
        alert("Usuario ha eliminado");
    }


    return(
        <UserContext.Provider value={{users, createUser, updateUser, deleteUser, loading}}>
            {children}
        </UserContext.Provider>
    )
    
}

export function useUsers(){
    return useContext(UserContext);
}
