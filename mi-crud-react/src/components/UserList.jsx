import UserItem from "./UserItem";

function UserList({users}) {

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