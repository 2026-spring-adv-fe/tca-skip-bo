import { useEffect } from "react";
import { useNavigate } from "react-router";
export const APP_TITLE = "Setup";

type SetupProps = {
    setTitle: (t: string) => void;
}

export const Setup: React.FC<SetupProps> = ({
    setTitle,
}) => {

    useEffect(
            () => setTitle(APP_TITLE),
            [],
        );
    // Write code here
    const nav = useNavigate();

    setTitle("Setup");
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