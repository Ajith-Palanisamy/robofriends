import React from 'react';
import Card from './Card';


const CartList=({robots})=>{
    return (
        <div>
        { 
            robots.map((robort,i)=>
            {
                return(
                    <Card 
                    key={robots[i].id}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    /> 
                );
            })
        }
        </div>
    );
}

export default CartList;