import React from 'react';
import './Face.css';
const Face = ({ imageUrl,box })=>{

    return(

    <div className='ma' style={{justifyContent:'center',display:'flex'}}>
        <div className=' absolute mt2 '>
    <img id='inputimage'  src={imageUrl}  alt='' width='400px' height=' auto'/>
    <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    

 </div>
    </div> 
    );

}
export default Face;