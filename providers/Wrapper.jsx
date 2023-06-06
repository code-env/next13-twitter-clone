"use client"

import { useSelector } from "react-redux"

const Wrapper = ({ children }) => {
    
    const modal = useSelector(state => state.modal)

  return (
      <main className="relative">
          {children}
          {modal && (
        <div className="justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          h-screen
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70">
          this is the modal container
        </div>
          )}
    </main>
  )
}

export default Wrapper