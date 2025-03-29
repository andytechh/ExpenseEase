import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="bg-amber-50 p-6 border-r border-red-100 flex flex-col items-center h-screen sticky top-0">
        <div className="flex flex-col items-center gap-4">
          <img 
            className='rounded-full h-30 w-30' 
            src="/src/assets/me.jpg" 
            alt="Profile" 
          />
          <h1 className='text-lg font-semibold mb-8'>{props.name}</h1>
          
          <nav className='w-full inline-flex'>
            <ul className='flex flex-col gap-4'>
              <li className='flex p-2 gap-1 hover:bg-amber-100 rounded w-40'>
                <img className='h-8' src="src/assets/home-svgrepo-com.svg" alt="" />
                <Link to="/" className="inline-block p-2 text-lg text-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/expenses" className="block p-2 hover:bg-amber-100 rounded">
                  Expenses
                </Link>
              </li>
              <li>
                <Link to="/trips" className="block p-2 hover:bg-amber-100 rounded">
                  Trips
                </Link>
              </li>
              <li>
                <Link to="/approvals" className="block p-2 hover:bg-amber-100 rounded">
                  Approvals
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block p-2 hover:bg-amber-100 rounded">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col">
        <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
          <Outlet />
        </main>

        <footer className='py-4 px-8 text-center border-t'>
          <p>All rights reserved</p>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout