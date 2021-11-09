import React from 'react'
import { useRouter } from 'next/router'


const ExploreCard = ({img, title, para, id}) => {
  const router = useRouter();
    return (
      <div onClick={() => {
        router.push({
          pathname: '/location/[id]',
          query: { id: id },
        })
      }} className="relative cursor-pointer w-60 md:w-72 h-72 md:h-96 bg-h1-color transition duration-500 group">
        <img src={img} alt="" className="w-60 md:w-72 h-72 md:h-96" />
        <div className="absolute opacity-0 group-hover:opacity-100 -bottom-full w-full group-hover:bottom-0 text-start bg-glass space-y-4 p-4 backdrop-blur-xl rounded-t-md  transition duration-500">
          <h4 className="font-sans text-h1-color text-xl font-semibold">
            {title}
          </h4>
          <p className="text-base font-regular font-sans text-white">{para}</p>
        </div>
      </div>
    );
}

export default ExploreCard
