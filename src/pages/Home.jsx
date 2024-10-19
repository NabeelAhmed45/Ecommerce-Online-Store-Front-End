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
      <img src='../../img/artificial-photography-vB5qtt8X4NA-unsplash.jpg' alt="Shirts" className="w-full h-auto rounded-lg" />
      <img src='../../img/josh-calabrese-mZf9BZxyKZE-unsplash.jpg' alt="Electronics" className="w-full h-auto rounded-lg" />
      <img src='../../img/domino-studio-164_6wVEHfI-unsplash.jpg' alt="Shoes" className="w-full h-auto rounded-lg" />
      <img src='../../img/lautaro-andreani-6FaY0OJmYG4-unsplash.jpg' alt="Caps" className="w-full h-auto rounded-lg" />
    </div>
</div>
    <Productscategory />
    </div>

  )
}

export default Home