import React, {  useEffect, useState } from 'react';
import "../COMPONENTS/UsersPage.css";
import pen from "../pen.png"
import { Link } from 'react-router-dom';



const UsersPage = () => {
    const[users,setUsers]=useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setUsers(data);
          });
      }, []);
      console.log(users);
      
    

  return (
    <div className='Userpage'>
        
        
        {users.map((items,index) => {
        return (
         <div className='user'>
            <div className='details'>
            <h3>{items.name}</h3>
            <p>{items.email}</p>
            <p>{items.phone}</p>
           <Link to={`/details/${index}`}> <button ><img src={pen} width={"10px"}/>Edit</button></Link>
            </div>
            
            
         </div>
        );
      })}
            

        
        
    
    </div>
  );
}

export default UsersPage;
