"use client";
import Links from '@/components/Links';
import Footer from '@/components/Footer';
import '../Home.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import kent from '../img/kent.webp';

export default function About() {
    return (
        <>
        <motion.div   
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
            <Links />
            <div className="text-justify about-info">
     
     <div className='information-about'>
     <div className='back-button'>
             <a href="/" className='back-arrow'><span>⬅</span><span> Back</span></a>
         </div>
         <div className='about-top'>
             <h1>About Me</h1>
             <p>Learn more about who I am.</p>
         </div>
         <div className='about-section'>
         <h1>Introduction</h1>
         <p>
           Hi, My name is Jimmy, and I am a graduate from the <a href='https://www.kent.ac.uk/courses/undergraduate/124' target="_blank" rel="noreferrer" className='custom-link border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 rounded p-1 py-0.5 text-sm inline-flex items-center leading-4 no-underline'><Image src={kent} alt='Kent' className='w-3 h-3 mr-1'/>University of Kent</a>. in England, who studied Computer Science. I've had a big interest
           in computers since I was young and always strived to learn new things in the field.
           I am an emotionally intelligent, talented, positive, ambitious and hardworking individual
           with an array of skills in numerous fields. Having strong communication skills, I can build
            solid relationships with people of all levels in order to deliver the best results. I adapt well
            to new environments, a fast learner with a creative approach to challenges that arise. Furthermore, 
            I am adept at working with that which is highly confidential, handling multiple tasks on a daily basis 
            proficiently and working well under pressure. I enjoy working on my own just as much as I do working as part of a team.
         </p>
         
         </div>
         <div className='about-section'>
         <h1>My Background</h1>
         <p>I was born and grew up in Greater London, where I've spent most of my life. I have dual nationalitiy, thanks to my parents being from Bulgaria,
            making me both British and Buglarian. This meant I had an interesting childhood, needing to travel between countries to see my greater family. 
            Looking back at the time I first remember falling in love with programming, it had be in my pre-teen years when I was exposed to Minecraft and 
            wanting to know how everything online was created. Ever since then I've slowed and surely have been building up to learn more consistently and 
            improve myself and my knowledge at every chance I get.</p>
         </div>
         <div className='about-section mb-10'>
         <h1>My Current Goals</h1>   
         <p>I plan to become a Software Engineer as my ultimate goal. To achieve this I have been developing new projects 
      to increase my employability as well as improving my creativity and skills in the field.
         </p>
         </div>
 
    </div>
    </div>
            <Footer />
        </motion.div>
        </>
    )
}