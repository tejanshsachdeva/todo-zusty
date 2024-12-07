import { useEffect } from 'react';

import AddTaskInput from '@/components/AddTaskInput';
import CalendarHeader from '@/components/CalendarHeader'; 
import CompletedTasksList from '@/components/CompletedTasksList';
import Navbar from '@/components/Navbar';
import OngoingTasksList from '@/components/OngoingTasksList';
import useTasks from '@/hooks/useTasks';

export default function Home() {
  const { tasks, closeExpandedCards } = useTasks(); 

  useEffect(() => {
    closeExpandedCards(); 
  }, [closeExpandedCards]);

  const isAnyCompletedTask = tasks.filter((task) => task.isTaskDone).length !== 0;

  useEffect(() => {
    console.log('Tasks:', tasks); 
  }, [tasks]);

  return (
    <div className="relative mx-auto my-10 flex w-11/12 max-w-xl flex-col gap-14">
      <Navbar />
      <AddTaskInput />
      <CalendarHeader /> {}
      <OngoingTasksList tasks={tasks} /> {}
      {isAnyCompletedTask && <CompletedTasksList tasks={tasks} />} {}
    </div>
  );
}
