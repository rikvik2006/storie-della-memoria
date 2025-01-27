"use client";

import { CharachterStories, charactherStories } from "@/utils/charachters";
import styles from "./homePageContent.module.scss";
import { useEffect, useState } from "react";
import { testimonials } from "@/utils/testimonials";

type HomePageContentProps = {
    sendDataToParent: (characther: CharachterStories) => void;
    sendTestimonialToParent: (testimonial: string) => void;
};

const HomePageContent = ({
    sendDataToParent: sendCharacterToParent,
    sendTestimonialToParent,
}: HomePageContentProps) => {
    const [characther, setCharacther] = useState<CharachterStories | null>(
        null
    );
    const [testimonial, setTestimonial] = useState<string | null>(null);

    const getRandomCharacther = () => {
        const randomIndex = Math.floor(
            Math.random() * charactherStories.length
        );
        setCharacther(charactherStories[randomIndex]);
    };

    const getRandomTestimonials = () => {
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        setTestimonial(testimonials[randomIndex]);
    };

    useEffect(() => {
        if (characther) {
            sendCharacterToParent(characther);
        }
    }, [characther, sendCharacterToParent]);

    useEffect(() => {
        if (testimonial) {
            sendTestimonialToParent(testimonial);
        }
    });

    return (
        // <div className={styles.wrapper}>
        <>
            <div className={styles.homePageContent}>
                <h1 className={styles.title}>
                    Storie della <span>Memoria</span>
                </h1>
                <div className={styles.centerButtonContainer}>
                    <a
                        onClick={() => getRandomCharacther()}
                        href="#characther"
                        className={styles.centerButton}
                    >
                        Genera un Personaggio
                    </a>
                    <a
                        onClick={() => getRandomTestimonials()}
                        href="#testimonials"
                        className={styles.centerButton}
                    >
                        Genera un Testimonianza
                    </a>
                </div>
                <img
                    className={styles.barbedWire1}
                    src="/img/filo_spinato.png"
                ></img>
                <img
                    className={styles.journal1}
                    src="/img/giornale_vertical.png"
                ></img>
                <img
                    className={styles.barbedWire2}
                    src="/img/filo_spinato.png"
                ></img>
            </div>
        </>
    );
};

export default HomePageContent;
