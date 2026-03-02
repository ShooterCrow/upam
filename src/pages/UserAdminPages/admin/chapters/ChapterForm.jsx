import React, { useEffect, useState } from 'react';
import { X, Save, Loader2, Info } from 'lucide-react';
import { useAddNewChapterMutation, useUpdateChapterMutation } from './chaptersApiSlice';
import { toast } from 'react-toastify';

const ChapterForm = ({ isOpen, onClose, chapter }) => {
    const [formData, setFormData] = useState({
        chapter_name: '',
        chapter_note: '',
        chapter_flag: ''
    });

    const [addNewChapter, { isLoading: isAdding }] = useAddNewChapterMutation();
    const [updateChapter, { isLoading: isUpdating }] = useUpdateChapterMutation();

    useEffect(() => {
        if (chapter) {
            setFormData({
                chapter_name: chapter.chapter_name || '',
                chapter_note: chapter.chapter_note || '',
                chapter_flag: chapter.chapter_flag || ''
            });
        } else {
            setFormData({
                chapter_name: '',
                chapter_note: '',
                chapter_flag: ''
            });
        }
    }, [chapter, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (chapter) {
                await updateChapter({ id: chapter._id, ...formData }).unwrap();
                toast.success('Chapter updated successfully');
            } else {
                await addNewChapter(formData).unwrap();
                toast.success('Chapter added successfully');
            }
            onClose();
        } catch (err) {
            toast.error(err?.data?.message || 'Something went wrong');
        }
    };

    if (!isOpen) return null;

    const isLoading = isAdding || isUpdating;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100">
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                    <div>
                        <h3 className="text-xl font-black text-slate-800">
                            {chapter ? 'Edit Chapter' : 'Add New Chapter'}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                            {chapter ? 'Update existing chapter details' : 'Register a new movement chapter'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Chapter Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">Chapter Name</label>
                            <input
                                type="text"
                                name="chapter_name"
                                value={formData.chapter_name}
                                onChange={handleChange}
                                required
                                placeholder="e.g. United Arab Emirates"
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none"
                            />
                        </div>

                        {/* Chapter Flag */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">Flag Image URL</label>
                            <input
                                type="url"
                                name="chapter_flag"
                                value={formData.chapter_flag}
                                onChange={handleChange}
                                placeholder="https://i.imgur.com/HGFd10W.jpg"
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none"
                            />
                        </div>

                        {/* Chapter Note */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">Chapter Note</label>
                            <textarea
                                name="chapter_note"
                                value={formData.chapter_note}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Additional notes about this chapter..."
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-[2] px-6 py-4 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <Save size={18} />
                            )}
                            {chapter ? 'Update Chapter' : 'Save Chapter'}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ChapterForm;
