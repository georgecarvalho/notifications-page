const notifications = document.querySelectorAll('.notification');
const linkMarkAllAsRead = document.querySelector('.mark-all-read');
const notificationsNumber = document.querySelector('.notifications-number');
setNotificationsNumber();

notifications.forEach(notification => {
    notification.addEventListener("click", function() {
        markAsRead(notification);
    })
})

if(linkMarkAllAsRead !== null){
    linkMarkAllAsRead.addEventListener("click", function() {
        notifications.forEach(notification => {
            if(notification.classList.contains('unread')){
                markAsRead(notification);
            }
        })
    })
}


function markAsRead(notification) {
    if(!notification.classList.contains('unread')){
        return;
    }
    notification.classList.remove('unread');
    removeUnreadIcon(notification);
    setNotificationsNumber();
}

function removeUnreadIcon(notification) {
    const unreadIcon = notification.querySelector('.unread-icon.unread');
    if(unreadIcon !== null){
        unreadIcon.classList.remove('unread');
    }
}

function setNotificationsNumber() {
    if(notificationsNumber !== null){
        const notificationCount = document.querySelectorAll('.notification.unread').length;
        notificationsNumber.textContent = notificationCount;

        if (notificationCount === 0) {
            notificationsNumber.style.display = "none";
        }
    }
}