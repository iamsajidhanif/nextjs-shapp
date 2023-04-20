import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Back from "../components/Back";
import Link from 'next/link'

export default function contact() {
  return (
    <>
     <center>
        <br />
        <h2>Contact Us</h2>
        <br />
        <Back />
      </center>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog Page</Link>
          </li>
        </ul>
        {/* <button onClick={() => router.back()}> */}
        {/* <h2>Back</h2>
        </button> */}
      </main>
    </>
  );
}
