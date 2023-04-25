
import Button from 'react-bootstrap/Button'; // React-Bootstrap library
import { useRouter } from "next/router"; // useRouter, remember its history and have "Back" method

const Back = () => {
    const router = useRouter() // useRouter, remember its history and have "Back" method
    return (
        // <button onClick={() => router.back()}>Back</button>
        <Button onClick={() => router.back()} variant="primary">Back</Button>
        // React-Bootstrap library button
            )
    }
    
    export default Back

