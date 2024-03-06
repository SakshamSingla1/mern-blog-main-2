import { Button } from 'flowbite-react';
import img  from '../images/portfolio.png';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Welcome to my portfolio!
            </h2>
            <p className='text-gray-500 my-2'>
                Explore my work and projects in JavaScript.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://sakshamsingla.me" target='_blank' rel='noopener noreferrer'>
                    Check it out!
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={img} alt="JavaScript" className='border-radius:25%'/>
        </div>
    </div>
  )
}
