import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import { useEffect, useState } from "react";
export const APP_TITLE = "Play";

type PlayProps = {
    addNewGameResult: (g: GameResult) => void;
    setTitle: (t: string) => void;
};

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle,
}) => {

    useEffect(
            () => setTitle(APP_TITLE),
            [],
        );
        
    // Write code here
    const nav = useNavigate();
    const [startTimestamp] = useState(new Date().toISOString());

    // Return JSX
    return (
        <>
            <button 
                className="btn btn-soft btn-lg w-full lg:w-64"
                onClick={
                    () => {
                        addNewGameResult({
                            winner: "Snape",
                            players: [
                                "Snape",
                                "Dumbledore",
                            ],
                            start: startTimestamp,
                            end: new Date().toISOString(),
                        });
                        nav(-2);
                    }
                }
        >
            Game Over
        </button> 
        </>
    )
};