import React from 'react'

function TodoApp() {
  return (
    <div className="min-h-[80vh]  flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold  mb-4 tracking-tight sm:text-5xl">
          Streamline Your Day with <span className="text-blue-600">Todoapp</span>
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg text-gray-500 leading-relaxed">
          Manage your daily productivity with ease. Our React-powered todo application 
          helps you organize tasks, set priorities, and track your progress all in one 
          minimalist interface. Stay focused on what matters most and leave the 
          organization to us.
        </p>
      </div>
    </div>
  )
}

export default TodoApp