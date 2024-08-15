import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/public/img/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="How about moderating your server with endless possibilities? Use automod and an advanced moderation system and have some fun with more than 500+ commands!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Mediocre" />
          <meta name="twitter:creator" content="@Mediocre" />
          <meta property="og:url" content="https://mediocre-bot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mediocre" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How about moderating your server with endless possibilities? Use automod and an advanced moderation system and have some fun with more than 500+ commands!"
          />
          <meta property="og:image" content="/public/img/logo.jpg" />
          <meta property="og:image:alt" content="Mediocre" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Mediocre"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/public/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
