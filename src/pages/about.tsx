
import Link from 'next/link'

export default function about() {
  return (
    <div>
      <center>
      <br />
      <h2>About Us</h2>
      <br />
      <Link href="/">
        <h3>Home</h3>
        </Link>
        </center>
    </div>
  );
}

// const about = () => {
//   return (
//     <div>
//       <br />
//       <h2>About Us</h2>
//       <br />
//       <Link href="/">
//         <h3>Home</h3>
//       </Link>
//     </div>
//   )
// }

// export default about