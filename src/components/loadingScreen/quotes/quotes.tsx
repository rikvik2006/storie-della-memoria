"use client";

import { Quote, quotes } from "@/utils/quotes";
import styles from "./quotes.module.scss";
import { useEffect, useState } from "react";

const RandomQuote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    if (!quote) {
        return null;
    }

    return (
        <div className={styles.quoteContainer}>
            <div className={styles.quoteStart}>&quot;</div>
            <div className={styles.quote}>
                <p className={styles.quoteText}>{quote.quote}</p>
                <p className={styles.quoteAuthor}>- {quote.author}</p>
            </div>
        </div>
    );
};

export default RandomQuote;
