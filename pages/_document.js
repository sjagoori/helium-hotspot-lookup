import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Helium hotspot</title>
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="keyword"
            content="dashboard, helium, hnt, crypto, cryptocurrency, mining"
          />

          <meta property="og:title" content="Helium Hotspot Dashboard" />
          <meta
            property="og:description"
            name="Description"
            content="Hotspot dashboard is a PWA for Helium hotspot owners."
          />
          <meta
            property="og:image"
            content="https://banners.beyondco.de/Hotspot%20Dashboard.png?theme=dark&packageManager=&packageName=A+dashboard+for+Helium+hotspot+owners&pattern=bankNote&style=style_1&description=&md=1&showWatermark=0&fontSize=100px&images=globe-alt&widths=400&heights=400"
          />
          <meta property="og:url" content="https://hotspot-dashboard.vercel.app/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
