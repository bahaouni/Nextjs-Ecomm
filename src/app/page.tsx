import styles from "@/app/page.module.css";
import Image from "next/image";
import facebook from '@/images/webi.svg'
import facebooke from '@/images/webi2.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>
      Your Best Online shop destination!
        </h1>
        <p className={styles.description}>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad repellat
          pariatur, nisi assumenda aliquid quod error molestiae similique
          consectetur ipsam suscipit quisquam reiciendis amet accusamus libero
          excepturi odit voluptate eveniet.</p>
        <button className={styles.button}>Shop now </button>
      </div>
      <div className={styles.col}>  <Image  src={facebook}  className={styles.img} alt={"chasetn"} />
</div>
    </div>
  );
}
