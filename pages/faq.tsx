// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is FractintArt?</h3>
          <p>
          FractintArt collections is a most innovative NFT Project. Arts are created in the a form of mathematical algorithmic by calculating fractal objects and representing the calculation results as still digital images.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is FractintArt special?</h3>
          <p>
          These images have become more popular outside mathematics both for its aesthetic appeal and as an example of a complex structure arising from the application of simple rules. It is one of the best-known examples of mathematical visualisation, mathematical beauty, and motif.
          </p>
          <p>
          Images of the set exhibit an elaborate and infinitely complicated boundary that reveals progressively ever-finer recursive detail at increasing magnifications.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>How much does A FractintArt NFT cost?</h3>
          <p>
             A FractintArt costs 0.04 Ξ. You are allowed to buy as many as you want in opensea. There is no time limit to mint.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>How do I buy the FractintArt NFT?</h3>
          <p>
          You can buy from our Opensea collection <a
              href="https://opensea.io/collection/fractint-art-collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fractint Art
            </a>
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>How many Art will be present in this cured program?</h3>
          <p>
            There will be 10000 unique arts creatd from the professional designers and airdropped to opensea for the initial 1000 arts.
          </p>
        </div>

        {/* Am I priced out of loot? */}
        <div className={styles.faq__item}>
          <h3>What is the history behind this art?</h3>
          <p>
          Fractal art is a form of algorithmic art created by calculating fractal objects and representing the calculation results as still digital images, animations, and media. Fractal art developed from the mid-1980s onwards.[2] It is a genre of computer art and digital art which are part of new media art. The mathematical beauty of fractals lies at the intersection of generative art and computer art. They combine to produce a type of abstract art.
          </p>
          <p>
            You can refer more on the histery of this art here  
            <a
              href="https://en.wikipedia.org/wiki/Fractal_art"
              target="_blank"
              rel="noopener noreferrer"
            >{" "}
              Fractal Arts
            </a>
          </p>
        </div>

      </div>
    </Layout>
  );
}
