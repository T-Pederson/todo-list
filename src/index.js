import './styles.css';
import addSVG from './images/add.svg';
import helpSVG from './images/help.svg';
import homeSVG from './images/home.svg';
import menuSVG from './images/menu.svg';
import notificationsSVG from './images/notifications.svg';

const headerLeft = document.querySelector('.header-left');
const headerRight = document.querySelector('.header-right');
const searchBar = document.getElementById('search');

const menuIcon = document.createElement('img');
menuIcon.setAttribute('src', menuSVG);
menuIcon.setAttribute('alt', 'menu');
headerLeft.insertBefore(menuIcon, searchBar);

const homeIcon = document.createElement('img');
homeIcon.setAttribute('src', homeSVG);
homeIcon.setAttribute('alt', 'home');
headerLeft.insertBefore(homeIcon, searchBar);

const addIcon = document.createElement('img');
addIcon.setAttribute('src', addSVG);
addIcon.setAttribute('alt', 'add');
headerRight.appendChild(addIcon);

const helpIcon = document.createElement('img');
helpIcon.setAttribute('src', helpSVG);
helpIcon.setAttribute('alt', 'help');
headerRight.appendChild(helpIcon);

const notificationsIcon = document.createElement('img');
notificationsIcon.setAttribute('src', notificationsSVG);
notificationsIcon.setAttribute('alt', 'notifications');
headerRight.appendChild(notificationsIcon);