import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row">
            <div>
              <p className="lead contactLead text-center">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <span>
              <h3 className="contactList text-center">Dylan Davis</h3>
              <ul className="contactList text-center">
                <li>Orlando, FL</li>
                <li>3864518903</li>
                <li>dylandavispc@gmail.com</li>
                <li>linkedin.com/in/dylan-davis</li>
                <li>github.com/dylandavispc</li>
              </ul>
            </span>
          </div>
        </section>
        );
  }
}