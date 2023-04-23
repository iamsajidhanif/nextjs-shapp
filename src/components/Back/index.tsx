
import { useRouter } from "next/router"; // useRouter

const Back = () => {
    const router = useRouter() // useRouter
    return (
        <button onClick={() => router.back()}>Back</button>
    )
}

export default Back

