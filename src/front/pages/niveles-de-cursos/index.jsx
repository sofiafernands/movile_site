
function Courses () {
    const levels = [
        'Nivel 1: Introduccion a la reparacion de moviles',
        'Nivel 2: Reparacion de moviles nivel intermedio',
        'Nivel 3: Reparacion de moviles nivel avanzado',
        'Nivel 4: Diagnosticos y solucion de problemas'
    ];

    return (
        <section className="bg-gradient-to-r from-black to-gray-700 dark:from-gray-300 dark:to-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="animate-fade-right mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Nuestros cursos</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In totam ut sapiente architecto blanditiis asperiores neque dicta illo soluta modi magnam fugiat, tempora tenetur at officiis expedita qui, est quas.</p>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex-wrap sm:justify-center md:space-x-4 lg:space-x-8">
                {levels.map(level =>
                    <div key={level} className="text-black bg-white p-2 rounded shadow mt-4">
                        {level}
                    </div>
                )}
            </div>
        </div>
    </section>
);
}   

export default Courses;