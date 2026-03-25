import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import { useEffect, useState } from "react";
export const APP_TITLE = "Play";

type PlayProps = {
    addNewGameResult: (g: GameResult) => void;
    setTitle: (t: string) => void;
    players: string[];
};

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle,
    players,
}) => {

    console.log(players);

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
        {
            players.map(
                x => (
                    <button
                        key={x}
                        className="btn btn-soft btn-lg w-full lg:w-64 mb-2"
                        onClick={
                            () => {
                                addNewGameResult({
                                    winner: x,
                                    players: players,
                                    start: startTimestamp,
                                    end: new Date().toISOString(),
                                });
                                nav(-2);
                            }
                        }
                    >
                        {
                            `${x} Won`
                        }
                    </button> 
                )
            )
        }
            
        </>
    )
};