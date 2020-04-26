import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import r from './r.png';
import Typed from 'react-typed';


    


  
const Write = () => {

    return(
        
        <div>
<p className='f3 tc pa0 ma0' style={{ justifyContent: 'centre'  }}>
                        
              <h3 className='pa0 ma0'>Hi..I'm Smack {' '}{<img alt="zz" src={r}/>} <Spin /></h3>
              <Typed
  
  loop
  typeSpeed={30}
  backSpeed={40}
  strings={["Made by Mugy...!",' I can detect Human faces...!', 'Nice to meet you.. :)']}
  backDelay={1300}
  loopCount={0}
  showCursor
  cursorChar="|"
  
/>
         
     
    </p>
    
       <div>
       
       </div>

        




         </div>   
        
    );
}
export default Write;