import React from "react";
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="d-flex">
            <a className="nav-link text-white" href="tel:692982400">
              <FaPhone className="me-2" size={24} />
                (+34) 692 982 400
              </a>
              <a className="nav-link text-white" href="mailto:info@davidriphones.com">
              <MdEmail className="me-2" size={24} />
                Contacto
              </a>       
               </footer>
    );
    }
    export default Footer;