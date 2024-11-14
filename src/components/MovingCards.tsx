'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { Boxes } from './ui/background-boxes'

const courses = [
  {
    quote:
      'Unlock your creativity by exploring the fundamentals of design, color theory, and typography. Dive into hands-on projects that help you build a solid foundation in graphic design.',
    name: 'Introduction to Graphic Design',
    title: 'Design Fundamentals',
  },
  {
    quote:
      'Learn to master JavaScript, the essential language of the web, by understanding its core concepts. Build interactive and engaging websites from scratch, enhancing your web development skills.',
    name: 'JavaScript Basics',
    title: 'Web Development Essentials',
  },
  {
    quote:
      'Discover how to create dynamic and responsive web applications with React. From components to state management, this course equips you with the skills needed to build modern web interfaces.',
    name: 'React Development',
    title: 'Frontend Frameworks',
  },
  {
    quote:
      "Develop the skills to analyze data, visualize trends, and make data-driven decisions. This beginner's course introduces you to data science concepts and the tools needed for effective data analysis.",
    name: 'Data Science for Beginners',
    title: 'Data Analysis and Visualization',
  },
  {
    quote:
      'Learn the principles of UI/UX design to create beautiful and user-friendly apps. Understand user psychology, wireframing, and prototyping to deliver an exceptional user experience.',
    name: 'UI/UX Design',
    title: 'Design Thinking',
  },
  {
    quote:
      'Get a strong foundation in cloud technologies with AWS Cloud Practitioner. Learn about core cloud services, architecture, and security to launch your journey in cloud computing.',
    name: 'AWS Cloud Practitioner',
    title: 'Cloud Computing Foundations',
  },
  {
    quote:
      'Master backend development by building scalable applications with Node.js and Express. This course covers essential backend concepts, including routing, databases, and authentication.',
    name: 'Node.js and Express',
    title: 'Backend Web Development',
  },
  {
    quote:
      'Turn your ideas into actionable plans and lead successful projects. This course covers project management fundamentals, from planning and scheduling to risk management and communication.',
    name: 'Project Management Basics',
    title: 'Business Management',
  },
  {
    quote:
      'Learn to protect sensitive information and secure systems against threats. This course introduces you to key cybersecurity concepts, including network security, encryption, and ethical hacking.',
    name: 'Cybersecurity Fundamentals',
    title: 'Security in IT',
  },
  {
    quote:
      'Harness the power of machine learning to make data-driven decisions. Understand algorithms, data processing, and model evaluation to start your journey in AI and machine learning.',
    name: 'Machine Learning 101',
    title: 'AI and Machine Learning',
  },
]

const MovingCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-xl text-center font-semibold md:text-3xl duration-200 mb-8'>Hear our Hermony: Voices of success</h2>
        <Boxes />
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className='w-full max-w-6xl'>
          <InfiniteMovingCards items={courses} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  )
}

export default MovingCards
