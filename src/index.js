import "./styles/main.css"
import header from "./modules/header.js";

const headerSection = document.createElement("header")
headerSection.innerHTML = header
document.body.appendChild(headerSection)