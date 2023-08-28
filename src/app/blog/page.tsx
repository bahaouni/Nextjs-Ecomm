import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product: any) => (
        <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
          <div className={styles.container}>
            <Image
              src={product.images[0]}
              alt="post image"
              className={styles.image}
              width={350}
              height={250}
            />
            <div className={styles.content}>
              <h1 className={styles.title}> {product.title}</h1>
              <p className={styles.text}>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
