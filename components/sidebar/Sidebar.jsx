import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarPhoto" src=" forest.jpg" alt=""></img>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque delectus beatae voluptas sunt? Animi, iure sit adipisci ex ullam consequuntur, suscipit expedita minus quasi accusamus perferendis laboriosam excepturi quam!</p>
            </div>
            <div className="sidebarItem">

                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">music</li>
                <li className="sidebarListItem">style</li>
                <li className="sidebarListItem">sport</li>
        </ul>
            </div>

             <div className="sidebarItem">

             <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
             <i className="sidebarIcon fab fa-twitter"></i>
             <i className="sidebarIcon fab fa-facebook-square"></i>


             </div>

             </div>



        </div>
    )
}
