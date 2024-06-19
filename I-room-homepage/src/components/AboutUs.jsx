import styles from "./AboutUs.module.scss"
import ImageOne from "../assets/image-about-dark.jpg"
import ImageTwo from "../assets/image-about-light.jpg"

export function AboutUs() {
  return <>
    <section className={styles.aboutus}>
        <figure 
        className={styles["aboutus__figure--one"]}
        style={{backgroundImage: `url(${ImageOne})`}}
        ></figure>
        <div className={styles["aboutus__content"]}>
            <h2 className={styles["aboutus__content--title"]}>About our furniture</h2>
            <p className={styles["aboutus__content--paragraph"]}>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>
        <figure 
        className={styles["aboutus__figure--two"]}
        style={{backgroundImage: `url(${ImageTwo})`}}></figure>
    </section>
    </>;
}
  