import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
    Plus,
    MessageSquare,
    Clock,
    Image as ImageIcon,
    X,
    CheckCircle2,
    AlertCircle,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetEventsQuery, useCreateEventMutation } from './calendarApiSlice';
import useAuth from '../../../hooks/useAuth';
import CommunityCalendar from '../../../component/calendar/CommunityCalendar';

const UPAMCalender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 12)); // Feb 12, 2026
    const [viewMode, setViewMode] = useState('calendar'); // 'calendar', 'details', 'add'
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { data: eventsData, isLoading, isError, refetch } = useGetEventsQuery();
    const { roles } = useAuth();
    const isAdmin = roles?.includes('admin') || roles?.includes('manager');

    const events = eventsData?.data || [];

    // Unified Form State as per mockup
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        category: 'Event',
        imageFile: null,
        imagePreview: null
    });

    const [createEvent, { isLoading: isCreating, isSuccess: isSuccessState }] = useCreateEventMutation();

    const handleAddClick = () => {
        const dateStr = selectedDate.toISOString().split('T')[0];
        setFormData({
            title: '',
            description: '',
            date: dateStr,
            category: 'Event',
            imageFile: null,
            imagePreview: null
        });
        setViewMode('add');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                imageFile: file,
                imagePreview: URL.createObjectURL(file)
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submitData = new FormData();
            submitData.append('title', formData.title);
            submitData.append('description', formData.description);
            submitData.append('date', formData.date);
            submitData.append('category', formData.category);
            if (formData.imageFile) {
                submitData.append('image', formData.imageFile);
            }

            await createEvent(submitData).unwrap();
            refetch();
            setViewMode('calendar');
        } catch (err) {
            console.error('Failed to create event/announcement:', err);
        }
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setSelectedDate(new Date(event.date));
        setViewMode('details');
    };

    // Helper to check if a date has events
    const getEventsForDate = (date) => {
        return events.filter(e => {
            const eventDate = new Date(e.date);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    return (
        <div>
            <div className="mb-3">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">UPAM Calendar</h1>
                <p className="text-slate-500 font-medium">
                    Events of the year
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 h-full animate-in fade-in duration-500">

                {/* Sidebar - Left Column */}
                <aside className="lg:w-80 flex flex-col gap-6">
                    {/* Mini Calendar Card */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <CommunityCalendar
                            selectedDate={selectedDate}
                            onDateChange={(date) => {
                                setSelectedDate(date);
                                setViewMode('calendar');
                            }}
                            events={events}
                        />
                    </div>

                    {/* Add Event Button & List */}
                    <div className="flex flex-col gap-4">
                        {isAdmin && (
                            <button
                                onClick={handleAddClick}
                                className={`w-full text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${viewMode === 'add' ? 'bg-blue-600' : 'bg-blue-600 hover:bg-blue-600'}`}
                            >
                                <Plus size={20} />
                                Add Events & Annoucements
                            </button>
                        )}

                        <div className="relative group">
                            <button className="w-full py-3 bg-white border border-gray-100 text-slate-600 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                                Events <ChevronDown size={16} />
                            </button>
                        </div>

                        <div className="space-y-3 mt-2">
                            {isLoading ? (
                                <div className="flex justify-center p-4"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>
                            ) : events.length === 0 ? (
                                <div className="text-center py-10 px-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                                    <CalendarIcon className="mx-auto text-slate-300 mb-2" size={32} />
                                    <p className="text-sm font-medium text-slate-500">No Events Created yet</p>
                                </div>
                            ) : (
                                events.slice().reverse().map((event) => (
                                    <button
                                        key={event._id}
                                        onClick={() => handleEventClick(event)}
                                        className={`w-full p-4 rounded-2xl flex items-center gap-4 text-left transition-all group ${selectedEvent?._id === event._id ? 'bg-blue-50 border-blue-100' : 'bg-white border border-gray-50 hover:border-blue-200'}`}
                                    >
                                        <div className={`p-2 rounded-lg transition-colors ${event.category === 'Announcement' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                                            {event.category === 'Announcement' ? <MessageSquare size={18} /> : <CalendarIcon size={18} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-slate-800 truncate">{event.title}</h4>
                                            <p className="text-[10px] text-slate-500">{new Date(event.date).toLocaleDateString()}</p>
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </aside>

                {/* Main View Panel - Right Column */}
                <main className="flex-1 min-h-[600px] overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                        {viewMode === 'calendar' && (
                            <motion.div
                                key="calendar-view"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="bg-white rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col min-h-[700px]"
                            >
                                {/* Calendar Header */}
                                <div className="p-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex bg-slate-50 p-1 rounded-xl">
                                            <button
                                                onClick={() => setSelectedDate(new Date())}
                                                className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-bold text-slate-700"
                                            >
                                                Today
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-600 px-3"><ChevronLeft size={18} /></button>
                                            <button className="p-2 text-slate-400 hover:text-slate-600 px-3"><ChevronRight size={18} /></button>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800">
                                            {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                        </h3>
                                    </div>
                                </div>

                                {/* Full Month Calendar Grid */}
                                <div className="flex-1 p-4">
                                    <div className="grid grid-cols-7 h-full">
                                        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                                            <div key={day} className="p-3 text-center text-xs font-bold text-slate-400 border-b border-gray-50">
                                                {day}
                                            </div>
                                        ))}
                                        {/* Simplified Calendar Gen for Display */}
                                        {Array.from({ length: 35 }).map((_, i) => {
                                            const displayDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
                                            const startDay = displayDate.getDay();
                                            const dayNum = i - startDay + 1;
                                            const cellDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), dayNum);
                                            const isCurrentMonth = cellDate.getMonth() === selectedDate.getMonth();
                                            const cellEvents = getEventsForDate(cellDate);
                                            const isToday = cellDate.toDateString() === new Date().toDateString();
                                            const isSelected = cellDate.toDateString() === selectedDate.toDateString();

                                            return (
                                                <div
                                                    key={i}
                                                    onClick={() => setSelectedDate(cellDate)}
                                                    className={`min-h-[120px] p-2 border-b border-r border-gray-50 cursor-pointer transition-colors group relative ${!isCurrentMonth ? 'bg-slate-50/20' : 'hover:bg-slate-50/50'} ${isSelected ? 'bg-blue-50/30' : ''}`}
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <span className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full transition-colors ${isToday ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : isCurrentMonth ? 'text-slate-600' : 'text-slate-300'} ${isSelected && !isToday ? 'border-2 border-blue-600' : ''}`}>
                                                            {cellDate.getDate()}
                                                        </span>

                                                        <div className="mt-2 w-full space-y-1">
                                                            {cellEvents.map(ev => (
                                                                <div
                                                                    key={ev._id}
                                                                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold truncate flex items-center gap-1 ${ev.category === 'Announcement' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}
                                                                >
                                                                    <div className={`w-1 h-1 rounded-full ${ev.category === 'Announcement' ? 'bg-red-500' : 'bg-blue-500'}`} />
                                                                    {ev.title}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {viewMode === 'details' && selectedEvent && (
                            <motion.div
                                key="details-view"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row h-full min-h-[600px]"
                            >
                                <div className="flex-1 p-10 space-y-8 flex flex-col">
                                    <button
                                        onClick={() => setViewMode('calendar')}
                                        className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors self-start"
                                    >
                                        <ChevronLeft size={20} /> Back to Calendar
                                    </button>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Title</h4>
                                            <h2 className="text-3xl font-bold text-slate-800 leading-tight">{selectedEvent.title}</h2>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h4>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {selectedEvent.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 flex flex-wrap gap-8">
                                            <div>
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Date</h4>
                                                <div className="flex items-center gap-2 text-slate-700 font-bold">
                                                    <CalendarIcon size={18} className="text-blue-500" />
                                                    {new Date(selectedEvent.date).toLocaleDateString(undefined, {
                                                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                            {selectedEvent.category && (
                                                <div>
                                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</h4>
                                                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${selectedEvent.category === 'Announcement' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                                        {selectedEvent.category}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-[40%] bg-slate-50 relative min-h-[300px]">
                                    {selectedEvent.image ? (
                                        <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-200 gap-4 p-12 text-center">
                                            <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-sm">
                                                <ImageIcon size={40} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-400">No banner image uploaded</p>
                                                <p className="text-xs text-slate-300 mt-2">Update this event to add a professional hero image</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {viewMode === 'add' && (
                            <motion.div
                                key="add-view"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-800">Add Events & Announcements</h2>
                                        <p className="text-sm text-slate-500">Create new entries for the African community calendar</p>
                                    </div>
                                    <button
                                        onClick={() => setViewMode('calendar')}
                                        className="p-3 hover:bg-slate-50 rounded-2xl transition-colors text-slate-400"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div className="space-y-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Event Title</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                                placeholder="Enter event title"
                                                value={formData.title}
                                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Event Description</label>
                                            <textarea
                                                rows="4"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                                placeholder="Detailed description..."
                                                value={formData.description}
                                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Event Date</label>
                                                <input
                                                    type="date"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                    value={formData.date}
                                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Category</label>
                                                <select
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                                                    value={formData.category}
                                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                                >
                                                    <option>Event</option>
                                                    <option>Announcement</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setViewMode('calendar')}
                                                className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-all"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isCreating}
                                                className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-100 transition-all disabled:opacity-50"
                                            >
                                                {isCreating ? 'Creating...' : 'Add Event'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                                            <h4 className="text-sm font-bold text-slate-700">Upload Image</h4>
                                            <input
                                                type="file"
                                                id="eventImage"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <label
                                                htmlFor="eventImage"
                                                className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:border-blue-500 transition-all cursor-pointer relative overflow-hidden bg-slate-50"
                                            >
                                                {formData.imagePreview ? (
                                                    <img src={formData.imagePreview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                                ) : (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="p-4 bg-white rounded-full shadow-sm text-slate-400 group-hover:text-blue-500 transition-colors">
                                                            <ImageIcon size={32} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-700">Upload Banner Image</p>
                                                            <p className="text-xs text-slate-400 mt-1">Drag and drop or click to choose files</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </label>
                                        </div>

                                        {/* Announcement Preview Logic */}
                                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                            <h4 className="text-sm font-bold text-slate-700 mb-4">Preview</h4>
                                            <div className={`p-6 rounded-2xl border ${formData.category === 'Announcement' ? 'bg-red-50/50 border-red-100' : 'bg-blue-50/50 border-blue-100'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className={`w-2 h-2 rounded-full ${formData.category === 'Announcement' ? 'bg-red-600' : 'bg-blue-600'}`} />
                                                    <span className={`text-[10px] uppercase font-bold tracking-wider ${formData.category === 'Announcement' ? 'text-red-600' : 'text-blue-600'}`}>
                                                        {formData.category}
                                                    </span>
                                                </div>
                                                <h5 className="font-bold text-slate-800 text-sm truncate">{formData.title || 'Draft Title'}</h5>
                                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{formData.description || 'Description will appear here...'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>

            </div>
        </div>
    );
};

const ChevronDown = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);

export default UPAMCalender;