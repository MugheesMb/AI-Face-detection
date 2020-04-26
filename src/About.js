import React from 'react';
import Typed from 'react-typed';
import Love from './Love';

const About = ()=>{

    return(
        
        <div style={{padding:'100px'}}>

        

<p className='f3 tc 'style={{ justifyContent: 'centre',paddingTop:'200px'  }} >
              <h3 className='pa0 ma0'> Welcome :) {' '}</h3>
              <Typed
  
  loop
  typeSpeed={ 5}
  backSpeed={40}
  strings={['Hi...! Let Me Tell You About Myself,',
   ' I am Artificial Intelligence Robot , My Name is Smack .! and i can detect Human Faces..! This APP is built around a simple idea. You send inputs (an image ) to the service and it returns predictions..! This App is great for anyone building an app that monitors or detects human activity...!' ]}
  backDelay={1300}
  loopCount={1}
  showCursor
  cursorChar="|"

  
/>        
</p>



<Love/>

</div>
    );
}

export default About;