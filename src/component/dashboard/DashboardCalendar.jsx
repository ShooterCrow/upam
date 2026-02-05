import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import './DashboardCalendar.css';

const DashboardCalendar = () => {
    const [date, setDate] = useState(new Date(2026, 2, 1)); // March 2026 as in mockup

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden flex flex-col xl:flex-row justify-center items-center">
            <div className="p-6 flex-2">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">March 2026</h3>
                    <div className="flex gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronLeft size={20} className="text-slate-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronRight size={20} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="calendar-container">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        nextLabel={null}
                        prevLabel={null}
                        next2Label={null}
                        prev2Label={null}
                        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                        showNavigation={false}
                    />
                </div>
            </div>

            <div className="h-fit bottom-0 mb-auto bg-slate-50 p-6 m-4 my-auto rounded-xl flex-1">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-slate-800">Event</span>
                </div>
                <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-700 leading-tight">
                        International Women's Day Empowerment Program
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <CalendarIcon size={12} />
                        March 1st - 8th 2026
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden mt-2">
                        <img
                            src="/event-women.png"
                            alt="Women Empowerment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="text-[10px] font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors mt-2">
                        Add Event to Calender
                        <ArrowRight size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardCalendar;
