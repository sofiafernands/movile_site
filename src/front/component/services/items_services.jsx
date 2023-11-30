import React from 'react';  


function ServiceItem({ title, Icon, description, isOpen, onOpen }) {
    let styleClass = '';
    if (title === 'FACE ID') {
        styleClass = 'hover:bg-red-500';
    } else if (title === 'CPU') {
        styleClass = 'hover:bg-blue-500';
    } else if (title === 'COBERTURA') {
        styleClass = 'hover:bg-green-500';
    } else if (title === 'NO CARGA') {
        styleClass = 'hover:bg-yellow-500';
    } else if (title === 'NO ENCIENDE') {
        styleClass = 'hover:bg-indigo-500';
    }


    const handleClick = (event) => {
        event.preventDefault();
        onOpen();
    };

    return (
        <div>
            <button 
            onClick={handleClick}
             className={`ml-3  inline-flex justify-center mr-1 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 ${styleClass} focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}>
                {title} <Icon className="ml-1 h-5" />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'h-auto' : 'h-0'}`}>
                <p className='mt-2 text-sm'>{description}</p>
            </div>
        </div>
    );
    
}
export default ServiceItem;