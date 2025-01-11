import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className= 'w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fugit voluptatibus, in delectus laborum, eum, optio incidunt quasi totam ad iure. Ut voluptatum beatae quo rem, nobis totam neque. Alias possimus autem blanditiis nihil pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias nisi voluptatibus! Reprehenderit nulla cum quas consectetur, voluptatem voluptatibus aspernatur doloribus id rerum.</p>
<b className='text-gray-800'>Our Mission</b>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa architecto eos provident officiis deleniti pariatur est totam consectetur repellat libero.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title  text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, rem. Harum inventore magnam earum consequatur itaque quod velit repellendus, asperiores sunt, neque ducimus ullam unde.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eveniet minus nulla veritatis ea? Perspiciatis quasi deleniti deserunt excepturi nisi et debitis necessitatibus cupiditate, explicabo blanditiis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque delectus dolorem vero, at soluta laboriosam eaque praesentium quos similique voluptates quasi totam iste accusamus natus?            
          </p>
        </div>

      </div>
      <NewLetterBox/>
      
    </div>
  )
}

export default About
