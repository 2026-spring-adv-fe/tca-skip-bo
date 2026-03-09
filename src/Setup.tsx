import { useNavigate } from "react-router";

export const Setup = () => {
    // Write code here
    const nav = useNavigate();
    // Return JSX
    return (
        <>
        <button 
            className="btn btn-soft btn-lg w-full lg:w-64"
            onClick={
                () => nav('/play')
            }
        >
            Start Game
        </button> 
        </>
    )
};