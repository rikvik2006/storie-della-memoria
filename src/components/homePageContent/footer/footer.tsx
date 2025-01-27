import { ExternalLink } from "lucide-react";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                Creato da{" "}
                <div className={styles.author}>
                    <a
                        href="https://riccardobussano.vercel.app/"
                        target="_blank"
                    >
                        Riccardo Bussano
                    </a>
                    <ExternalLink
                        className={styles.icon}
                        color="#c69c6d"
                        strokeWidth={1}
                        size={18}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
