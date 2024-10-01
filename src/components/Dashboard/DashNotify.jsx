import React, { useState } from 'react';

const Notification = () => {
  // Example notification data
  const initialNotifications = [
    {
      id: 1,
      message: 'You have a new message from John. Check it out at https://example.com/message/123',
      read: false
    },
    {
      id: 2,
      message: 'Your profile was viewed by a recruiter. View profile at https://example.com/profile/456',
      read: false
    },
    {
      id: 3,
      message: 'Reminder: Your interview is scheduled for tomorrow at 3:00 PM.',
      read: true
    },
    {
      id: 4,  // Unique ID
      message: 'You have a new message from John. Check it out at https://example.com/message/123',  // The notification text
      read: false  // Whether the notification has been read
    },
    {
      id: 5,
      message: 'Your profile was viewed by a recruiter. View profile at https://example.com/profile/456',
      read: false
    },
    {
      id: 6,
      message: 'Reminder: Your interview is scheduled for tomorrow at 3:00 PM.',
      read: true
    }
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  // Mark as read function
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  // Delete notification function
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Helper function to detect and render links in the notification message
  const renderMessageWithLinks = (message) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = message.split(urlPattern);

    return parts.map((part, index) => (
      urlPattern.test(part) ? (
        <a href={part} target="_blank" rel="noopener noreferrer" key={index} className="text-blue-500 underline">
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-24 mb-12">
      <h2 className="text-xl font-bold mb-6 mt-4 text-center">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500 p-4 mt-10 text-lg">You have no notifications.</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 border-b rounded-lg mt-4 mb-4 ${notification.read ? 'bg-gray-100' : 'bg-white'}`}
          >
            {/* Notification Message */}
            <p className="text-sm mb-2 p-2">
              {renderMessageWithLinks(notification.message)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col items-start p-2 gap-2">
              {/* Mark as Read Button */}
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-green-600 hover:underline font-semibold"
                >
                  Mark as Read
                </button>
              )}

              {/* Delete Button */}
              <button
                onClick={() => deleteNotification(notification.id)}
                className="text-red-600 hover:underline font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
