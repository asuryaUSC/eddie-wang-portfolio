import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Certifications from '../components/Certifications';
import Volunteering from '../components/Volunteering';
import HonorsAwards from '../components/HonorsAwards';
import Links from '../components/Links';
import Footer from '../components/Footer';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl px-4 py-8">
          <Header />
          <AboutMe />
          <Education />
          <Experiences />
          <Certifications />
          <Volunteering />
          <HonorsAwards />
          <Footer/>
        </div>
      </div>
    </>
  )
}

