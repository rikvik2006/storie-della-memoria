"use client";

import { MoveRight } from "lucide-react";
import styles from "./joinSite.module.scss";
import { useEffect, useState } from "react";

type JoinSiteProps = {
    onJoinClick: () => void;
    lodingTimeout: number;
};

const JoinSite = ({ onJoinClick, lodingTimeout }: JoinSiteProps) => {
    const lodingTimeoutSeconds = lodingTimeout / 1000;
    const [timer, setTimer] = useState<number>(lodingTimeoutSeconds);

    useEffect(() => {
        // for (let i = 0; i < lodingTimeoutSeconds; i++) {
        //     setTimeout(() => setTimer(timer - 1), 1000);
        // }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        if (timer === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <button onClick={() => onJoinClick()} className={styles.joinSiteButton}>
            <div className={styles.timer}>{timer}</div>
            <div>Entra nel sito</div>
            <MoveRight className={styles.arrow} strokeWidth={1} />
        </button>
    );
};

export default JoinSite;
