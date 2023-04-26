import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSuitcase,faCircleCheck, faCircleXmark, faBell, faClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../App.css"
const Dashboard = () => {
    return (
        <>
            <div className='top'>
                <div className='search'>
                    <div className='s-icon'><FontAwesomeIcon  icon={faMagnifyingGlass} /></div>
                    <div className='top-logo'>
                        <h3>H</h3>
                    </div>
                </div>
                <div className="offers">
                    <div className='joffer'>
                        <div className='jhead'>
                            <h2>Job Offers</h2>
                        </div>
                        <div className='jpara'><p>Dashboard</p><p>.</p><p>Job</p><p>.</p><p>Offers</p></div>
                    </div>
                    <div className='jbutton'>
                        <button> + New Offer</button>
                    </div>
                </div>

                {/* DASH TABLE */}
                <div className='dashtable'>
                    <div className='rowfirst'>
                        <div className='card'>
                            <div className='card-logo b1'>
                                <FontAwesomeIcon className='suitcase to' icon={faSuitcase} />
                            </div>
                            <div className='card-text'>
                                <h3>Total Offered</h3>
                                <p>20 invoices</p>
                                <p className='to'>$1,205.75</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-logo b2'>
                                <FontAwesomeIcon className='suitcase po' icon={faClock} />
                            </div>
                            <div className='card-text'>
                                <h3>Pending Offers</h3>
                                <p>20 invoices</p>
                                <p className='po'>$1,205.75</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-logo b3'>
                                <FontAwesomeIcon className='suitcase pob' icon={faUser} />
                            </div>
                            <div className='card-text'>
                                <h3>Pending Onboarding</h3>
                                <p>20 invoices</p>
                                <p className='pob'>$1,205.75</p>
                            </div>
                        </div>
                    </div>
                    <div className='rowsecond'>


                        <div className='card'>
                            <div className='card-logo b4'>
                                <FontAwesomeIcon className='suitcase jovd' icon={faBell} />
                            </div>
                            <div className='card-text'>
                                <h3>Joining Overdue</h3>
                                <p>20 invoices</p>
                                <p className='jovd'>$1,205.75</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-logo b5'>
                                <FontAwesomeIcon className='suitcase jo' icon={faCircleCheck} />
                            </div>
                            <div className='card-text'>
                                <h3>Joined</h3>
                                <p>20 invoices</p>
                                <p className='jo'>$1,205.75</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-logo b6'>
                                <FontAwesomeIcon className='suitcase nj' icon={faCircleXmark} />
                            </div>
                            <div className='card-text'>
                                <h3>Not Joined</h3>
                                <p>20 invoices</p>
                                <p className='nj'>$1,205.75</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
