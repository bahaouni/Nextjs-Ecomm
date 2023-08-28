import Image from "next/image";
import styles from "./post.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface PostProps {
  params: {
    id: string; // Adjust the type accordingly
  };
}

export default async function Post({ params }: PostProps) {
  const data = await getData();
  const products = data.products[(params.id) -1]; // Access the first product's ID

  console.log(products);

  return (
    <div className={styles.container}>
  <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{products.title}</h1>
          <p className={styles.desc}>{products.description}</p>
        </div>
        <div className={styles.imageContainer}>      <Image
        src={products.images[0]}// Provide a valid image URL here
        alt="post image"
        className={styles.image}
        width={500} // Set your desired width
        height={300} // Set your desired height
      />
     <span  className={styles.author}>Baha eddine Ouni</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
       Price : {products.price}
       <button>     Buy it now ! </button>
        </p>
      </div>    </div>
  );
}
