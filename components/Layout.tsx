// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles
import classnames from 'classnames';

// Types
import type { ReactElement } from "react";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>Fractint</title>
      <meta name="title" content="Fractint Art" />
      <meta
        name="description"
        content="FractintArt collections is a most innovative NFT Project. Arts are created in the a form of mathematical algorithmic by calculating fractal objects and representing the calculation results as still digital images and stored on chain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.farctintart.com/" />
      <meta property="og:title" content="Fractint" />
      <meta
        property="og:description"
        content="FractintArt collections is a most innovative NFT Project. Arts are created in the a form of mathematical algorithmic by calculating fractal objects and representing the calculation results as still digital images and stored on chain."
      />
      <meta property="og:image" content="https://www.farctintart.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.farctintart.com/" />
      <meta property="twitter:title" content="Fractint" />
      <meta
        property="twitter:description"
        content="FractintArt collections is a most innovative NFT Project. Arts are created in the a form of mathematical algorithmic by calculating fractal objects and representing the calculation results as still digital images and stored on chain."
      />
      <meta property="twitter:image" content="https://www.farctintart.com/meta.png" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links
  const links = [
    { name: "RoadMap", path: "/roadmap" },
    { name: "FAQ", path: "/faq" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>Fractint</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                          styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footerdark}>
        <footer>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={classnames(styles.colsm6, styles.colmd3, styles.colmd3, styles.item)}>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className={classnames(styles.colsm6, styles.colmd3, styles.item)}>
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className={classnames(styles.colsm6, styles.item, styles.text)}>
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className={classnames(styles.col, styles.item, styles.social)}><a href="#"><i className={classnames(styles.icon, styles.ionsocialfacebook)}></i></a><a href="#"><i className={classnames(styles.icon, styles.ionsocialtwitter)}></i></a><a href="#"><i className={classnames(styles.icon, styles.ionsocialsnapchat)}></i></a><a href="#"><i className={classnames(styles.icon, styles.ionsocialinstagram)}></i></a></div>
                </div>
                <p className={styles.copyright}>Company Name © 2022</p>
            </div>
        </footer>
    </div>

  );
}

