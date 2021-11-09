import React from 'react'
import Layout from "../components/Layout";

const Not_available = () => {
    return (
      <Layout>
        <div className="px-2 md:max-cont mt-20 my-15 flex flex-col md:flex-row justify-center space-x-4 items-center">
          <div className="space-y-4 md:space-y-0 md:w-[950px] bg-white shadow-xl rounded-xl h-full flex flex-col md:flex-row justify-center space-x-4 items-center">
            <div>
                <img src="/img/rem.gif" alt="" className='md:w-[450px] md:h-[450px]' />
            </div>
            <div className="space-y-2 md:w-[500px] p-2">
              <h1 className="font-bold text-3xl md:text-5xl text-h1-color md:leading-relaxed">
                We're still developing...
              </h1>
              <p className="text-base text-gray-500 font-regular leading-relaxed">
                Sorry for not being fast. We're still developing this site and our team is working 24/7 to make sure that everything is up and running soon. Some components are still in development... will let you know when we're done. please be patient and use the available services
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default Not_available
