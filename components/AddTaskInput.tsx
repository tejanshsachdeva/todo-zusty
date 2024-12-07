import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

import useTasks from '@/hooks/useTasks'

export default function AddTaskInput() {
  const { addTask } = useTasks()
  const [value, setValue] = useState('')

  const handleAddTask = () => {
    if (value.trim().length > 0) { // Only add if value is not empty or just spaces
      addTask(value)
      setValue('') // Clear input field
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-xl border px-5 py-2 pr-16 outline-none transition dark:border-none dark:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value.trim().length !== 0) {
            handleAddTask()
          }
        }}
        placeholder="Add a new task..."
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={handleAddTask}
        title="Add a new task"
        disabled={value.trim().length === 0} 
      >
        <BsPlus size={28} />
      </button>
    </div>
  )
}
