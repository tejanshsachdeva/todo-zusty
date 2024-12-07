import { addDays, format, isSameDay, subDays } from 'date-fns';
import React, { useEffect,useState } from 'react';

import useTasks from '@/hooks/useTasks';

const CalendarHeader: React.FC = () => {
  const { tasks } = useTasks();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [tasksForToday, setTasksForToday] = useState<{ id: string; title: string; dueDate: string; isTaskDone: boolean; isImportant?: boolean }[]>([]);

  useEffect(() => {
    const tasksToday = tasks
      .filter(
        (task) =>
          task.dueDate &&
          isSameDay(new Date(task.dueDate), currentDate) &&
          !task.isTaskDone
      )
      .map((task) => ({
        ...task,
        dueDate: task.dueDate ? task.dueDate.toISOString() : '',
      }));
    setTasksForToday(tasksToday);
  }, [currentDate, tasks]);

  const goToPreviousDay = () => setCurrentDate((prev) => subDays(prev, 1));
  const goToNextDay = () => setCurrentDate((prev) => addDays(prev, 1));

  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <button
          className="rounded border px-3 py-2 hover:bg-gray-100"
          onClick={goToPreviousDay}
        >
          &lt;
        </button>
        <div className="text-lg font-semibold">
          {format(currentDate, 'EEEE, MMMM dd, yyyy')}
        </div>
        <button
          className="rounded border px-3 py-2 hover:bg-gray-100"
          onClick={goToNextDay}
        >
          &gt;
        </button>
      </header>

      <div className="mt-4">
        {tasksForToday.length > 0 ? (
          tasksForToday.map((task) => (
            <div
              key={task.id}
              className="flex items-center border-b p-2 last:border-0"
            >
              <span className="flex-1">{task.title}</span>
              {task.isImportant && (
                <span className="font-bold text-red-500">!</span>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No tasks for today</div>
        )}
      </div>
    </div>
  );
};

export default CalendarHeader;
