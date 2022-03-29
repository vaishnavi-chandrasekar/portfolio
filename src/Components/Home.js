import React, { Component } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-scroll'

class Home extends Component {
  state = {};
  render() {
    return (
      <>


        <div className='img'>

          <div className='list'>
            <Link id='li'
              activeClass="active"
              to="img"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >HOME</Link>
            <Link id='about'
              activeClass="active"
              to="big"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >ABOUT</Link>
            <Link id='skills'
              activeClass="active"
              to="part"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >SKILLS</Link>
            <Link id='projects'
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-110}
              duration={100}
            >PROJECTS</Link>
            <Link id='contact'
              activeClass="active"
              to="full"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >CONTACT</Link>

<a href="https://docs.google.com/document/d/1_z0XapHQpyKKSncrkxaa6f-RF2uNBucc/edit?usp=drivesdk&ouid=104597042631528438052&rtpof=true&sd=true"
             target="_blank">
              <h4 id='cvbtn'>RESUME</h4>
            </a>




          </div>

      


          <div className='intro'>         
           <h1 id='typewriter'> HEY !! <br />I am Vaishnavi Chandrasekar, I'm a<TypeWriterEffect  className="writing_effect"
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'AliceBlue	',
              fontWeight: 500,
              fontSize: '1em',
              textAlign:"center"
            }}
            startDelay={2000}
            cursorColor="transparent"
            multiText={[
              'MERN Stack Developer.',
              'Designer.',
              'writer.'
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
          />



          </h1>


          </div>



        </div>


      </>
    )
  }

}

export default Home