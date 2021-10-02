// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Home.module.scss"; // Styles
import logo from "../public/meta.png";

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/fractint-art-collection" },
    {
      name: "Twitter",
      url: "https://twitter.com/FractintArt",
    },
    {
      name: "Discord",
      url: "https://discord.gg/kYNsVm4fAh",
    },
  ];


  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Fractint Art Collection</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>FractintArt collections is a most innovative NFT Project. <br /> Arts are created in the a form of mathematical algorithmic by calculating fractal objects and representing the calculation results as still digital images. <br />
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Gallery images</span>


          <div className={styles.home__cta}>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 5.jpg">
    <img src="/genericImage 5.jpg" alt="Snow" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 17.jpg">
    <img src="/genericImage 17.jpg" alt="Forest" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 16.jpg">
    <img src="/genericImage 16.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 33.jpg">
    <img src="/genericImage 33.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 21.jpg">
    <img src="/genericImage 21.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 22.jpg">
    <img src="/genericImage 22.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 26.jpg">
    <img src="/genericImage 26.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  <div className={styles.box}>
  <a target="_blank" href="/genericImage 40.jpg">
    <img src="/genericImage 40.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>

  <div className={styles.box}>
  <a target="_blank" href="/genericImage.jpg">
    <img src="/genericImage.jpg" alt="Mountains" className={styles.width}/>
    </a>
  </div>
  
</div>


          
        </div>
      </div>
    </Layout>
  );
}
