import React, { useEffect, useMemo, useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    FileText,
    Search,
    Upload,
    X,
} from 'lucide-react';

const initialAssignments = [
    {
        id: 1,
        title: 'Wireframing Assignment',
        course: 'UI/UX Design',
        module: 'Module 2: User Research',
        description: 'Create low-fidelity wireframes for the mobile banking app screens discussed in class.',
        dueDate: '2025-05-28',
        status: 'Pending',
        files: ['Brief.pdf', 'Reference.png'],
    },
    {
        id: 2,
        title: 'User Persona Task',
        course: 'UI/UX Design',
        module: 'Module 2: User Research',
        description: 'Develop two user personas based on the research data provided.',
        dueDate: '2025-05-31',
        status: 'In Progress',
        files: ['Persona_Template.docx'],
    },
    {
        id: 3,
        title: 'Information Architecture',
        course: 'UI/UX Design',
        module: 'Module 3: Information Architecture',
        description: 'Create a sitemap and user flow for the e-commerce website.',
        dueDate: '2025-05-22',
        status: 'Submitted',
        submittedDate: '2025-05-22',
        files: ['Sitemap_Guide.pdf', 'User_Flow_Example.png'],
    },
    {
        id: 4,
        title: 'Competitor Analysis',
        course: 'UI/UX Design',
        module: 'Module 3: Information Architecture',
        description: 'Analyze 3 competitor products and present your insights.',
        dueDate: '2025-05-20',
        status: 'Graded',
        submittedDate: '2025-05-20',
        grade: '85%',
        files: ['Analysis_Template.xlsx'],
    },
    {
        id: 5,
        title: 'Accessibility Audit',
        course: 'UI/UX Design',
        module: 'Module 4: UI Design',
        description: 'Conduct an accessibility audit on the provided website and document issues.',
        dueDate: '2025-06-05',
        status: 'Not Started',
        files: ['Audit_Checklist.pdf'],
    },
];

const statusStyles = {
    Pending: 'bg-rose-50 text-rose-600',
    'In Progress': 'bg-orange-50 text-orange-600',
    Submitted: 'bg-emerald-50 text-emerald-600',
    Graded: 'bg-indigo-50 text-indigo-600',
    'Not Started': 'bg-slate-100 text-slate-600',
};

const statusIconStyles = {
    Pending: 'bg-rose-50 text-rose-500',
    'In Progress': 'bg-orange-50 text-orange-500',
    Submitted: 'bg-emerald-50 text-emerald-500',
    Graded: 'bg-sky-50 text-sky-500',
    'Not Started': 'bg-slate-100 text-slate-500',
};

const formatDate = (dateString, options = { month: 'short', day: 'numeric', year: 'numeric' }) =>
    new Date(`${dateString}T12:00:00`).toLocaleDateString('en-US', options);

const dateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const formatDeadlineCountdown = (dateString) => {
    const daysLeft = Math.ceil(
        (new Date(`${dateString}T12:00:00`) - new Date('2025-05-27T12:00:00')) / 86400000,
    );
    return `${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left`;
};

function AssignmentModal({ assignment, onClose, onSubmit }) {
    const [file, setFile] = useState(null);
    const isComplete = assignment.status === 'Submitted' || assignment.status === 'Graded';

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="assignment-dialog-title"
                className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {assignment.course} · {assignment.module}
                        </p>
                        <h2 id="assignment-dialog-title" className="text-xl font-bold text-slate-900">
                            {assignment.title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close assignment details"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                    >
                        <X size={18} />
                    </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{assignment.description}</p>
                <p className="mt-4 text-sm font-medium text-slate-700">
                    Due {formatDate(assignment.dueDate)}
                </p>
                <div className="mt-5">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Resources
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {assignment.files.map((name) => (
                            <span key={name} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs text-slate-600">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
                {assignment.status === 'Graded' && (
                    <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                        Grade: <strong>{assignment.grade}</strong>
                    </div>
                )}
                {assignment.status === 'Submitted' && (
                    <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                        Submitted {formatDate(assignment.submittedDate)}
                    </div>
                )}
                {!isComplete && (
                    <form
                        className="mt-6 border-t border-slate-100 pt-5"
                        onSubmit={(event) => {
                            event.preventDefault();
                            if (file) onSubmit(assignment.id, file.name);
                        }}
                    >
                        <label
                            htmlFor="assignment-file"
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 hover:border-slate-500"
                        >
                            <Upload size={17} />
                            {file ? file.name : 'Choose a file to submit'}
                        </label>
                        <input
                            id="assignment-file"
                            type="file"
                            className="sr-only"
                            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                        />
                        <p className="mt-2 text-xs text-slate-400">
                            Submission is saved for this browser session only.
                        </p>
                        <button
                            type="submit"
                            disabled={!file}
                            className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Submit assignment
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
}

function AssignmentCard({ assignment, onOpen }) {
    const buttonLabel = assignment.status === 'In Progress' ? 'Continue' : 'View Assignment';

    return (
        <article className="grid min-h-[106px] grid-cols-[30px_minmax(0,1fr)] gap-x-3 gap-y-2 rounded-xl bg-white px-3 py-3 sm:grid-cols-[30px_minmax(0,1fr)_82px] sm:gap-x-3 sm:gap-y-0">
            <div className={`flex h-[30px] w-[30px] items-center justify-center rounded-[9px] ${statusIconStyles[assignment.status]}`}>
                <FileText size={15} strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
                <h2 className="truncate text-[10px] font-bold leading-[13px] text-slate-900">{assignment.title}</h2>
                <p className="mt-px truncate text-[8px] leading-[11px] text-slate-500">
                    {assignment.course} · {assignment.module}
                </p>
                <p className="mt-2 line-clamp-2 text-[9px] leading-[13px] text-slate-500">{assignment.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                    {assignment.files.slice(0, 2).map((name) => (
                        <span key={name} className="max-w-full truncate rounded bg-slate-100 px-1.5 py-0.5 text-[7px] leading-[10px] text-slate-500">
                            {name}
                        </span>
                    ))}
                    {assignment.files.length > 2 && (
                        <span className="px-1 py-0.5 text-[7px] leading-[10px] text-slate-600">
                            +{assignment.files.length - 2} more
                        </span>
                    )}
                </div>
            </div>
            <div className="col-start-2 row-start-2 flex flex-row items-center justify-between gap-3 sm:col-start-3 sm:row-start-1 sm:flex-col sm:items-end sm:justify-between">
                <span className={`rounded px-1.5 py-0.5 text-[8px] font-semibold leading-[11px] ${statusStyles[assignment.status]}`}>
                    {assignment.status}
                </span>
                <div className="w-full text-right">
                    {assignment.grade && (
                        <p className="text-[8px] font-bold leading-[11px] text-emerald-600">Score: {assignment.grade}</p>
                    )}
                    <p className="text-[8px] font-semibold leading-[11px] text-slate-800">
                        {assignment.status === 'Submitted'
                            ? `Submitted: ${formatDate(assignment.submittedDate, { month: 'short', day: 'numeric', year: 'numeric' })}`
                            : assignment.status === 'Graded'
                                ? `Reviewed: ${formatDate(assignment.submittedDate, { month: 'short', day: 'numeric', year: 'numeric' })}`
                                : `Due: ${formatDate(assignment.dueDate, { month: 'short', day: 'numeric', year: 'numeric' })}`}
                    </p>
                    <p className="text-[7px] leading-[9px] text-slate-400">
                        {assignment.status === 'Submitted' ? '11:59 PM' : assignment.status === 'Graded' ? '11:59 PM' : '11:59 PM'}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => onOpen(assignment)}
                    className="whitespace-nowrap rounded-[5px] border border-slate-400 px-2 py-1 text-[7px] font-medium leading-[9px] text-slate-800 hover:border-slate-600 hover:bg-slate-50"
                >
                    {assignment.status === 'Submitted' || assignment.status === 'Graded' ? 'View Feedback' : buttonLabel}
                </button>
            </div>
        </article>
    );
}

function CalendarPanel({ assignments, month, setMonth }) {
    const [selectedDate, setSelectedDate] = useState('2025-05-27');
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const leadingDays = firstDay.getDay();
    const days = [
        ...Array.from({ length: leadingDays }, (_, index) => ({
            key: `empty-${index}`,
            day: null,
        })),
        ...Array.from({ length: daysInMonth }, (_, index) => {
            const date = new Date(month.getFullYear(), month.getMonth(), index + 1);
            return { key: dateKey(date), day: index + 1, dateKey: dateKey(date) };
        }),
    ];
    const deadlines = new Set(assignments.map((assignment) => assignment.dueDate));

    const moveMonth = (amount) => {
        setMonth(new Date(month.getFullYear(), month.getMonth() + amount, 1));
    };

    return (
        <section className="rounded-xl bg-[#fff0f1] px-3 py-3">
            <h2 className="text-[10px] font-bold leading-4 text-slate-900">Calendar</h2>
            <div className="mt-1 flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => moveMonth(-1)}
                    aria-label="Previous month"
                    className="rounded p-0.5 text-slate-500 hover:bg-white"
                >
                    <ChevronLeft size={13} />
                </button>
                <p className="text-[9px] font-bold text-slate-800">
                    {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
                <button
                    type="button"
                    onClick={() => moveMonth(1)}
                    aria-label="Next month"
                    className="rounded p-0.5 text-slate-500 hover:bg-white"
                >
                    <ChevronRight size={13} />
                </button>
            </div>
            <div className="mt-2 grid grid-cols-7 gap-y-0.5 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <span key={day} className="py-1 text-[7px] font-semibold text-slate-500">{day}</span>
                ))}
                {days.map(({ key, day, dateKey: calendarDate }) => (
                    <span key={key} className="flex h-[21px] items-center justify-center">
                        {day && (
                            <button
                                type="button"
                                onClick={() => setSelectedDate(calendarDate)}
                                aria-label={`${month.toLocaleDateString('en-US', { month: 'long' })} ${day}${deadlines.has(calendarDate) ? ', assignment due' : ''}`}
                                aria-pressed={selectedDate === calendarDate}
                                className={`relative flex h-[18px] w-[18px] items-center justify-center rounded-full text-[7px] ${
                                    selectedDate === calendarDate
                                        ? 'bg-slate-900 font-bold text-white'
                                        : 'text-slate-700 hover:bg-white'
                                }`}
                            >
                                {day}
                                {deadlines.has(calendarDate) && selectedDate !== calendarDate && (
                                    <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-rose-500" />
                                )}
                            </button>
                        )}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default function Assignments() {
    const [assignments, setAssignments] = useState(initialAssignments);
    const [activeTab, setActiveTab] = useState('All Assignments');
    const [search, setSearch] = useState('');
    const [course, setCourse] = useState('All Courses');
    const [module, setModule] = useState('All Modules');
    const [sortBy, setSortBy] = useState('dueDate');
    const [month, setMonth] = useState(() => new Date(2025, 4, 1));
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const courses = useMemo(() => [...new Set(assignments.map((item) => item.course))], [assignments]);
    const modules = useMemo(
        () => [...new Set(assignments.filter((item) => course === 'All Courses' || item.course === course).map((item) => item.module))],
        [assignments, course],
    );
    const counts = useMemo(() => ({
        Pending: assignments.filter((item) => ['Pending', 'In Progress', 'Not Started'].includes(item.status)).length,
        'In Progress': assignments.filter((item) => item.status === 'In Progress').length,
        Submitted: assignments.filter((item) => item.status === 'Submitted').length,
        Graded: assignments.filter((item) => item.status === 'Graded').length,
        'Not Started': assignments.filter((item) => item.status === 'Not Started').length,
    }), [assignments]);

    const filteredAssignments = useMemo(() => {
        const query = search.trim().toLowerCase();
        const visible = assignments.filter((item) => {
            const matchesTab = activeTab === 'All Assignments'
                || (activeTab === 'Pending' && ['Pending', 'In Progress', 'Not Started'].includes(item.status))
                || item.status === activeTab;
            const matchesCourse = course === 'All Courses' || item.course === course;
            const matchesModule = module === 'All Modules' || item.module === module;
            const matchesSearch = !query || [
                item.title,
                item.course,
                item.module,
                item.description,
                ...item.files,
            ].some((value) => value.toLowerCase().includes(query));
            return matchesTab && matchesCourse && matchesModule && matchesSearch;
        });

        return visible.sort((a, b) => {
            if (sortBy === 'title') return a.title.localeCompare(b.title);
            if (sortBy === 'status') return a.status.localeCompare(b.status) || a.dueDate.localeCompare(b.dueDate);
            return a.dueDate.localeCompare(b.dueDate);
        });
    }, [activeTab, assignments, course, module, search, sortBy]);

    const upcomingAssignments = useMemo(
        () => assignments
            .filter((item) => !['Submitted', 'Graded'].includes(item.status))
            .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
            .slice(0, 3),
        [assignments],
    );

    const submitAssignment = (assignmentId, filename) => {
        setAssignments((current) => current.map((item) => (
            item.id === assignmentId
                ? { ...item, status: 'Submitted', submittedDate: dateKey(new Date()), files: [...item.files, filename] }
                : item
        )));
        setSelectedAssignment(null);
    };

    const tabs = [
        { label: 'All Assignments' },
        { label: 'Pending', count: counts.Pending },
        { label: 'Submitted', count: counts.Submitted },
        { label: 'Graded', count: counts.Graded },
    ];

    return (
        <main className="min-h-screen bg-[#f9f9f9] text-slate-800">
            <div className="grid min-h-screen grid-cols-1 items-start sm:grid-cols-[minmax(0,7fr)_minmax(190px,3fr)]">
                <section className="min-w-0 px-[14px] pb-6 pt-[14px]">
                    <header className="mb-[14px]">
                        <h1 className="text-[18px] font-bold leading-[22px] tracking-tight text-slate-900">Assignments</h1>
                        <p className="mt-1 text-[9px] leading-3 text-slate-500">View, submit and track all your course assignments.</p>
                    </header>

                    <div className="mb-[17px] flex gap-[14px] overflow-x-auto" role="tablist" aria-label="Assignment status">
                        {tabs.map(({ label, count }) => (
                            <button
                                key={label}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === label}
                                onClick={() => setActiveTab(label)}
                                className={`flex shrink-0 items-center gap-1 border-b pb-[5px] text-[9px] leading-[13px] transition-colors ${
                                    activeTab === label
                                        ? 'border-[#ff6b22] font-semibold text-[#f05a18]'
                                        : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                            >
                                {label}
                                {count !== undefined && (
                                    <span className={label === 'Pending' ? 'text-rose-500' : 'text-slate-500'}>{count}</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mb-[15px] grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] sm:gap-2">
                        <label className="flex h-[21px] min-w-0 items-center gap-1.5 rounded-[6px] border border-slate-200 bg-white px-1.5">
                            <Search size={11} className="shrink-0 text-slate-400" />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search assignments..."
                                aria-label="Search assignments"
                                className="min-w-0 flex-1 bg-transparent text-[8px] outline-none placeholder:text-slate-400"
                            />
                        </label>
                        <select
                            value={course}
                            onChange={(event) => {
                                setCourse(event.target.value);
                                setModule('All Modules');
                            }}
                            aria-label="Filter by course"
                            className="h-[21px] min-w-0 rounded-[6px] border border-slate-200 bg-white px-1.5 text-[8px] text-slate-600 outline-none"
                        >
                            <option>All Courses</option>
                            {courses.map((item) => <option key={item}>{item}</option>)}
                        </select>
                        <select
                            value={module}
                            onChange={(event) => setModule(event.target.value)}
                            aria-label="Filter by module"
                            className="h-[21px] min-w-0 rounded-[6px] border border-slate-200 bg-white px-1.5 text-[8px] text-slate-600 outline-none"
                        >
                            <option>All Modules</option>
                            {modules.map((item) => <option key={item}>{item}</option>)}
                        </select>
                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            aria-label="Sort assignments"
                            className="h-[21px] min-w-0 rounded-[6px] border border-slate-200 bg-white px-1.5 text-[8px] text-slate-600 outline-none"
                        >
                            <option value="dueDate">Sort by: Due Date</option>
                            <option value="title">Sort by: Title</option>
                            <option value="status">Sort by: Status</option>
                        </select>
                    </div>

                    <div className="space-y-3">
                        {filteredAssignments.length > 0 ? filteredAssignments.map((assignment) => (
                            <AssignmentCard
                                key={assignment.id}
                                assignment={assignment}
                                onOpen={setSelectedAssignment}
                            />
                        )) : (
                            <div className="rounded-2xl bg-white px-5 py-12 text-center">
                                <Search className="mx-auto text-slate-300" size={24} />
                                <p className="mt-3 text-sm font-semibold text-slate-700">No assignments found</p>
                                <p className="mt-1 text-xs text-slate-500">Try another search or change your filters.</p>
                            </div>
                        )}
                    </div>
                </section>

                <aside className="space-y-[14px] bg-white px-[10px] pb-6 pt-[10px]">
                    <section className="rounded-xl bg-[#f7f7f7] px-3 py-3">
                        <h2 className="text-[10px] font-bold leading-4 text-slate-900">Assignment Overview</h2>
                        <div className="mt-2 space-y-[9px]">
                            <div className="flex justify-between text-[8px]">
                                <span className="text-slate-500">Total Assignments</span>
                                <strong>{assignments.length}</strong>
                            </div>
                            {[
                                { label: 'Pending', count: counts.Pending, color: 'bg-rose-500' },
                                { label: 'In Progress', count: counts['In Progress'], color: 'bg-orange-500' },
                                { label: 'Submitted', count: counts.Submitted, color: 'bg-emerald-500' },
                                { label: 'Graded', count: counts.Graded, color: 'bg-indigo-500' },
                                { label: 'Not Started', count: counts['Not Started'], color: 'bg-slate-400' },
                            ].map(({ label, count, color }) => (
                                <div key={label} className="grid grid-cols-[84px_1fr_12px] items-center gap-1.5 text-[8px]">
                                    <span className="text-slate-500">{label}</span>
                                    <span className="h-[3px] overflow-hidden rounded-full bg-slate-100">
                                        <span
                                            className={`block h-full rounded-full ${color}`}
                                            style={{ width: `${assignments.length ? (count / assignments.length) * 100 : 0}%` }}
                                        />
                                    </span>
                                    <strong className="text-right">{count}</strong>
                                </div>
                            ))}
                        </div>
                    </section>

                    <CalendarPanel assignments={assignments} month={month} setMonth={setMonth} />

                    <section className="rounded-xl bg-[#f7f7f7] px-3 py-3">
                        <h2 className="text-[10px] font-bold leading-4 text-slate-900">Upcoming Deadlines</h2>
                        <div className="mt-2 space-y-2">
                            {upcomingAssignments.length ? upcomingAssignments.map((assignment) => (
                                <button
                                    key={assignment.id}
                                    type="button"
                                    onClick={() => setSelectedAssignment(assignment)}
                                    className="flex w-full items-center gap-2 rounded-lg bg-white p-2 text-left hover:bg-slate-100"
                                >
                                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${statusIconStyles[assignment.status]}`}>
                                        <FileText size={13} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block truncate text-[8px] font-semibold leading-[10px] text-slate-800">{assignment.title}</span>
                                        <span className="block truncate text-[7px] leading-[9px] text-slate-500">
                                            {assignment.course} · {formatDate(assignment.dueDate, { month: 'short', day: 'numeric' })}
                                        </span>
                                    </span>
                                    <span className="shrink-0 text-[7px] font-medium text-rose-500">
                                        {formatDeadlineCountdown(assignment.dueDate)}
                                    </span>
                                </button>
                            )) : (
                                <p className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500">No upcoming deadlines.</p>
                            )}
                        </div>
                    </section>
                </aside>
            </div>
            {selectedAssignment && (
                <AssignmentModal
                    assignment={selectedAssignment}
                    onClose={() => setSelectedAssignment(null)}
                    onSubmit={submitAssignment}
                />
            )}
        </main>
    );
}
