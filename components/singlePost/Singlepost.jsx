import React from 'react'
import './singlepost.css'

export default function Singlepost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">

                <img src="forest.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum  nam quasi! Unde, consectetur!
                
                <div className="singlepostEdit">
                <i className="singlepostIcon far fa-edit"></i>
                <i className="singlepostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlepostInfo">
                    <span className="singlepostAuthor">author <b>elif</b></span>
                    <span className="singlepostDate">date <b>1 hour ago</b></span>
                </div>
                <p className="singlepostDesc"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque animi expedita dolorem
                     unde nesciunt, culpa eligendi fuga molestias nisi odit delectus vero aliquid ea
                      earum saepe repellat corrupti ipsum incidunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos numquam optio dolor ducimus dolore doloribus? Quasi facilis exercitationem 
                     atque, dolore ad nostrum sapiente sint reiciendis dolor dolores accusamus corrupti necessitatibus. </p>
            </div>
        </div>
    )
}
