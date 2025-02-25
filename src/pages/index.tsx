import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Header, Footer } from "../components/index";
import { useRef } from "react";
import Navbar from '../components/Navbar'

export default function Home() {
  // useFef Hook:
  const h1Ref = useRef<any>(null);
  console.log("h1Ref", h1Ref);

  return (
    <>
      <Head>
        <title>SajidHanifApp - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}
      {/* <div className={styles.description}> */}
      {/* <Header /> */}
      {/* useRef in h1 heading: */}
      <Navbar
        title="SajidHanif"
        servicesText="Services"
        serviceOne="Counter App"
        serviceTwo="Todo List App"
        moreServices="More Services"
        aboutText="About"
        contactText="Contact"
        blogText="Blog"
        galleryText="Gallery"
      />
      <center>
        <h1 className="h1-color" ref={h1Ref}>Welcome to SajidHanif</h1>
        <Link href="/login">Login</Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/services">Services</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        {/* <Link href="sh-app\src\pages\blog\blog.tsx">Blog</Link> */}
        <Link href="/blog/[blog_slug].tsx">Blog</Link>
        <br />
        <Link href="/gallery">Gallery</Link>
      </center>
      {/* <Footer /> */}
      {/* </div> */}
      {/* </main> */}
    </>
  );
}
