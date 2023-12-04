import React from "react";
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer class="bg-white  shadow  dark:bg-gray-800">
            <div class="w-full  max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">DavidRiPhones </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="faq" class="hover:underline me-4 md:me-6">FAQ</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/davidriphones/" target="_blank" rel="noopener noreferrer" class="hover:underline me-4 md:me-6">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@davidriphones" target="_blank" rel="noopener noreferrer" class="hover:underline me-4 md:me-6">YOUTUBE</a>
                    </li>
                    <li>
                        <a href="https://wa.me/34692982400" target="_blank" rel="noopener noreferrer" class="hover:underline">CONTACTO</a>
                    </li>
                    <li>
                        <Link to="/nosotros" class="hover:underline  ml-4">NOSOTROS</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}
export default Footer;



