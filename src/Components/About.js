import React, { Component } from 'react'
import images from '../images/vaishueditted.jpg'


class About extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='info'>
          <div id='big'>
            <div id="main">
              <img src={images} id='image' alt=''></img>
            </div>
            <div id='font'>
              <u><h2>About me</h2></u>
              <p> Hey there ! I am Vaishnavi Chandrasekar. <br />
              I've completed my graduation at Madras University in 2021 .
               I am a Full Stack Developer who focuses on writing clean , elegant 
               and efficient code as well as a designer with a passion for designing beautiful and 
               functional user experiences. I'm presently looking for a  challenging job.  </p><br />
              <div id='mydiv'>
                <p id='size'>I personally inspired by this quote:</p>
                <h3 id='quote'>"The Days that break you , are the days that make you ! !"</h3>

              </div>
            </div>
          </div>




        </div>

      </>

    )
  }
}

export default About
