import React, { useState } from 'react';
import { useGetChaptersQuery, useDeleteChapterMutation } from './chaptersApiSlice';
import { MoreVertical, Plus, Edit2, Trash2, Globe, FileText, Image as ImageIcon } from 'lucide-react';
import LoadingState from '../../../../component/ui/LoadingState';
import ErrorState from '../../../../component/ui/ErrorState';
import ChapterForm from './ChapterForm';
import { toast } from 'react-toastify';

const Chapters = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [showActionMenu, setShowActionMenu] = useState(null);

    const { data: chapters, isLoading, isError, error, refetch } = useGetChaptersQuery();
    const [deleteChapter] = useDeleteChapterMutation();

    const handleEdit = (chapter) => {
        setSelectedChapter(chapter);
        setIsModalOpen(true);
        setShowActionMenu(null);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this chapter?')) {
            try {
                await deleteChapter(id).unwrap();
                toast.success('Chapter deleted successfully');
                setShowActionMenu(null);
            } catch (err) {
                toast.error(err?.data?.message || 'Failed to delete chapter');
            }
        }
    };

    const handleAddNew = () => {
        setSelectedChapter(null);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <LoadingState message="Fetching chapters..." />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <ErrorState
                    message={error?.data?.message || "Could not load chapters"}
                    onRetry={refetch}
                />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="bg-white px-6 py-4 border border-gray-100 flex justify-between items-center shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Chapters Management</h2>
                    <p className="text-sm text-slate-500">Manage all organization chapters</p>
                </div>

                <button
                    onClick={handleAddNew}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                >
                    <Plus size={18} />
                    Add New Chapter
                </button>
            </div>

            {/* Table */}
            <div className="mt-6 bg-white border border-gray-100 overflow-hidden rounded-2xl shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Chapter ID</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Name</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">URL Slug</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider text-center">Flag</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Note</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {chapters?.map((chapter) => (
                                <tr key={chapter._id} className="group hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5 text-sm font-bold text-slate-700">
                                        {chapter.chapter_id}
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-blue-600">{chapter.chapter_name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Globe size={14} className="text-slate-400" />
                                            {chapter.chapter_url}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        {chapter.chapter_flag ? (
                                            <div className="flex justify-center">
                                                <img
                                                    src={chapter.chapter_flag}
                                                    alt={chapter.chapter_name}
                                                    className="w-10 h-6 object-cover rounded shadow-sm border border-slate-200"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/40x24?text=Flag';
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <ImageIcon size={20} className="mx-auto text-slate-300" />
                                        )}
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="max-w-xs truncate text-sm text-slate-500 italic" title={chapter.chapter_note}>
                                            {chapter.chapter_note || '---'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 relative">
                                        <button
                                            onClick={() => setShowActionMenu(showActionMenu === chapter._id ? null : chapter._id)}
                                            className="text-slate-400 hover:text-slate-600 p-1"
                                        >
                                            <MoreVertical size={20} />
                                        </button>

                                        {showActionMenu === chapter._id && (
                                            <div className="absolute right-6 top-12 w-36 bg-white rounded-xl border border-gray-100 z-10 py-1 shadow-xl animate-in fade-in zoom-in-95">
                                                <button
                                                    onClick={() => handleEdit(chapter)}
                                                    className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                                                >
                                                    <Edit2 size={14} />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(chapter._id)}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                                >
                                                    <Trash2 size={14} />
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {chapters?.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <FileText size={40} className="text-slate-200" />
                                            <p className="text-slate-400 font-medium">No chapters registered yet</p>
                                            <button
                                                onClick={handleAddNew}
                                                className="text-blue-600 text-sm font-bold hover:underline"
                                            >
                                                Add your first chapter
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ChapterForm
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedChapter(null);
                }}
                chapter={selectedChapter}
            />
        </div>
    );
};

export default Chapters;
