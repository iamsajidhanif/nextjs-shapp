
import Link from "next/link";
import { Counter, Todo } from "@/components";

export default function services() {
  return (
    <>
      <center>
        <br />
        <h2>Services</h2>
        <br />
        <Counter />
        <br />
        <br />
        <br />
        <Todo />
        <br />
        <br />
        <Link href="/">
          <h3>Home</h3>
        </Link>
      </center>
    </>
  );
}

// const services = () => {
//   return (
//     <div>
//       <br />
//       <h2>Services</h2>
//       <br />
//       <Link href="/">
//         <h3>Home</h3>
//       </Link>
//     </div>
//   )
// }

// export default services
