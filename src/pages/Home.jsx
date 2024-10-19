import React from 'react'
import Productscategory from '../components/Productscategory'


const Home = () => {
    

    
  return (
    <div>
      <div className="m-6 sm:m-12 md:m-24 border border-gray-300 p-6 sm:p-10 bg-white rounded-lg shadow-lg text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition ease-in duration-300 hover:shadow-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
    
    <div className="flex-1">
      <h1 className="font-bold mb-2 text-center text-2xl tracking-wide underline decoration-2">Online Store</h1>
      <p className="font-semibold tracking-wide capitalize">
        An online store is a platform that offers a wide range of products, including high-quality clothing, accessories, home textiles, and more. Established to provide convenience and accessibility, online stores have quickly expanded due to their unique ability to offer both traditional and contemporary designs in one place.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 w-full md:w-80 flex-shrink-0">
      <img src='https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D' alt="Shirts" className="w-full h-auto rounded-lg" />
      <img src="https://images.unsplash.com/photo-1493200754321-b1d3cbc969a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D" alt="Electronics" className="w-full h-auto rounded-lg" />
      <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D' alt="Shoes" className="w-full h-auto rounded-lg" />
      <img src='https://images.unsplash.com/photo-1483103068651-8ce44652c331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwfGVufDB8fDB8fHww' alt="Caps" className="w-full h-auto rounded-lg" />
    </div>
</div>
    <Productscategory />
    </div>

  )
}

export default Home