import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
        <div>
            <Link to='/admin/dashboard/insertform'>Insert Products</Link>
        </div>
    </div>
  )
}

export default Dashboard