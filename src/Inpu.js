import React from 'react';
import './Inpu.css'

const Inpu = ({onInputChange ,onSubmitButton})=>{

    return(
        

        <div  style={{justifyContent:'center',display:'flex'}} >
        <div className='form pa4 br3 shadow-3'  style={{justifyContent:'center',display:'flex'}}>
<input className=' w-70   '  placeholder="Enter URL LINK"  type="text" onChange={onInputChange}/>
<button className='  w-30 grow link   dib   'style={{backgroundColor:'#b465da'}}
 onClick={onSubmitButton} >Detect</button>

</div>
</div>
    );

}
export default Inpu;