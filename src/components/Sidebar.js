import React from 'react'
import "../App.css"
const Sidebar = () => {
    return (
        <>
            <aside className='nav'>
                
                    <div className="logo">
                        <div className="img"></div>
                        <div className="name">Harsh Sharma</div>
                    </div>
                    <div>
                        <h3>People Care System</h3>
                    </div>
                    <div className="home">
                        <p>Home</p>
                    </div>
                    <div className="manage">
                        <p>Management</p>
                        <ul>
                            <li><a className='hover-underline-animation' href='#'>Employee</a></li>
                            <li><a className='hover-underline-animation' href='#'>Attendance</a></li>
                            <li><a className='hover-underline-animation' href='#'>Leaves</a></li>
                            <li><a className='hover-underline-animation' href='#'>Payroll</a></li>
                            <li><a className='hover-underline-animation' href='#'>Separation</a></li>
                        </ul>
                    </div>
              
            </aside>
        </>
    )
}

export default Sidebar
