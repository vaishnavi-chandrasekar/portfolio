import React, { Component } from 'react'

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div id='full'>
          <div id='card'>
            <center>
              <h2>GET IN TOUCH</h2>
            </center>
            <div id='h4'>
              <h4>Address:</h4>
              <p>No: 89/2, Magalchi Apartments ,<br /> TNHB Flats , <br />Mogappair East ,<br /> Chennai-37</p><br />
              <h5 className='mydetails'>Name : Vaishnavi Chandrasekar</h5>
              <h5 className='mydetails'> <i class="fas fa-phone-alt"></i> 9962075252</h5>
              <h5 className='mydetails'><i class="fas fa-envelope"></i> vaishnavichandrasekar123@gmail.com</h5><br />
                <div id='link'>
             <a href='https://github.com/vaishnavi-chandrasekar'target="_blank"> <h2><i class="fab fa-github"></i></h2> </a>                     
        </div>


            </div>
          </div>
        </div>


      </>
    )
  }
}

export default Contact