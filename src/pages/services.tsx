import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { Counter, Todo } from "@/components";
import Back from '../components/Back'
// import { useRouter } from "next/router"; // useRouter

export default function services() {
  // const router = useRouter(); // useRouter
  return (
    <>
      <br />
      <center>
        <h2>Our Services</h2>
        <br />
        <br />
        <Counter />
        <br />
        <br />
        <Todo />
        <Back />
      </center>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
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
