import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Phone, Mail, ChevronRight, HelpCircle, CheckCircle2, Clock, Search, Reply, Filter, User, ArrowRight, MessageCircle } from 'lucide-react';
import { useGetContactsQuery, useCreateContactMutation, useRespondToContactMutation } from '../../contactUs/contactsApiSlice';
import useAuth from '../../../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import SuccessState from '../../../component/ui/SuccessState';

const UserSupportExperience = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        category: 'General Inquiry'
    });

    const {
        data: contacts,
        isLoading: isLoadingHistory,
        refetch: refetchHistory
    } = useGetContactsQuery();

    const [createContact, { isLoading, isSuccess, isError, error, reset }] = useCreateContactMutation();
    const { user } = useAuth();

    // Prefill user data
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                phone: user.phone || ''
            }));
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContact(formData).unwrap();
            refetchHistory(); // Refresh history after sending
        } catch (err) {
            console.error('Failed to send message:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const userHistory = contacts?.data || [];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Split Layout: Form on Left, History on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Form Section - Left */}
                <div className="lg:col-span-12 xl:col-span-5">
                    {isSuccess ? (
                        <SuccessState
                            title="Message Sent Successfully!"
                            message="Thank you for reaching out. We have received your message and will get back to you shortly."
                            actionLabel="Send Another Message"
                            onAction={() => {
                                reset();
                                setFormData(prev => ({ ...prev, message: '' }));
                            }}
                        />
                    ) : (
                        <div className="bg-white rounded-3xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h2>

                            {isError && (
                                <div className="mb-6">
                                    <ErrorState message={error?.data?.message || "Failed to send message. Please try again."} />
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all disabled:opacity-50"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all disabled:opacity-50"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Category</label>
                                        <select
                                            name="category"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all"
                                            value={formData.category}
                                            onChange={handleChange}
                                        >
                                            <option>General Inquiry</option>
                                            <option>Account Support</option>
                                            <option>Membership Payment</option>
                                            <option>Technical Issue</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all disabled:opacity-50"
                                            placeholder="+234"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all resize-none disabled:opacity-50"
                                        placeholder="Tell us what's on your mind..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    )}
                </div>

                {/* History Section - Right */}
                <div className="lg:col-span-12 xl:col-span-7">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 min-h-[600px] flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Support History</h2>
                                <p className="text-slate-500">Track and view your past messages and responses.</p>
                            </div>
                            <button
                                onClick={() => refetchHistory()}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                title="Refresh History"
                            >
                                <Clock size={20} className="text-slate-400" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto max-h-[700px] pr-2 custom-scrollbar">
                            {isLoadingHistory ? (
                                <div className="flex justify-center py-20">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                                </div>
                            ) : userHistory.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                        <MessageCircle size={32} className="text-slate-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">No history found</h3>
                                    <p className="text-slate-500 max-w-sm">When you send us messages, they will appear here with our responses.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {userHistory.map((msg) => (
                                        <div key={msg._id} className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 transition-all hover:bg-slate-50">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex gap-3 items-center">
                                                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                                                        <MessageSquare size={16} className="text-slate-400" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">{msg.category}</span>
                                                        <h4 className="text-sm font-bold text-slate-800">{new Date(msg.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}</h4>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${msg.status === 'Responded' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {msg.status}
                                                </span>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded-xl border border-slate-100">
                                                    <p className="text-sm text-slate-700 leading-relaxed">{msg.message}</p>
                                                </div>

                                                {msg.response && (
                                                    <div className="pl-4 border-l-2 border-l-red-100 space-y-2">
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <Reply size={12} className="rotate-180" />
                                                            <span className="text-[10px] font-bold uppercase tracking-widest">Response</span>
                                                        </div>
                                                        <div className="bg-red-50/50 p-4 rounded-xl border border-red-50/50">
                                                            <p className="text-sm text-slate-700 italic">"{msg.response}"</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminSupportInbox = () => {
    const {
        data: contacts,
        isLoading,
        isError,
        refetch
    } = useGetContactsQuery();
    const [respondToContact] = useRespondToContactMutation();
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [isReplying, setIsReplying] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleReply = async () => {
        if (!replyText.trim()) return;
        setIsReplying(true);
        try {
            await respondToContact({
                id: selectedMsg._id,
                response: replyText
            }).unwrap();
            setReplyText('');
            setSelectedMsg(null);
            refetch();
        } catch (err) {
            console.error('Failed to respond:', err);
        } finally {
            setIsReplying(false);
        }
    };

    // Filter messages based on search term
    const filteredMessages = contacts?.data?.filter(msg =>
        msg.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        msg.email?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        msg.message?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        msg.category?.toLowerCase().includes(searchTerm?.toLowerCase())
    ) || [];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Messages List - Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Header with Search */}
                <div className="bg-white p-6 rounded-3xl border border-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-md lg:text-lg font-bold text-slate-800">
                            Messages ({contacts?.data?.length || 0})
                        </h2>
                        <div className="flex gap-3">
                            <div className="relative flex-1 md:w-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-red-500 w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            {/* <button
                                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                                onClick={refetch}
                                disabled={isLoading}
                            >
                                <Clock size={18} className="text-slate-500" />
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 bg-white rounded-3xl border border-gray-50 overflow-hidden">
                    <div className="p-2 overflow-y-auto h-[calc(100vh-350px)] custom-scrollbar">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                            </div>
                        ) : isError ? (
                            <div className="text-center p-8">
                                <p className="text-red-500">Failed to load messages</p>
                                <button
                                    onClick={refetch}
                                    className="mt-2 text-red-600 hover:text-red-700 font-medium"
                                >
                                    Try again
                                </button>
                            </div>
                        ) : filteredMessages.length === 0 ? (
                            <div className="text-center p-8">
                                <MessageSquare className="mx-auto text-slate-300 mb-3" size={40} />
                                <p className="text-slate-500">No messages found</p>
                            </div>
                        ) : (
                            <div className="space-y-3 p-2">
                                {filteredMessages.map((msg) => (
                                    <div
                                        key={msg._id}
                                        onClick={() => setSelectedMsg(msg)}
                                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${selectedMsg?._id === msg._id
                                            ? 'bg-red-50 border-red-200'
                                            : 'bg-white border-gray-100 hover:border-red-200'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${msg.status === 'Pending'
                                                    ? 'bg-orange-500 animate-pulse'
                                                    : 'bg-green-500'
                                                    }`} />
                                                <span className={`text-xs font-bold uppercase tracking-wider ${selectedMsg?._id === msg._id
                                                    ? 'text-red-600'
                                                    : 'text-slate-400'
                                                    }`}>
                                                    {msg.status}
                                                </span>
                                            </div>
                                            <span className={`text-xs ${selectedMsg?._id === msg._id
                                                ? 'text-red-500'
                                                : 'text-slate-400'
                                                }`}>
                                                {new Date(msg.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h4 className={`font-bold mb-1 truncate ${selectedMsg?._id === msg._id
                                            ? 'text-red-700'
                                            : 'text-slate-800'
                                            }`}>
                                            {msg.name}
                                        </h4>
                                        <p className={`text-sm truncate ${selectedMsg?._id === msg._id
                                            ? 'text-red-600'
                                            : 'text-slate-500'
                                            }`}>
                                            {msg.message}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Message Detail & Reply - Right Column */}
            <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                    {selectedMsg ? (
                        <motion.div
                            key={selectedMsg._id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white h-full rounded-3xl border border-gray-50 flex flex-col overflow-hidden"
                        >
                            {/* Message Header */}
                            <div className="p-8 border-b border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                            {selectedMsg.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">{selectedMsg.name}</h3>
                                            <p className="text-sm text-slate-500">{selectedMsg.email}</p>
                                            <span className="inline-block mt-1 px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                                                {selectedMsg.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 mb-1">Received at</p>
                                        <p className="text-sm font-medium text-slate-700">
                                            {new Date(selectedMsg.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="flex-1 p-8 overflow-y-auto space-y-8 custom-scrollbar">
                                {/* Original Message */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 tracking-wider uppercase">
                                            User Request
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {new Date(selectedMsg.createdAt).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <p className="text-slate-700 leading-relaxed">
                                            {selectedMsg.message}
                                        </p>
                                    </div>
                                </div>

                                {/* Admin Response or Reply Form */}
                                {selectedMsg.response ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-400">
                                                Responded on {new Date(selectedMsg.respondedAt).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="bg-red-50/50 px-6 py-4 rounded-2xl border border-red-100 border-l-4 border-l-red-500">
                                            <p className="text-slate-700 italic">
                                                "{selectedMsg.response}"
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <span className="px-3 py-1 bg-orange-100 rounded-full text-xs font-bold text-orange-600 tracking-wider uppercase">
                                            Reply to user
                                        </span>
                                        <textarea
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-red-500 focus:bg-white transition-all resize-none"
                                            placeholder="Type your response here..."
                                            rows="4"
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                        ></textarea>
                                        <button
                                            onClick={handleReply}
                                            disabled={isReplying || !replyText.trim()}
                                            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-red-200 hover:shadow-red-300"
                                        >
                                            {isReplying ? 'Sending...' : 'Send Response'}
                                            <Send size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white h-full rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                                <MessageSquare size={40} className="text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No message selected</h3>
                            <p className="text-slate-500 max-w-sm mb-6">
                                Select a support ticket from the list on the left to view details and send a response.
                            </p>
                            <button
                                onClick={() => filteredMessages.length > 0 && setSelectedMsg(filteredMessages[0])}
                                disabled={filteredMessages.length === 0}
                                className="flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all disabled:opacity-50"
                            >
                                View first message
                                <ArrowRight size={20} />
                            </button>
                        </motion.div>
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
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">Support & Help</h1>
                    <p className="text-slate-500 font-medium">
                        {isAdmin
                            ? 'Manage user inquiries and provide assistance.'
                            : 'How can we help you today?'
                        }
                    </p>
                </div>

                {isAdmin && (
                    <div className="flex items-center gap-2 text-sm font-bold text-green-500 bg-green-50 px-4 py-2 rounded-full">
                        <Clock size={16} />
                        Average response: 24h
                    </div>
                )}
            </div>

            {/* Main Content */}
            {isAdmin ? <AdminSupportInbox /> : <UserSupportExperience />}
        </div>
    );
};

export default Support;