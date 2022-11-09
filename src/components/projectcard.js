export const ProjectCard=({project}) =>{
   return (
        <div className="mt-5">
            <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-40 ">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project Name</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order dsadkdka;ldklsa;dka;ldka;dlkad;lsakd</p>
                        <div className="flex flex-row space-x-10">
                            <p className="border-solid border-2 border-sky-500 rounded-full">Test 1</p>
                            <p>Test 2</p>
                        </div>
                            
                    </div>
            </a>
        </div>
    );
    
   
} 