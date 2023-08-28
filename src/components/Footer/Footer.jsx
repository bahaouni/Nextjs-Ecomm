import styles from "@/components/Footer/Footer.module.css"
import Image from "next/image"
import facebook from "@/images/icons/facebook.png"
import instagram from "@/images/icons/instagram.png"
import twitter from "@/images/icons/twitter.png"
import youtube from "@/images/icons/youtube.png"
import telegram from "@/images/icons/telegram.png"
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©
2023 Chase. All rights reserved. </div>
<div className={styles.social}>
  <Image  src={facebook} width={20} height={20} className={styles.icon} />
  <Image  src={instagram} width={20} height={20} className={styles.icon} />
  <Image  src={twitter} width={20} height={20} className={styles.icon} />
  <Image  src={youtube} width={20} height={20} className={styles.icon} />
  <Image  src={telegram} width={20} height={20} className={styles.icon} />


</div>
    </div>
  )
}
