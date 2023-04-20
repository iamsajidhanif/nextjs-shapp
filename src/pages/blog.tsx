
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function blog() {
  return (
    <div>
      <center>
      <br />
      <h2>Blog Page</h2>
      <br />
      <Link href="/">
        <h3>Home</h3>
        </Link>
        </center>
    </div>
  );
}

// const blog = () => {
//   return (
//     <div>
//       <br />
//       <h2>Blog Page</h2>
//       <br />
//       <Link href="/">
//         <h3>Home</h3>
//       </Link>
//     </div>
//   )
// }

// export default blog
