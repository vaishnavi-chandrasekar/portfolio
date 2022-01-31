import React, { Component } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-scroll'

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='smdiv'>

          <div className='list'>
            <Link id='li'
              activeClass="active"
              to="smdiv"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >Home</Link>
            <Link id='about'
              activeClass="active"
              to="big"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >About</Link>
            <Link id='skills'
              activeClass="active"
              to="skls"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >Skills</Link>
            <Link id='projects'
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-110}
              duration={100}
            >Projects</Link>
            <Link id='contact'
              activeClass="active"
              to="full"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >Contact</Link>


            <a href="https://drive.google.com/file/d/1zUZ9sCPoLXNLeGJQoEZipqoXiKqneRV6/view?usp=drivesdk"
              download="https://drive.google.com/file/d/1zUZ9sCPoLXNLeGJQoEZipqoXiKqneRV6/view?usp=drivesdk">
              <button type="Submit" id='cvbtn'>Resume</button>
            </a>
          </div>

        </div>


        <div className='img'>

          <h1 id='typewriter'> HEY !! <br />I am Vaishnavi Chandrasekar , I'm a<TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'AliceBlue	',
              fontWeight: 500,
              fontSize: '1em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Mern Stack Developer.',
              'Designer.',
              'writer.'
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
          />


          </h1>

        </div>


      </>
    )
  }

}

export default Home