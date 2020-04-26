import React, { Component } from 'react';
import Inpu from './Inpu';
import './App.css';
import Clarifai from 'clarifai';
import Face from './Face';
import Logo from './Logo';
import 'tachyons';
import Particles from 'react-particles-js';

import Write from './Write';
import About from './About';
import { BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';






const particleopt = {

  particles:{
    number:{
      value: 120,
      
      move: {
        enable: true,
        speed: 20,
    
        density:{
      
          enable:true,
          value_area:800
           }
      
          }
  }    

}
}
const app = new Clarifai.App({
  apiKey: 'e2adf6606455461ab9ec1aec2d55a1f5'
 });



class App extends Component {

  constructor(){
    super();
    this.state ={
    input: '',
    imageUrl: '', 
    box : {},
    
    
   
    }
     }
   
     calculateFaceLocation = (data) => {
       const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
       const image = document.getElementById('inputimage');
       const width = Number(image.width);
       const height = Number(image.height);
         
   
         return {
   
           leftCol : clarifaiFace.left_col * width ,
           topRow : clarifaiFace.top_row * height ,
           rightCol : width - (clarifaiFace.right_col * width ),
           bottomRow: height - (clarifaiFace.bottom_row * height  ),
   
         }
         
     }
   
     displayFaceBox = (box) =>{
         console.log(box);
       this.setState({box: box});
     }
   
     onInputChange = (event)=>{
   
         this.setState({input: event.target.value});
   
     }
     onSubmitButton = () =>{
   
       this.setState({imageUrl: this.state.input});
       app.models.predict(
         Clarifai.FACE_DETECT_MODEL ,
          this.state.input).then(
       response => this.displayFaceBox(this.calculateFaceLocation(response)))
       .catch(err => console.log(err));
       
   
     }


     
  render(){

  return (
    <Router>
      <Switch>

    
    
<div>
<ul>


                      <Link  to= "/About" className='f3 fr dim black  flex pa3 mt3 no-underline underline-hover  pointer  ' >
             
            AboutSmack

        </Link>
                     
                        
                      <Link  to= "/" className='f3 fr dim black flex pa3 mt3  no-underline underline-hover  pointer ' >
             
            Home

        </Link>
                           
                      </ul>

    <Particles  className='particles'
               params={ particleopt }                 
                      />    
    <Redirect  to='/' />

                      <Route path='/' exact strict render={
                        ()=>{
                          return( 
                            <div>
                          <Logo/>
         
                         <Write/>
                          <Inpu onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton}/>
                        <Face box={this.state.box} imageUrl={this.state.imageUrl} />
                        
                         
                               

                           </div>
                            
                            );
                        }
                      }   
                      />
                      
                      <Route path='/About' exact strict render={
                        ()=>{
                          return( 
                            <About/>
                            
                            );
                        }
                      }/>

           
                    
     </div> 
     </Switch>
     </Router>
    
  );
}
}

export default App;
