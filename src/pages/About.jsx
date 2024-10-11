import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi excepturi cumque alias numquam est delectus sint? Vero error, earum dolores perferendis nam fugit velit accusantium veniam repudiandae laboriosam, ipsum aliquid.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam voluptate rem deleniti est eveniet magnam adipisci odit voluptatibus sunt minus explicabo libero molestias quidem, similique ut commodi quis quisquam maiores ab recusandae totam voluptas provident? Repudiandae, est nobis perferendis facere vero suscipit aperiam maxime ullam ratione fuga dolorum veniam!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit, quod accusamus eaque magnam itaque?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, deserunt?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, corporis?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, molestiae.</p>
        </div>
      </div>
    </div>
  )
}

export default About