import { addDays, format, subDays } from 'date-fns';
import React, { useState } from 'react';

const CalendarHeader: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

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

    </div>
  );
};

export default CalendarHeader;
