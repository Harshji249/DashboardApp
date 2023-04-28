import NewTable from "./Newtable"
import User from './userApi'
// import {img1} from "../img1.webp"
import img from "../faceimg.png"
import "../App.css"
import { useEffect, useState } from 'react'
const Datatable = () => {
    const [user, setUser] = useState(User);
    const [selectValue, setSelectValue] = useState('');
    const [searchValue, setSearchValue] = useState([]);


    const handleSelectChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectValue(e.target.value);
    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    const getSize = (typeOfOffer) => {
        var count = 0;
        for (var i = 0; i < user.length; i++) {
            if (typeOfOffer == user[i].status) {
                count = count + 1;
            }
        }
        return count;
    }

    return (
        <>
            <div className='main-table'>

                <div className='table'>
                    {/* <NewTable /> */}
                    <div className='headings '>
                        <h4 className='hover-underline-animation center'> <p id="p1" className="to">{user.length}</p> Total Offered</h4>
                        <h4 className='hover-underline-animation center'> <p id="p2" className="po">{getSize("Pending Offers")}</p> Pending Offers</h4>
                        <h4 className='hover-underline-animation center'> <p id="p3" className="pob">{getSize("Pending Onboarding")}</p> Pending Onboarding</h4>
                        <h4 className='hover-underline-animation center'> <p id="p4" className="jovd">{getSize("Joining Overdue")}</p> Joining Overdue</h4>
                        <h4 className='hover-underline-animation center'> <p id="p5" className="jo">{getSize("Joined")}</p> Joined</h4>
                        <h4 className='hover-underline-animation center'> <p id="p6" className="nj">{getSize("Not Joined")}</p> Not Joined</h4>
                    </div>
                    <div className="filters">
                        <div className="select">
                            <select onChange={handleSelectChange} className="dropmenu" id="">
                                <option value="None" selected={true}>None</option>
                                <option value="Pending Offers">Pending Offers</option>
                                <option value="Pending Onboarding">Pending Onboarding</option>
                                <option value="Joining Overdue">Joining Overdue</option>
                                <option value="Joined" >Joined</option>
                                <option value="Not Joined">Not Joined</option>
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
                                onChange={handleSearch}
                                className="filtersearch"
                                placeholder="Search"
                                type="text" />
                        </div>
                    </div>
                    <table cellPadding={0} cellSpacing={0} >
                        <tr className="mainhead">
                            <div>
                                <th>Name</th>
                                <label htmlFor="">Role</label>
                            </div>
                            <div>
                                <th>Joining Date</th>
                                <label htmlFor="">Offering Date</label>
                            </div>
                            <div>
                                <th>Designation</th>
                                <label htmlFor="">Department</label>
                            </div>
                            <div>
                                <th>Phone No</th>
                                <label htmlFor="">Email</label>
                            </div>
                            <div>
                                <th>Location</th>
                                <label htmlFor="">Business Function</label>
                            </div>
                            <div>
                                <th>Status</th>
                                <label htmlFor="">Employement Type</label>
                            </div>
                        </tr>
                        {
                            user
                                .filter((value) => {
                                    return value.name.match(searchValue);
                                }).filter((value) => {
                                    return value.status === selectValue;
                                })
                                .map((elem) => {
                                    return (
                                        <>
                                            <tr className='row' key={elem.id}>
                                                <div className='emojiandname'>

                                                    <div className='memoji'>
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div>
                                                        <td>{elem.name}</td>
                                                        <label htmlFor="">Role</label>
                                                    </div>
                                                </div >
                                                <div className='lableandname'>
                                                    <td>{elem.joiningDate}
                                                    </td>
                                                    <label htmlFor="">Employee Code</label>
                                                </div>
                                                <div className='lableandname'>
                                                    <td>{elem.designation}</td>
                                                    <label htmlFor="">Department</label>
                                                </div>
                                                <div className='lableandname'>
                                                    <td>{elem.phone}</td>
                                                    <label htmlFor="">Email</label>
                                                </div>
                                                <div className='lableandname'>
                                                    <td>{elem.location}</td>
                                                    <label htmlFor="">Business Function</label>
                                                </div>
                                                <div className='lableandname'>
                                                    <td>{elem.status}</td>
                                                    <label htmlFor="">Full Time</label>
                                                </div>
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


