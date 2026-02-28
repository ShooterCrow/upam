import React from 'react';
import {
    useGetMyNotificationsQuery,
    useMarkAllAsReadMutation,
    useDeleteNotificationMutation
} from '../../../app/api/notificationsApiSlice';
import { Trash2 } from 'lucide-react';
import LoadingState from '../../../component/ui/LoadingState';

const Notification = () => {
    const { data: notificationsData, isLoading, isError } = useGetMyNotificationsQuery();
    const [markAllAsRead] = useMarkAllAsReadMutation();
    const [deleteNotification] = useDeleteNotificationMutation();

    const notifications = notificationsData?.data || [];

    const handleMarkAllRead = async () => {
        try {
            await markAllAsRead().unwrap();
        } catch (error) {
            console.error("Failed to mark all as read:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteNotification(id).unwrap();
        } catch (error) {
            console.error("Failed to delete notification:", error);
        }
    };

    // Format Date exactly as DD/MM/YYYY HH:MM:SS
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);

        const pad = (num) => num.toString().padStart(2, '0');

        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();

        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        return `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`;
    };

    if (isLoading) {
        return <LoadingState message="Loading notifications..." />;
    }

    if (isError) {
        return <div className="p-6 text-red-500">Failed to load notifications. Please try again.</div>;
    }

    return (
        <div className="bg-[#F8F9FB] min-h-screen p-6 font-sans">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Notifications</h1>

            <div className="bg-white rounded-md shadow-sm border border-gray-100 max-w-7xl">

                {/* Header Row */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 pb-4">
                    <h2 className="text-lg font-medium text-gray-800">Recent Notification</h2>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">Mark all as read</span>
                        <input
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer text-gray-600 rounded border-gray-300 focus:ring-gray-500"
                            onChange={handleMarkAllRead}
                        />
                    </div>
                </div>

                {/* List Container */}
                <div className="flex flex-col">
                    {notifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            You have no recent notifications.
                        </div>
                    ) : (
                        notifications.map((notification, index) => (
                            <div
                                key={notification._id}
                                className={`relative group flex flex-col p-6 transition-colors hover:bg-gray-50 ${index !== notifications.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                                <div className="pr-12"> {/* Padding to avoid text overlap with trash icon */}
                                    <p className={`text-[15px] mb-2 ${notification.isRead ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                                        {notification.message}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {formatDateTime(notification.createdAt)}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleDelete(notification._id)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                    aria-label="Delete notification"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
};

export default Notification;