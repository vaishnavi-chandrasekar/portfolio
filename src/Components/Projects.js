import React, { Component } from 'react'
import image from '../images/scs.jpg'
import pic from '../images/chess.jpg'


class Projects extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='project'>
          <div id='hed'><h1 id='centre'>Projects </h1></div>

          <div id='center'>

            <div id='one'>
              <a href='https://brave-morse-2e7417.netlify.app/'>
                <img src={image} id='imgs' alt=''></img>
                <h4 id='pa'>Todo list</h4>
              </a>
            </div>
            <div id='two'>
              <img src={pic} id="pic2" alt=''></img>
              <h4 id='hd2'> Project 2</h4>
            </div>
            <div id='three'>
              <img src={pic} id="pic3" alt=''></img>
              <h4 id='hd3'> Project 3</h4>
            </div>


          </div>

        </div>



      </>
    )
  }
}


export default Projects