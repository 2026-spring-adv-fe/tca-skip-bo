import { useNavigate } from "react-router";

export const Play = () => {
    // Write code here
    const nav = useNavigate();
    // Return JSX
    return (
        <>
        <h1>
            Setup
        </h1>
        <button 
            className="btn btn-primary btn-outline"
            onClick={
                () => nav(-2)
            }
        >
            End Game
        </button> 
        </>
    )
};