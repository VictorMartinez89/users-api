import { useEffect } from "react";
import UserItem from "./UserItem";

function UserList({users=[]}) {

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
                    <UserItem key={_user.id} user={_user} />
                ))
            }
        </>

    )

    
}

export default UserList;