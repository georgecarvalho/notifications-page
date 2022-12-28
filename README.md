# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Unread](/assets/images/unread.png)
![Read](/assets/images/read.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-flexbox-X_8KalLSSp](https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-flexbox-X_8KalLSSp)
- Live Site URL: [https://georgecarvalho.github.io/notifications-page/](https://georgecarvalho.github.io/notifications-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

The `unread` icon was generated through the `::after` pseudo-class, which adds some content after the element in the selector. For the function of marking notifications as read, an `EventListener` that expects a `click` was added on each element with the `.notification` class. These elements are the HTML divs that contains the content of each notification. When they are clicked, the `markAsRead` function is called, removing the `.unread` class from it.

```css
.notifications .unread-icon.unread::after{
    content: "\2022";
    color: hsl(1, 90%, 64%);
}
```
```js
notifications.forEach(notification => {
    notification.addEventListener("click", function() {
        markAsRead(notification);
    })
})

function markAsRead(notification) {
    if(!notification.classList.contains('unread')){
        return;
    }
    notification.classList.remove('unread');
    removeUnreadIcon(notification);
    setNotificationsNumber();
}
```

## Author

- Frontend Mentor - [@georgecarvalho](https://www.frontendmentor.io/profile/georgecarvalho)
