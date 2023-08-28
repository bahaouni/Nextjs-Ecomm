import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Button from "../Button/Button";
import { Lobster } from "next/font/google";
import Dark from "../DarkModeToggle/Dark";
const logoFont = Lobster({ subsets: ['latin'] ,
weight:['400'] , 
})

  
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo}  ${logoFont.className}`}>
        ChaseTN
      </Link>
    
      <div className={styles.links}>
      <Dark />
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url} className={styles.link}>
              {" "}
              {link.title}
            </Link>
          );
        })}
   <Button />
      </div>
    </div>
  );
}
