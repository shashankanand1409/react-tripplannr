import './booknow.css';
import React from 'react';

const Booknow = () => {
  return (
    <div className="book" id="book">
        <h1 className="heading">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span className="space"></span>
            <span>n</span>
            <span>o</span> 
            <span>w</span>

        </h1>

      <div className="row">
          
          <div className="image">
              <img src="./assets/ticket book.jpg" alt=""/>
          </div>

          
          <form className = 'form-booknow' action="">
              <div className="inputBox">
                  <h3>Where to?</h3>
                  <input type="text" placeholder="Place Name"/>
              </div>

              <div className="inputBox">
                  <h3>How many?</h3>
                  <input type="number" placeholder="Number of guests"/>
              </div>

              <div className="inputBox">
                  <h3>From</h3>
                  <input type="date"/>
              </div>
              
              <div className="inputBox">
                  <h3>To</h3>
                  <input type="date"/>
              </div>
              

              <input type="submit" className="btn" value="Book now"/>
          </form>
      </div>
    </div>
  )
}

export default Booknow