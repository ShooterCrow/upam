import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import './DashboardCalendar.css';
import { useGetEventsQuery } from '../../pages/UserAdminPages/admin/calendarApiSlice';

const DashboardCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [activeMonth, setActiveMonth] = useState(new Date());

    const { data, isLoading } = useGetEventsQuery();
    const events = data?.data

    const handlePrevMonth = () => {
        const prevMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() - 1, 1);
        setActiveMonth(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1, 1);
        setActiveMonth(nextMonth);
    };

    const monthYear = activeMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    // Find event for selected date
    const selectedDateString = date.toDateString();
    const eventOnSelectedDate = events ? events?.find(event => new Date(event.date).toDateString() === selectedDateString) : null;

    // Fallback if no event on selected date: show the next upcoming event
    const upcomingEvent = events ? events?.filter(event => new Date(event.date) >= new Date().setHours(0, 0, 0, 0))
        .sort((a, b) => new Date(a.date) - new Date(b.date))[0] : null;

    const displayEvent = events ? eventOnSelectedDate || upcomingEvent || events[0] : null;

    // Function to check if a date has an event
    const hasEvent = ({ date, view }) => {
        if (view === 'month' && events) {
            return events.some(event => new Date(event.date).toDateString() === date.toDateString());
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-50 overflow-hidden flex flex-col xl:flex-row justify-center items-center">
            <div className="p-6 flex-2">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">{monthYear}</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevMonth}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <ChevronLeft size={20} className="text-slate-400" />
                        </button>
                        <button
                            onClick={handleNextMonth}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <ChevronRight size={20} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="calendar-container">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        activeStartDate={activeMonth}
                        onActiveStartDateChange={({ activeStartDate }) => setActiveMonth(activeStartDate)}
                        nextLabel={null}
                        prevLabel={null}
                        next2Label={null}
                        prev2Label={null}
                        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                        showNavigation={false}
                        tileClassName={({ date, view }) =>
                            hasEvent({ date, view }) ? 'has-event' : null
                        }
                    />
                </div>
            </div>

            <div className="h-fit bottom-0 mb-auto bg-slate-50 p-6 m-4 my-auto rounded-xl flex-1 w-full max-w-[300px]">
                {displayEvent ? (
                    <div className="space-y-3">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-bold text-slate-800">
                                {eventOnSelectedDate ? 'Selected Event' : 'Next Event'}
                            </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-700 leading-tight">
                            {displayEvent.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                            <CalendarIcon size={12} />
                            {new Date(displayEvent.date).toLocaleDateString(undefined, {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="relative aspect-video rounded-lg overflow-hidden mt-2">
                            <img
                                src={displayEvent.image || "/event-women.png"}
                                alt={displayEvent.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[10px] text-slate-600 line-clamp-2">
                            {displayEvent.description}
                        </p>
                        <button className="text-[10px] font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors mt-2">
                            View Event details
                            <ArrowRight size={12} />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                        <CalendarIcon size={32} className="mb-2 opacity-20" />
                        <span className="text-xs">No events scheduled</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardCalendar;
