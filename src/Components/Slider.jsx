import React, { useState } from 'react';
import image1 from '../assets/Images/Dishonered/1.jpg'
import image2 from '../assets/Images/Dishonered/2.jpg'
import image3 from '../assets/Images/Dishonered/3.jpg'
import image4 from '../assets/Images/Dishonered/4.png'
import image5 from '../assets/Images/Dishonered/5.jpg'
import image6 from '../assets/Images/Dishonered/6.jpg'

// const array = [image1, image2, image3, image4, image5, image6]
const array=["https://assetsio.gnwcdn.com/bad-disguises-in-games-9-dishonored-corvo.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp","https://images6.alphacoders.com/419/thumbbig-419751.webp"]
const Slider = () => {

    const [current,setCurrent]=useState(0) 

    function change(pointer){
    if(pointer == 'Previous'){
       current==0?setCurrent(array.length-1): setCurrent((pvs)=>pvs-1)
    }else{
        current==array.length-1?setCurrent(0): setCurrent((pvs)=>pvs+1)
    }
    }

    const auto=(current,setCurrent)=>{
        setInterval(() => {
            return current==array.length-1?setCurrent(0): setCurrent((pvs)=>pvs+1)        
        }, 1000);
    }
    return (
        <>
            <div className='main'>
                <div style={{ width: '500px', border: '1px solid red' }}>
                    <img src={array[current]}  alt="Dishonored" />
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', padding:'50px', gap:'50px'}}>
                <button onClick={()=> change('Previous')}>Previous</button>
                <button  onClick={()=>auto(current,setCurrent)}>Auto</button>
                <button  onClick={()=> change('next')}>Next</button>
            </div>
        </>
    );
};


export default Slider;
