import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/me.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       					<span>{resumeData.name}</span>
                     <br></br>
       					<span>
                        <ul>
                           <li>Orlando, FL</li>
                           <li>3864518903</li>
                           <li>dylandavispc@gmail.com</li>
                           <li>linkedin.com/in/dylan-davis</li>
                           <li>github.com/dylandavispc</li>
                        </ul>
                     </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}