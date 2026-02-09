import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CommunityCalendar.css';

const CommunityCalendar = ({ selectedDate, onDateChange, events = [] }) => {
    const [activeMonth, setActiveMonth] = useState(selectedDate || new Date());

    useEffect(() => {
        if (selectedDate) {
            setActiveMonth(selectedDate);
        }
    }, [selectedDate]);

    const handlePrevMonth = () => {
        const prevMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() - 1, 1);
        setActiveMonth(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1, 1);
        setActiveMonth(nextMonth);
    };

    const monthYear = activeMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    const hasEvent = ({ date, view }) => {
        if (view === 'month' && events) {
            return events.some(event => new Date(event.date).toDateString() === date.toDateString());
        }
        return false;
    };

    return (
        <div className="community-calendar-wrapper">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">{monthYear}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors text-slate-400"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors text-slate-400"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="calendar-container">
                <Calendar
                    onChange={onDateChange}
                    value={selectedDate}
                    activeStartDate={activeMonth}
                    onActiveStartDateChange={({ activeStartDate }) => setActiveMonth(activeStartDate)}
                    nextLabel={null}
                    prevLabel={null}
                    next2Label={null}
                    prev2Label={null}
                    calendarType="gregory"
                    formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                    showNavigation={false}
                    tileClassName={({ date, view }) =>
                        hasEvent({ date, view }) ? 'has-event' : null
                    }
                />
            </div>
        </div>
    );
};

export default CommunityCalendar;
