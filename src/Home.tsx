import { useNavigate } from "react-router";

export const Home = () => {
    // Write code here
    const nav = useNavigate();
    // Return JSX
    return (
        <>
        <h1>
            Home
        </h1>
        <button 
            className="btn btn-primary btn-outline"
            onClick={
                () => nav('/setup')
            }
        >
            Setup a Game
        </button> 
        </>
    )
};