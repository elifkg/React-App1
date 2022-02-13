import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div classsName="settings">
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingsUpdateTitle">update your account</span>
                    <span className="settingsDeleteTitle ">delete account</span>
                </div>
                  <form  className="settingForm">

                      <label >profile picture</label>
                        <div className="settingsProfilePic">
                            <img src="forest.jpg" alt="" />
                            <label htmlFor="fileInput">
                                
                            <i className="settingsProfilePicIcon far fa-user-circle"></i>

                            </label>
                            <input type="file" id="fileInput" style={{display: 'none'}}/>
                        </div>
                     <label >Username</label>
                     <input type="text" placeholder="elif" />
                    <label>Email</label>
                    <input type="email" placeholder="elif@gmail.com" />
                        <label>Password </label>
                        <input type="password"  />
                     <button className="settingsSubmit">Update</button>


                  </form>


            </div>
            <Sidebar/>
        </div>
    )
}
