import { useEffect, useState } from "react";
import axios from "axios";

function FriendList(){

    const [friends, setfriends] = useState([])
    useEffect(() =>{
        axios.get("https://reqres.in/api/users?page=1")
        .then(response =>{
          setfriends(response.data.data);

        })
        .catch(error => console.log(error))
    },[])

    function removeFriend(itemId){
        const newUser = friends.filter(item => item.id !== itemId)
        setfriends(newUser);
    }

    return <div  className="main">
        <ul>
            {
             friends.map(item =>(
                <li key={item.id}  > 
                    {item.first_name+ " "+ item.last_name}
                    <img src ={item.avatar}></img>
                    <button onClick={() => removeFriend(item.id)}>Remove</button>
                 </li>   
                ))
            }
        </ul>
    </div>
}


export default FriendList;