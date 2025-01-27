"use client";

import styles from "./characther.module.scss";
import { CharachterStories } from "@/utils/charachters";

type CharactherComponentProps = {
    charachter: CharachterStories | null;
};

const CharactherComponent = ({ charachter }: CharactherComponentProps) => {
    return (
        <div id="characther" className={styles.charactherStoryContainaer}>
            <h1>
                La tua <span>Storia</span>
            </h1>
            <div className={styles.charactherName}>
                {charachter ? `Ti chiami: ${charachter.name}` : ""}
            </div>
            <div className={styles.charactherStory}>
                {charachter ? charachter.story : ""}
            </div>
        </div>
    );
};

export default CharactherComponent;
