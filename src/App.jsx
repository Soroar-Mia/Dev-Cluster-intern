import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

function App() {


  return (
    <>
      <Navbar></Navbar>

      <main >
        <div className='flex flex-row mt-20 px-6'>
          <div className='basis-3/12 p-4'>
            <ul className='mt-16'>
              <li className='my-5'>

                <NavLink to='/AddStudent' className={({ isActive }) =>
                  isActive
                    ? "bg-customRed text-white px-8 py-4 rounded flex items-center"
                    : "flex items-center"
                }><FaUserGroup /> <span className='ml-4'>Add Student</span></NavLink>
              </li>
              <li className='my-5'>

                <NavLink to='/ManageStudents' className={({ isActive }) =>
                  isActive
                    ? "bg-customRed text-white px-8 py-4 rounded flex items-center"
                    : "flex items-center"
                }><BiSolidUserDetail /> <span className='ml-4'>Manage Students</span></NavLink>
              </li>
              <li className='my-5'>

                <NavLink to='/' className={({ isActive }) =>
                  isActive
                    ? "bg-customRed text-white px-8 py-4 rounded flex items-center"
                    : "flex items-center"
                }><IoIosLogOut /> <span className='ml-4'>Logout</span></NavLink>
              </li>
            </ul>
          </div>

          <div className='basis-9/12 p-4'>

            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
