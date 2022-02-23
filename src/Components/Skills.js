import React, { Component } from 'react'

class Skills extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='skls'>
          <div id='part'>
            <h1>SKILLS: </h1>
            <div id='part1'>
              <h5 id='H3'>Html</h5>
              <div className="contain">
                <div id="html">70%</div>
              </div>

              <h5 id='css'>CSS</h5>
              <div class="contain">
                <div class="css">70%</div>
              </div>
              <h5 id='js'>Javascript</h5>
              <div class="contain">
                <div class="js">70%</div>
              </div>
              <h5 id='react'>React</h5>
              <div class="contain">
                <div class="react">70%</div>
              </div>
              <h5 id='node'>Nodejs</h5>
              <div class="contain">
                <div class="node">60%</div>
              </div>

              <h5 id='mongodb'>Mongo DB</h5>
              <div class="contain">
                <div class="mongodb">60%</div>
              </div>
            </div>
            <div id='part2'>
              <h5 id='sql'>MySQL</h5>
              <div class="contain">
                <div class="sql">60%</div>
              </div>
              <h5 id='aws'>AWS</h5>
              <div class="contain">
                <div class="aws">40%</div>
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default Skills