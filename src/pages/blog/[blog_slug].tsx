import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Back from "../../components/Back";
import { useRouter } from "next/router";

export default function BlogSlug() {
  const router = useRouter();
  const { blog_slug } = router.query;

  return (
    <>
      <Head>
        <title>SajidHanifApp - {blog_slug}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}
      <Navbar
        title="SajidHanifApp"
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
        <h1 className="h1-color">Blog</h1>
        <h2 className="app-color">This is the {blog_slug}</h2>
        <br />
        <Back />
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
        <Link href="/">Home</Link>
        <br />
        <Link href="/services">Services</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        <Link href="/gallery">Gallery</Link>
      </center>
      {/* </main> */}
    </>
  );
}
