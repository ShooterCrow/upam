import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, ChevronRight, HelpCircle, CheckCircle2, Clock, Search, Reply, Filter, User } from 'lucide-react';
// import { useGetContactsQuery, useCreateContactMutation, useRespondToContactMutation } from '../../contactus/contactsApiSlice';
import useAuth from '../../../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetContactsQuery, useCreateContactMutation, useRespondToContactMutation } from '../../contactUs/contactsApiSlice';

const UserSupportForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', category: 'General Inquiry' });
    const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
    const { user } = useAuth();

    // Prefill user data if available
    React.useEffect(() => {
        if (user) {
            setFormData(prev => ({ ...prev, name: `${user.firstName} ${user.lastName}`, email: user.email }));
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContact(formData).unwrap();
            setFormData({ ...formData, message: '' });
        } catch (err) {
            console.error('Failed to send message:', err);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Send us a message</h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">We usually respond within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Category</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>General Inquiry</option>
                                    <option>Account Support</option>
                                    <option>Membership Payment</option>
                                    <option>Technical Issue</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white resize-none"
                                    placeholder="Tell us what's on your mind..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-blue-200 dark:shadow-none"
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                                <Send size={20} />
                            </button>
                            {isSuccess && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-500 text-center font-medium"
                                >
                                    Message sent successfully! We'll get back to you soon.
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {[
                    { icon: Phone, title: 'Call Center', detail: '+255 123 456 789', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                    { icon: Mail, title: 'Email Support', detail: 'support@upam.org', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
                    { icon: HelpCircle, title: 'Live Chat', detail: 'Available 9am - 5pm', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' }
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:scale-[1.02] transition-all cursor-pointer">
                        <div className={`${item.bg} p-4 rounded-xl group-hover:rotate-12 transition-transform`}>
                            <item.icon className={item.color} size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">{item.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                        </div>
                        <ChevronRight className="ml-auto text-slate-300" size={20} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const AdminSupportInbox = () => {
    const { data: contacts, isLoading, refetch } = useGetContactsQuery();
    const [respondToContact] = useRespondToContactMutation();
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [isReplying, setIsReplying] = useState(false);

    const handleReply = async () => {
        if (!replyText.trim()) return;
        setIsReplying(true);
        try {
            await respondToContact({ id: selectedMsg._id, response: replyText }).unwrap();
            setReplyText('');
            setSelectedMsg(null);
            refetch();
        } catch (err) {
            console.error('Failed to respond:', err);
        } finally {
            setIsReplying(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-200px)] min-h-[600px]">
            {/* List */}
            <div className="lg:col-span-5 flex flex-col gap-4 overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold dark:text-white">Messages ({contacts?.data?.length || 0})</h2>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-gray-100 dark:border-slate-800" onClick={refetch}>
                            <Clock size={16} className="text-slate-500" />
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {contacts?.data?.map((msg) => (
                        <div
                            key={msg._id}
                            onClick={() => setSelectedMsg(msg)}
                            className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedMsg?._id === msg._id
                                ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200 dark:shadow-none'
                                : 'bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 hover:border-blue-300'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${msg.status === 'Pending' ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`} />
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${selectedMsg?._id === msg._id ? 'text-blue-100' : 'text-slate-400'}`}>
                                        {msg.status}
                                    </span>
                                </div>
                                <span className={`text-[10px] ${selectedMsg?._id === msg._id ? 'text-blue-100' : 'text-slate-400'}`}>
                                    {new Date(msg.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <h4 className={`font-bold mb-1 truncate ${selectedMsg?._id === msg._id ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
                                {msg.name}
                            </h4>
                            <p className={`text-xs truncate ${selectedMsg?._id === msg._id ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                {msg.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* View/Reply */}
            <div className="lg:col-span-7 h-full">
                <AnimatePresence mode="wait">
                    {selectedMsg ? (
                        <motion.div
                            key={selectedMsg._id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white dark:bg-slate-900 h-full rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden"
                        >
                            <div className="p-8 border-b border-gray-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                                            {selectedMsg.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 dark:text-white text-lg">{selectedMsg.name}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{selectedMsg.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 mb-1">Received at</p>
                                        <p className="text-sm font-medium dark:text-white">{new Date(selectedMsg.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 p-8 overflow-y-auto space-y-8">
                                <div className="space-y-4">
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 tracking-wider uppercase">User Request</span>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                                            {selectedMsg.message}
                                        </p>
                                    </div>
                                </div>

                                {selectedMsg.response ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-[10px] font-bold text-green-600 dark:text-green-400 tracking-wider uppercase">Admin Response</span>
                                            <span className="text-[10px] text-slate-400">Responded on {new Date(selectedMsg.respondedAt).toLocaleString()}</span>
                                        </div>
                                        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-900/30 border-l-4 border-l-blue-500">
                                            <p className="text-slate-700 dark:text-slate-200 italic">
                                                "{selectedMsg.response}"
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-[10px] font-bold text-orange-600 tracking-wider uppercase">Reply to user</span>
                                        <textarea
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all dark:text-white resize-none"
                                            placeholder="Type your response here..."
                                            rows="4"
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                        ></textarea>
                                        <button
                                            onClick={handleReply}
                                            disabled={isReplying || !replyText.trim()}
                                            className="w-full py-4 bg-slate-800 dark:bg-blue-600 hover:bg-slate-900 dark:hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                                        >
                                            {isReplying ? 'Sending...' : 'Send Response'}
                                            <Reply size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <div className="bg-white dark:bg-slate-900 h-full rounded-3xl border border-dashed border-gray-200 dark:border-slate-700 flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6">
                                <MessageSquare size={40} className="text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">No message selected</h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                                Select a support ticket from the list on the left to view details and send a response.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const Support = () => {
    const { roles } = useAuth();
    const isAdmin = roles.includes('admin');

    return (
        <div className="space-y-8 lg:p-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Support & Help</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        {isAdmin ? 'Manage user inquiries and provide assistance.' : 'How can we help you today?'}
                    </p>
                </div>
                {!isAdmin && (
                    <div className="flex items-center gap-2 text-sm font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                        <Clock size={16} />
                        Average response: 24h
                    </div>
                )}
            </div>

            {isAdmin ? <AdminSupportInbox /> : <UserSupportForm />}
        </div>
    );
};

export default Support;