// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/RoadMap.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function RoadMap(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h1>RoadMap for the Fractint Art</h1>
        <h2>First Airdrop with 1000 unique designs will be sold at OpenSea.</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>20% SOLD</h3>
          <p>
          Holders buy first 200 Fractint Art for team and project purposes: giveaways, remuneration, and team members collections. We pay back our early investors.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Physcial copy/ Surprise gifts</h3>
          <p>
          We will take a screenshot of the holders and start sending the physcial copy of the art to selected owners. Also there will be surprise gifts to the owners.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Charity work</h3>
          <p>
             We will be donating the amount to charity work puprose from the sales.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Host meetups for the holders and Party</h3>
          <p>
          We will be hosting the meetups for the holders and sponsor the venue. Stay cool and lets the party begin.
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
          <h3>Airdrop 2?</h3>
          <p>
          Yeah you read it correct there will be a party for the next airdop and grow the community for next quater release. There will be Stunning AI arts will be added to the drop. Surprise!!!
          </p>
        </div>

      </div>
    </Layout>
  );
}
