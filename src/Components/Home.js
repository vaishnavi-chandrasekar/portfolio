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

<a href="https://docs.google.com/document/d/1gWuOi1F3q193Ucp5JdZgfqtFk1-6AwOw/edit"
              download="https://docs.google.com/document/d/1gWuOi1F3q193Ucp5JdZgfqtFk1-6AwOw/edit" target="_blank">
              <button type="Submit" id='cvbtn'>Resume</button>
            </a>




          </div>

      


          <div className='intro'>         
           <h1 id='typewriter'> HEY !! <br />I am Vaishnavi Chandrasekar, I'm a<TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'AliceBlue	',
              fontWeight: 500,
              fontSize: '1em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
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