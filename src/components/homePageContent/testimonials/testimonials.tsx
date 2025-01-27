import styles from "./testimonials.module.scss";

type TestimonialsProps = {
    testimonial: string | null;
};

const Testimonials = ({ testimonial }: TestimonialsProps) => {
    return (
        <div id="testimonials" className={styles.testimonialContainaer}>
            <h1>
                Leggi delle <span>testimonianze</span>
            </h1>
            <div className={styles.testimonial}>
                {testimonial ? testimonial : ""}
            </div>
        </div>
    );
};

export default Testimonials;
