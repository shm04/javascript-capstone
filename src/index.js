import './styles/main.css';
import {header, footer} from './modules/header-footer.js';

const headerSection = document.createElement('header');
const footerSection = document.createElement('footer');
headerSection.innerHTML = header;
footerSection.innerHTML = footer;
document.body.appendChild(headerSection);
document.body.appendChild(footerSection);