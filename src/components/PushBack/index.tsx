
import { useRouter } from "next/router"; // useRouter, remember its history and have "Back" method

const PushBack = () => {
    const router = useRouter(); // useRouter, remember its history and have "Back" method
    return (
        <button onClick={() => router.push('/gallery')}>Go to Gallery</button>
        )
    }
    
    export default PushBack
    
    
