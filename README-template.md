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

![Unread](./unread.jpg)
![Read](./read.jpg)

### Links

- [Solution URL:](https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-flexbox-X_8KalLSSp)
- [Live Site URL:](https://georgecarvalho.github.io/notifications-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

O ícone de "não lido" foi gerado através da pseudo-classe **::after**, que adiciona algum conteúdo após o elemento indicado no seletor. Sobre o comportamento de marcar as notificações como lidas, foi adicionado um **EventListener** que espera um **click** em cada elemento com a classe **.notification**. Esses elementos são as divs HTML que possuem o conteúdo de cada notificação. Ao serem clicados, a função **markAsRead** é chamada, removendo a classe 'unread'.

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
