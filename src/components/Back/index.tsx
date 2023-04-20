
import { useRouter } from "next/router"; // useRouter

const Back = () => {
    const router = useRouter() // useRouter
    return (
        <button onClick={() => router.back()}><h2>Back</h2></button>
    )
}

export default Back