'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: 'Jane Doe'
  isFeatured: boolean
}

const FeturedCourses = () => {
  let feturedCourses = courseData.courses.filter(
    (course:Course) => course.isFeatured,
  )

  return (
    <div className="py-12 bg-gray-900 px-10">
      <div>
        <div className="text-center">
          <h2 className="text-lg md:text-xl text-teal-600 font-semibold">
            FETURED COURSES
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            Lern is The best
          </h1>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {feturedCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div>
                  <h2 className="text-center text-lg text-teal-600 ">
                    {course.title}
                  </h2>
                  <p className="text-center mt-5">{course.description}</p>
                  <div className="text-end mt-5">
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-blue-500 bg-slate-200 py-2 px-3 rounded-md shadow-md shadow-slate-500"
                    >
                      Lern More
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={'/courses'}
          className="bg-slate-200 text-slate-600 py-2 px-4 rounded-md hover:bg-slate-400 hover:text-white duration-200 shadow-md hover:shadow-slate-500"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeturedCourses
