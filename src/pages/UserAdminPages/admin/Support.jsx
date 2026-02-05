import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, ChevronRight, HelpCircle, CheckCircle2, Clock, Search, Reply, Filter, User, ArrowRight } from 'lucide-react';
import { useGetContactsQuery, useCreateContactMutation, useRespondToContactMutation } from '../../contactUs/contactsApiSlice';
import useAuth from '../../../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

const UserSupportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        category: 'General Inquiry'
    });
    const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
    const { user } = useAuth();

    // Prefill user data if available
    React.useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email
            }));
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContact(formData).unwrap();
            setFormData(prev => ({ ...prev, message: '' }));
        } catch (err) {
            console.error('Failed to send message:', err);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {/* Main Form */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 border border-gray-50 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a message</h2>
                    <p className="text-slate-500 mb-8">We usually respond within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Category</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all"
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
                            <label className="text-sm font-semibold text-slate-700">Message</label>
                            <textarea
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
                                placeholder="Tell us what's on your mind..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-red-200 hover:shadow-red-300"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                            <Send size={20} />
                        </button>

                        {isSuccess && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-500 text-center font-medium flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 size={18} />
                                Message sent successfully! We'll get back to you soon.
                            </motion.p>
                        )}
                    </form>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
                {[
                    {
                        icon: Phone,
                        title: 'Call Center',
                        detail: '+255 123 456 789',
                        color: 'text-red-500',
                        bg: 'bg-red-50'
                    },
                    {
                        icon: Mail,
                        title: 'Email Support',
                        detail: 'support@upam.org',
                        color: 'text-red-500',
                        bg: 'bg-red-50'
                    },
                    {
                        icon: HelpCircle,
                        title: 'Live Chat',
                        detail: 'Available 9am - 5pm',
                        color: 'text-indigo-500',
                        bg: 'bg-indigo-50'
                    }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-4 group hover:scale-[1.02] transition-all cursor-pointer"
                    >
                        <div className={`${item.bg} p-4 rounded-xl group-hover:rotate-12 transition-transform`}>
                            <item.icon className={item.color} size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.detail}</p>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-slate-600 transition-colors" size={20} />
                    </div>
                ))}
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
                <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm">
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
                <div className="flex-1 bg-white rounded-3xl border border-gray-50 shadow-sm overflow-hidden">
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
                                            ? 'bg-red-50 border-red-200 shadow-sm'
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
                            className="bg-white h-full rounded-3xl border border-gray-50 shadow-sm flex flex-col overflow-hidden"
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
                    <h1 className="text-3xl font-bold text-slate-800">Support & Help</h1>
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
            {isAdmin ? <AdminSupportInbox /> : <UserSupportForm />}
        </div>
    );
};

export default Support;