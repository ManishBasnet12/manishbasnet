import React from 'react'
import Navbar from '../../../../Components/Admin/Navbar/Navbar'
import Sidebar from '../../../../Components/Admin/Sidebar/Sidebar'
import ContactList from '../../../../Components/Admin/ContactList/ContactList'

const page = () => {
  return (
    <>
        <Navbar/>
        <div className="flex">
        <Sidebar/>
        <ContactList/>
        </div>
    </>
  )
}

export default page