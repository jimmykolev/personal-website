"use client";

import React from 'react';
import './Home.css';
import Links from '../components/Links'
import Footer from '../components/Footer'
import java from './img/java.svg';
import next from './img/next.svg';
import html from './img/html.svg';
import css from './img/css.svg';
import python from './img/python.png';
import net from './img/net.png';
import ts from './img/ts.png';
import sql from './img/sql.png';
import mongodb from './img/mongodb.svg';
import vscode from './img/vscode.svg';
import notion from './img/notion.png';
import intellij from './img/intellij.svg';
import logo from './img/logof.png';
import { motion } from 'framer-motion';
import rider from './img/rider.png';
import jira from './img/jira.png';
import postman from './img/postman.png';
import Image from 'next/image';
import aa from './img/aa.png';
import cc from './img/cc.jpg';
import kent from './img/kent.webp';
import { ArrowUpRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function Information() {
    return (
   <>
   <div className='information'>
   <motion.div
  className="inline-block h-30 w-30"
  whileHover={{ rotate: 359, transition: { duration: 0.3 } }}
  style={{ transformOrigin: "center" }}
>
  <Image src={logo} alt="Logo" className='logo' />
</motion.div>
<h1><div className='info-1'>
        I'm <span>Jimmy</span>, a Computer Science graduate and asipiring developer</div>
<div className='info-2'>I've recently graduated from the <a href='https://www.kent.ac.uk' target="_blank" rel="noreferrer" className='custom-link border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 rounded p-1 py-0.5 text-sm inline-flex items-center leading-4 no-underline'><Image src={kent} alt='Kent' className='w-3 h-3 mr-1'/>University of Kent</a>.
          I have a 1st Class Degree and have <br/> a passion for creating various programs and applications. Currently, I use these tools; <br />
         <a href='https://www.python.org' target="_blank" rel="noreferrer"> Python</a>, 
         <a href='https://www.typescriptlang.org' target="_blank" rel="noreferrer"> TypeScript</a>, 
         <a href='https://dotnet.microsoft.com/en-us/languages/csharp#.' target="_blank" rel="noreferrer"> C#</a>,  
         <a href='https://nextjs.org' target="_blank" rel="noreferrer"> Next.js</a>, etc.</div>
         <a href="mailto:jimmykolev@gmail.com" className='contact-arrow'><span>Contact Me </span><span>➚</span></a>
         </h1>
   </div>
   </>
    );
   
}

export function Pages() {
    return (
   <>
   <div className='page-info'>
            <h1>Pages</h1>
        </div>
   <div className='mypages'>
    <div className='page-col'>
        <a href="/about">
        <div className='pages'>
        <h1>About Me</h1>
        <p>Click here to find out more about me and what I do.</p>
        </div>
        </a> 
    </div>
<div className='page-col'>
    <a href='/files/CV_No_Info.pdf' target="_blank" rel="noopener noreferrer">
        <div className='pages'>
            <h1>CV/Resume</h1>
            <p>Click here to access my CV to see my experiences.</p>
        </div>
    </a> 
</div>
   </div>
   </>
    );
}

export function Projects() {
  return (
      <>
      <div className='tools-info'>
          <h1>Projects</h1>
      </div>
      <h1 className='tools-dev'>Favourite Projects</h1>
      <div className='tools w-full'>
<div className='tools-flex'>
  <a href="https://attribute-atlas.vercel.app/" target="_blank" rel="noreferrer">
    <div className='proj-item flex justify-between items-center'>
      <Image src={aa} alt=""/>   
      <h1>AttributeAtlas</h1>
      <ArrowRight style={{ width: '20px', height: '20px', marginRight: '10px', backgroundColor: '#252525' }}/>
    </div>
  </a>
</div>
<div className='tools-flex'>
  <a href="https://github.com/jimmykolev/code-challenges" target="_blank" rel="noreferrer">
    <div className='proj-item flex justify-between items-center'>
      <Image src={cc} alt=""/>   
      <h1>CC FYI</h1>
      <ArrowRight style={{ width: '20px', height: '20px', marginRight: '10px', backgroundColor: '#252525'}}/>
    </div>
  </a>
</div>
  <a className='flex group items-center justify-end text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all mt-5 w-full' href='https://github.com/jimmykolev' target='_blank' rel="noreferrer">
  <ArrowUpRight className='h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all' />
    <h1 className='h-7 ml-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100'>All Projects</h1>

  </a>
</div>

      </>
  );
}

export function Tools() {
    return (
        <>
        <div className='tools-info'>
            <h1>Tools</h1>
        </div>
        <h1 className='tools-dev'>Development</h1>
        <div className='tools'>
            <div className='tools-flex'>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={next} alt=""/>   
                        <h1>Next.js</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
            <a href="https://www.java.com/en/" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={java} alt=""/>   
                        <h1>Java</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
            <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={ts} alt=""/>   
                        <h1>TypeScript</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
            <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={net} alt=""/>   
                        <h1>.NET</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={html} alt=""/>   
                        <h1>HTML 5</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                        <Image src={css} alt=""/>   
                        <h1>CSS 3</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/PHP" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                <Image src={python} alt="Python" className='python' /> 
                        <h1>Python</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target="_blank" rel="noreferrer">
                <div className='tools-item'>
                <Image src={sql} alt="Logo"/>  
                        <h1>SQL</h1>
                </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://www.mongodb.com/" target="_blank" rel='noreferrer'>
                <div className='tools-item'>
                        <Image src={mongodb} alt=""/>   
                        <h1>MongoDB</h1>
                </div>
                </a>
            </div>
        </div>
        <h1 className='tools-dev'>Applications</h1>
        <div className='tools'>
            <div className='tools-flex'>
                <a href="https://code.visualstudio.com/" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                        <Image src={vscode} alt=""/>
                        <h1>VSCode</h1>
                    </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://www.notion.so/" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                    <Image src={notion} alt="Notion"/>
                        <h1>Notion</h1>
                    </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://www.jetbrains.com/idea/" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                        <Image src={intellij} alt=""/>
                        <h1>Intellij</h1>
                    </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="hhttps://www.jetbrains.com/rider/" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                        <Image src={rider} alt=""/>
                        <h1>Rider</h1>
                    </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://www.atlassian.com/software/jira" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                        <Image src={jira} alt=""/>
                        <h1>Jira</h1>
                    </div>
                </a>
            </div>
            <div className='tools-flex'>
                <a href="https://www.postman.com" target="_blank" rel='noreferrer'>
                    <div className='tools-item'>
                        <Image src={postman} alt=""/>
                        <h1>Postman</h1>
                    </div>
                </a>
            </div>
            
        </div>
        
        <div className='split'></div>
        </>
    );
}

export default function Home() {
    return (
        <>
        <motion.div 
        className='main'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <Links/>
        <Information/>
        <Pages/>
        <Projects/>
        <Tools/>
        <Footer/>
        </motion.div>      
        </>   
    );
}