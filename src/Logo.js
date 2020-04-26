import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import i from './i.png';
import Loader from 'react-loader-spinner';



const Logo = () => {

    return(
        
    <div className=' w-30 ma4 mt5 dib   ' >
        
        <Tilt
        
        
        className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 <div   className="Tilt-inner pa4">

      <img   alt="dasas" src={i}/> 
      <Loader    style={{justifyContent:'center',display:'flex'}} 
            type="ThreeDots"
            color="purple"
            height={100}
            width={100}
            timeout={0} //3 secs
           />
  </div>
</Tilt>



    </div>
            
        
    );
}
export default Logo;