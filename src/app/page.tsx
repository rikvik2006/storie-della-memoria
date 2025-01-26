"use client";

import RandomQuote from "@/components/loadingScreen/quotes/quotes";
import styles from "./home.module.scss";
import JoinSite from "@/components/loadingScreen/joinSite/joinSite";
import { useEffect, useState } from "react";
import HomePageContent from "@/components/homePageContent/homePageContent";

const HomePage = () => {
    const [showLoding, setShowLoading] = useState<boolean>(true);
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
    const [isFadingIn, setIsFadingIn] = useState<boolean>(false);

    const loadingTimeout = 5000;
    const fadeOutTimeout = 1500;
    const fadeInTimeout = 1500;

    useEffect(() => {
        // Timeout before fading out
        setTimeout(() => {
            setIsFadingOut(true);

            setTimeout(() => {
                // Loading screen is fade out, start fading in the home page
                setIsFadingIn(true);

                setTimeout(() => {
                    setShowLoading(false);
                }, fadeInTimeout);
            }, fadeOutTimeout);
        }, loadingTimeout);
    });

    const handleJoinClick = () => {
        setIsFadingOut(true); // Inizia il fade out immediatamente
        setTimeout(() => {
            // Loading screen is fade out, start fading in the home page
            setIsFadingIn(true);

            setTimeout(() => {
                setShowLoading(false);
            }, fadeInTimeout);
        }, fadeOutTimeout);
    };

    return (
        <div className={styles.wrapper}>
            {showLoding ? (
                <div
                    className={`${styles.loadingScreen} ${
                        isFadingOut ? styles.fadeOut : ""
                    }`}
                >
                    <div className={styles.randomQuote}>
                        <RandomQuote />
                    </div>
                    <JoinSite
                        onJoinClick={handleJoinClick}
                        lodingTimeout={loadingTimeout}
                    />
                </div>
            ) : (
                <div
                    className={`${styles.homePage} ${
                        isFadingIn ? styles.fadeIn : ""
                    }`}
                >
                    <HomePage />
                </div>
            )}
        </div>
    );
};

export default HomePageContent;
