import React from 'react'

function SelectProfile() {
    return (
        <div className="bg-black h-screen flex flex-col items-center justify-center">
            <h1 className="text-gray-200 text-5xl">
                Who's watching?
            </h1>

            <div className="flex flex-row flex-wrap gap-5 mt-8">

                <a href="#" className="flex flex-col items-center group gap-2">
                    <img className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://picsum.photos/seed/a/150/150" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Tiffany </p>
                </a>

                <a href="#" className="flex flex-col items-center group gap-2">
                    <img className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://picsum.photos/seed/b/150/150" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Jessica </p>
                </a>

                <a href="#" className="flex flex-col items-center group gap-2">
                    <img className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://picsum.photos/seed/c/150/150" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Sunny </p>
                </a>

                <a href="#" className="flex flex-col items-center group gap-2">
                    <img className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://picsum.photos/seed/d/150/150" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Taeyeon </p>
                </a>

                <a href="#" className="flex flex-col items-center group gap-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[150px] w-[150px] group-hover:bg-gray-300 border-2 border-transparent" viewBox="0 0 20 20" fill="#6b7280">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-gray-500 group-hover:text-gray-300"> Add Profile </p>
                </a>

            </div>

            <button className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400">
                Manage Profiles
            </button>

        </div>
    )
}

export default SelectProfile