import React from 'react'

const Electronicitems = ({data, loading, error}) => {


    if (loading){
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-12 w-12 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"
              />
            </svg>
            <h1 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h1>
          </div>
        </div>
      );
      
    }
    if (error !== null){
        return <h1>Something went wrong please refresh it</h1>
    }
  return (
    <div className=" bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D')]">
        <h1 className='text-center text-2xl font-bold pt-6'>Electronics Items</h1>
        <hr class=" my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className='flex flex-wrap gap-11 m-4'>
        {data
        .filter((value) => value.id === 19 || value.id === 20 || value.id === 21 || value.id === 22 || value.id === 23 || value.id === 25)
        .map((value) =>(
        
            <div key={value.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap justify-center md:max-w-md lg:max-w-lg xl:max-w-xl">
            <a href="#">
              <img className="rounded-t-lg h-56 m-4" src={value.images[1]} alt={value.title} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
              </a>
              <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                {value.description}
              </p>
              <div className='flex place-content-around mt-6 gap-2'>
                <div>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm md:text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              </div>
              <div>
              <h1 className="inline-flex items-center px-3 py-2 text-sm md:text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Starting from {value.price}&#36;
                
              </h1>
              </div>
              
              </div>
            </div>
          </div>
        ))
        }
    </div>
    </div>
  )
}

export default Electronicitems