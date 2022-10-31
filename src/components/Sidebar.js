import { FaTools } from 'react-icons/fa'
import { BsFileEarmarkPost } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen,AiFillFolderAdd,AiOutlinePlus } from 'react-icons/ai'
import { GiTalk } from "react-icons/gi"
import { CgProfile,CgWebsite,CgToolbox } from 'react-icons/cg';
export const Sidebar=() =>{
    return (
            <div className='flex flex-row-reverse'>
                <div className="flex flex-row-reverse">
                    <div className="flex flex-col h-screen p-3 bg-white shadow w-96     ">
                        <div className="space-y-3">
                                <div className="grid grid-cols-1 divide-y-2 ">    
                                    <div className="flex items-center">
                                        <CgProfile className='w-12 h-12' />    
                                        <a className='font-bold pl-5'>Name Surname</a>
                                    </div>
                                    <div className="relative ">
                                        <span className="absolute inset-y-0 left-0 flex items-center py-4 ">
                                            <button
                                                type="submit"
                                                className="p-2 focus:outline-none focus:ring"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                        <input
                                            type="search"
                                            name="Search"
                                            placeholder="Search..."
                                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 py-12 space-y-4 ">
                                            <a href='App.js' className='text-lg font-normal flex flex-row  '>
                                                <AiOutlineFundProjectionScreen className='w-6 h-8'/>
                                                <p className='px-2'>Project</p>
                                            </a>
                                            <a href='#' className='text-lg font-normal flex flex-row '>
                                                <GiTalk className='w-6 h-8'/>
                                                <p className='px-2'>Community</p>
                                            </a>
                                            <a href='#' className='text-lg font-normal flex flex-row '>
                                                <CgToolbox className='w-6 h-8'/>
                                                <p className='px-2'>Tools</p>
                                            </a>
                                            <a href='#' className='text-lg font-normal flex flex-row '>
                                                <CgWebsite className='w-6 h-8'/>
                                                <p className='px-2'>About us</p>
                                            </a>
                                            
                                </div>
                                <details class="open:bg-white white:open:bg-slate-900 open:ring-1  dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                                    <summary>
                                        Filter
                                    </summary>
                                        <div className='flex flex-row space-x-6'>
                                            <div className='flex flex-col '>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">Grade 10</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                    
                                                        <div class="w-full text-lg font-semibold px-2">Grade 11</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">Grade 12</div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">Math</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                    
                                                        <div class="w-full text-lg font-semibold px-2">Social</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">History</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">Physics</div>
                                                    </div>
                                                </label>
                                                <label for="react-option" class="inline-flex justify-between items-center p-5 w-40   rounded-lg border-2 border-gray-200  dark:hover:text-gray-300   hover:text-gray-600    dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                    <div class="flex flex-row">
                                                        
                                                        <div class="w-full text-lg font-semibold px-2">Project</div>
                                                    </div>
                                                </label>
                                                
                                            </div>
                                        </div>
                                </details>
                                    
                        </div>
                    </div>
                </div>
                {/* post */}
                <details class="open:bg-white white:open:bg-slate-900 open:ring-1  dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg  w-38" open>
                    <summary className='flex flex-row '>
                        Post
                        <AiOutlinePlus className='ml-2 mt-1'/>
                    </summary>
                    <ul role="list">
                    
                            <li class="group/item hover:bg-slate-100 ...">
                                <a href='#' className='flex flex-row'>
                                    <AiFillFolderAdd className='mt-1'/>
                                    <div className='pl-2'>
                                        Project
                                    </div>
                                </a>
                                
                            </li>
                            <li class="group/item hover:bg-slate-100 ...">
                                <a href='#' className='flex flex-row'>
                                    <BsFileEarmarkPost className='mt-1'/>
                                    <div className='pl-2'>
                                        Community
                                    </div>
                                </a>
                                
                            </li>
                            <li class="group/item hover:bg-slate-100 ...">
                                <a href='#' className='flex flex-row'>
                                    <FaTools className='mt-1'/>
                                    <div className='pl-2'>
                                        Tools
                                    </div>
                                </a>
                                
                            </li>
                    </ul>
                </details>
                
            </div>
    );
}