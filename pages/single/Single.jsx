import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlePost/Singlepost'
import './single.css'

export default function Single() {
    return (
        <div className="single">
            
            {/* post*/}
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
