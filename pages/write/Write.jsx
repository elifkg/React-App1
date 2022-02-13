import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className="write">
          <img  className="writeImg"src="forest.jpg" alt="" />


            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    
                    <i className="writeIcon fas fa-plus-circle"></i>
                    </label>

              <input type="file"  id="fileInput" style={{display:'none'}}></input>
              <input type="text"  placeholder="Title" className="writeInput" autoFocus={true}></input>


                </div>
                <div className="writeFormGroup"> 
                <textarea placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>
                
                </div>
               <button className="writeSubmit">Publish</button>

            </form>
        </div>
    )
}
