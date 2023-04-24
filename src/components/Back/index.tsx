
import { useRouter } from "next/router"; // useRouter, remember its history and have "Back" method

const Back = () => {
    const router = useRouter() // useRouter, remember its history and have "Back" method
    return (
        <button onClick={() => router.back()}>Back</button>
        )
    }
    
    export default Back

