import React from 'react'

const Experience = () => {
    return (
        <>
            <div className="mt-20">

                <div className='max-w-5xl mx-auto  flex px-10 space-x-3 '>
                    <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                    <div className='text-xl font-bold'>Experience </div>
                </div>

                <div className='md:max-w-4xl  mx-auto flex flex-col px-5   mt-8 '>
                    <div className='md:flex items-center space-x-3 '>
                        <h1 className='text-xl md:text-2xl font-bold text-green-600'>Fullstack Developer | </h1>
                        <a href='https://thinknovus.com/'><button className='text-gray-200 md:font-semibold mx-10 md:mx-0 hover:text-gray-700'> Hauper Technologies</button></a>
                    </div>

                    <h1 className='text-sm font-semibold text-gray-400 mt-5 md:mt-0'>2023 - 2025</h1>
                    <h3 className='mt-8 font-semibold text-gray-400'> 1. Laravel Development </h3>
                    <p className='mt-8 font-semibold text-gray-400'><strong>Admin Panel :</strong>  Developed a comprehensive admin panel for
                        managing user roles,permissions, and content, ensuring efficient
                        and secure administrative operations.</p>
                    <p className='mt-8 font-semibold text-gray-400'><strong> E-commerce Project :</strong>  Created a demo e-commerce website with
                        features such as product listings, shopping cart, checkout
                        process, and order management, showcasing my ability to build
                        functional and user-friendly web solutions.</p>
                    <p className='mt-8 font-semibold text-gray-400'><strong> Additional Projects :</strong>  Contributed to several other projects by
                        implementing specific tasks, such as integrating APIs, optimizing
                        database queries, and enhancing application performance.</p>
                    <h3 className='mt-8 font-semibold text-gray-400'>2. React Development Experience</h3>

                    <p className='mt-8 font-semibold text-gray-400'><strong> Good Fences Project :</strong>  Developed a comprehensive admin panel for
                        a property management system. The panel included role-based
                        access control with roles such as Administrator, HOA, Member,
                        Review Board Member, and Board of Director. Successfully
                        implemented features for managing properties, users, and
                        workflows, tailored to meet specific business requirements.</p>
                    <p className='mt-8 font-semibold text-gray-400'><strong> Other Project :</strong>  Targus accessory  finder</p>
                    <p className='mt-8 font-semibold text-gray-400'><strong>  Project Tasks, Bug Fixes, and Modules :</strong> Completed numerous
                        tasks, bug fixes, and feature modules across multiple projects,
                        showcasing attention to detail, problem-solving abilities, and a
                        commitment to delivering high-quality work</p>
                </div>
            </div>
        </>
    )
}

export default Experience
