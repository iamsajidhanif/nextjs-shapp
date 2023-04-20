import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Back from "../components/Back";

export default function blog() {
  return (
    <>
      <center>
        <br />
        <h2>Blog Page</h2>
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
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        {/* <button onClick={() => router.back()}> */}
        {/* <h2>Back</h2>
        </button> */}
      </main>
    </>
  );
}
