import React, { Component } from 'react'
import image from '../images/scs.jpg'
import pic from '../images/netflixnew.jpg'
import pics from '../images/ip.jpg';


class Projects extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='project'>
          <div id='hed'><h1 id='centre'>Projects </h1></div>

          <div id='center'>

            <div id='one'>
              <a href='https://brave-morse-2e7417.netlify.app/' target='_blank'>
                <img src={image} id='imgs' alt=''></img>
                <h4 id='pa'>Todo list</h4>
              </a>
            </div>
            <div id='two'>
              <img src={pic} id="pic2" alt=''></img>
              <h4 id='hd2'> Netflix clone</h4>
            </div>
            <div id='three'>
              <a href='https://elated-joliot-32a77f.netlify.app' target='_blank'>
              <img src={pics} id="pic3" alt=''></img>
              <h4 id='hd3'>IP Tracker</h4>
              </a>
            </div>
            


          </div>

        </div>



      </>
    )
  }
}


export default Projects