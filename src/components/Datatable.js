import User from './userApi'
// import {img1} from "../img1.webp"
import img from "../faceimg.png"
import "../App.css"
import { useState } from 'react'
const Datatable = () => {
    const [user, setUser] = useState(User);
    return (
        <>
            <div className='main-table'>

                <div className='table'>
                    <div className='headings '>
                        <h4 className='hover-underline-animation'> <p className="to">20</p> Total Offered</h4>
                        <h4  className='hover-underline-animation'> <p className="po">20</p> Pending Offers</h4>
                        <h4  className='hover-underline-animation'> <p className="pob">20</p> Pending Onboarding</h4>
                        <h4  className='hover-underline-animation'> <p className="jovd">20</p> Joining Overdue</h4>
                        <h4  className='hover-underline-animation'> <p className="jo">20</p> Joined</h4>
                        <h4  className='hover-underline-animation'> <p className="nj">20</p> Not Joined</h4>
                    </div>
                    <div className="filters">
                        <div>

                            {/* <input type="" /> */}
                            <select className="dropmenu" id="">
                                <option value="volvo">All</option>
                                <option value="saab">Option1</option>
                                <option value="fiat">Option2</option>
                                <option value="audi">Option3</option>
                            </select>
                        </div>
                        <div>
                            <input className="date" type="date" />
                        </div>
                        <div>

                            <input className="date" type="date" />
                        </div>
                        <div>
                            <input
                                className="filtersearch"
                                placeholder="Search"
                                type="text" />
                        </div>
                    </div>
                    <table>


                        <tr className="mainhead">
                            <th>Name</th>
                            <th>Joining Date</th>
                            <th>Designation</th>
                            <th>Phone No</th>
                            <th>Location</th>
                            <th>Status</th>

                        </tr>
                        {
                            user.map((elem) => {
                                return (
                                    <>
                                        <tr className='row'>
                                            <div className='memoji'>
                                                <img src={img} alt="" />
                                            <td>{elem.name}</td>
                                            </div>
                                            <td>{elem.joiningDate}</td>
                                            <td>{elem.designation}</td>
                                            <td>{elem.phone}</td>
                                            <td>{elem.location}</td>
                                            <td>{elem.status}</td>
                                        </tr>
                                    </>

                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Datatable
