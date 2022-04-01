import React, { Component } from 'react'
import image from '../images/calc.jpg'
import pic from '../images/user validation.jpg'
import pics from '../images/ip.jpg';
import imagess from "../images/blog.jpg";
import imagesss from "../images/designate.jpg"



class Projects extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='project'>
          <div id='hed'><h1 id='centre'>PROJECTS </h1></div>

          <div id='center'>

            <div id='one'>
              <a href='https://meek-valkyrie-d67d0f.netlify.app/' target='_blank'>
                <img src={image} id='imgs' alt=''></img>
                <h4 id='pa'>calc</h4>
               
              </a>
              <a href="https://github.com/vaishnavi-chandrasekar/calculator-react-reducer" target="_blank"><button className='btn btn-primary sm'>Source Code</button></a>
            </div>
            <div id='two'>
              <a href='https://sparkly-tapioca-3832a0.netlify.app/' target="_blank">
              <img src={pic} id="pic2" alt=''></img>
              <h4 id='hd2'>User validation</h4>
              </a>
              <a href="https://github.com/vaishnavi-chandrasekar/user-validation" target="_blank"><button className='btn btn-primary sm'>Source Code</button></a>
            </div>
            <div id='three'>
              <a href='https://elated-joliot-32a77f.netlify.app' target='_blank'>
              <img src={pics} id="pic3" alt=''></img>
              <h4 id='hd3'>IP Tracker</h4>
              </a>
              <a href="https://github.com/vaishnavi-chandrasekar/IP-Add-Tracker" target="_blank"><button className='btn btn-primary sm'>Source Code</button></a>
            </div><br />
            <div id='four'>
              <a href='https://idyllic-choux-7646b0.netlify.app/' target='_blank'>
              <img src={imagess} id="pic4" alt=''></img>
              <h4 id='hd4'>blog</h4>
              </a>
              <a href="https://github.com/vaishnavi-chandrasekar/blog" target="_blank"><button className='btn btn-primary sm'>Source Code</button></a>
            </div>
            <div id='four'>
              <a href='https://idyllic-choux-7646b0.netlify.app/' target='_blank'>
              <img src={imagesss} id="pic4" alt=''></img>
              <h4 id='hd4'>Designate</h4>
              </a>
              <a href="https://github.com/vaishnavi-chandrasekar/blog" target="_blank"><button className='btn btn-primary sm'>Source Code</button></a>
            </div>


            


          </div>

        </div>



      </>
    )
  }
}


export default Projects