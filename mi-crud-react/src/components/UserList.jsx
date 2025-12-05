import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

function UserList({users=[], onDelete}) {

    useEffect(()=>{
        (
            async()=>{
                try{
                     const res = await fetch('http://localhost:8080/api/users');
                     const users = await res.json();
                }catch(error){
                    console.log(error)

                }
            })();
    }, []);
    
    return(
        <>
            {
                users.map((_user)=> (
                    <UserItem key={_user.id} user={_user} onDelete={onDelete}/>
                ))
            }
        </>

    )

    
}

export default UserList;