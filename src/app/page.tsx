"use client";

import RandomQuote from "@/components/loadingScreen/quotes/quotes";
import styles from "./home.module.scss";
import JoinSite from "@/components/loadingScreen/joinSite/joinSite";
import { useEffect, useState } from "react";
import HomePageContent from "@/components/homePageContent/homePageContent";
import { CharachterStories } from "@/utils/charachters";
import CharactherComponent from "@/components/homePageContent/characther/characther";
import Testimonials from "@/components/homePageContent/testimonials/testimonials";
import Footer from "@/components/homePageContent/footer/footer";

const HomePage = () => {
    const [showLoding, setShowLoading] = useState<boolean>(true);
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
    const [isFadingIn, setIsFadingIn] = useState<boolean>(false);

    const [charachter, setCharachter] = useState<CharachterStories | null>(
        null
    );
    const [testimonial, setTestimonial] = useState<string | null>(null);

    const loadingTimeout = 7000;
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

    const handleCharacterFromChild = (charachters: CharachterStories) => {
        setCharachter(charachters);
    };

    const handleTestimonialFromChild = (testimonial: string) => {
        setTestimonial(testimonial);
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
                    <HomePageContent
                        sendDataToParent={handleCharacterFromChild}
                        sendTestimonialToParent={handleTestimonialFromChild}
                    />
                    <div></div>
                    <CharactherComponent charachter={charachter} />
                    <img
                        className={styles.barbedWireHr}
                        src="/img/filo_spinato.png"
                        alt=""
                    />
                    <Testimonials testimonial={testimonial} />
                    <img
                        className={styles.barbedWireHr}
                        src="/img/filo_spinato.png"
                        alt=""
                    />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default HomePage;
