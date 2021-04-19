import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar";
import "./Complaints.css";
import { getData } from '../auth/data'
import { Link } from 'react-router-dom'

export default function Complaints(props) {
  const [complaint, setComplaint] = useState([])

  useEffect(async () => {
    const data = await getData()
    setComplaint(data.data)
    console.log(data.data)
  }, [])

  return (
    <div className='welcomeContainer'>
      <NavBar text="noDisplay" button="noDisplay" />
      <div className='dashboardContainer'>
        <div className="welcome"> <Link to='/home'><div><i class="fas fa-home welomeIcon"></i> Dashboard</div></Link>
          <Link to='/complaints'> <div className='complaints'><i class="fas fa-hospital-user welomeIcon"></i> Complaints</div></Link>
          <Link to='/'> <div className='logOut'><i class="fas fa-sign-out-alt welomeIcon"></i>Logout <span>{localStorage.getItem('username')}</span></div></Link>
        </div>

        <div className='table'>

          <table>
            <tr>
              <th>S/N</th>
              <th>NAME</th>
              <th>ISSUE</th>
              <th>DESCRIPTION</th>
              <th>TYPE</th>
              <th>COMPLEXITY</th>
              <th>EST. TIME</th>
              <th>COST</th>
              <th>STATUS</th>
            </tr>
            {complaint.map((user, index) =>
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.createdBy}</td>
                <td>{user.summary}</td>
                <td>{user.description}</td>
                <td>{user.type}</td>
                <td>{user.complexity}</td>
                <td>{user.estimatedHrs}</td>
                <td>{user.cost}</td>
                <td>{user.status}</td>
              </tr>
            )}
          </table>

        </div>

      </div>
    </div>
  )
}