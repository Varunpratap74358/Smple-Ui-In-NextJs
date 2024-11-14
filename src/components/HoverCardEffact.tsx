"use client"
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'

export function HoverCardEffact() {
    const webinars = [
        {
          title: "JavaScript Essentials",
          description: "A deep dive into the basics and advanced concepts of JavaScript, ideal for beginners and intermediates.",
          link: "https://example.com/webinars/js-essentials"
        },
        {
          title: "Mastering React",
          description: "An advanced session on building efficient and scalable applications using React.",
          link: "https://example.com/webinars/mastering-react"
        },
        {
          title: "Node.js for Backend Development",
          description: "Explore backend development using Node.js, covering REST APIs, authentication, and database connections.",
          link: "https://example.com/webinars/nodejs-backend"
        },
        {
          title: "Intro to Machine Learning",
          description: "An introductory webinar on machine learning concepts and techniques, including supervised and unsupervised learning.",
          link: "https://example.com/webinars/intro-ml"
        },
        {
          title: "Building RESTful APIs with Express",
          description: "Learn to create robust REST APIs using Express.js and connect them to a database.",
          link: "https://example.com/webinars/express-rest-api"
        },
        {
          title: "Cloud Computing Basics",
          description: "Understand the fundamentals of cloud computing, including cloud services, providers, and deployment models.",
          link: "https://example.com/webinars/cloud-computing"
        },
        {
          title: "Intro to Cybersecurity",
          description: "Get started with cybersecurity concepts, threats, and preventive measures for online security.",
          link: "https://example.com/webinars/intro-cybersecurity"
        },
        {
          title: "Data Analysis with Python",
          description: "Learn data analysis techniques using Python libraries like Pandas, NumPy, and Matplotlib.",
          link: "https://example.com/webinars/python-data-analysis"
        },
        {
          title: "SEO Fundamentals",
          description: "A beginner's guide to search engine optimization, covering on-page, off-page, and technical SEO.",
          link: "https://example.com/webinars/seo-fundamentals"
        },
        {
          title: "Digital Marketing Strategy",
          description: "An overview of digital marketing strategies, including social media, email marketing, and content strategy.",
          link: "https://example.com/webinars/digital-marketing"
        }
      ];
      

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg md:text-xl text-teal-600 font-semibold">
            FETURED WEBINARS
          </h2>
          <p className="text-3xl md:text-5xl font-bold mt-3">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={webinars} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={'/courses'}
            className="bg-slate-200 text-slate-900 py-2 px-4 rounded-md hover:bg-slate-400 hover:text-slate-100 duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}
