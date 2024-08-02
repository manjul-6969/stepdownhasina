import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <Head>
        <title>Exposing Government Corruption - Video Records & Evidence</title>
        <meta
          name="description"
          content="Tracking government corruption with video evidence. Stay informed and hold those in power accountable."
        />
        <meta name="manifest" content="/site.webmanifest" />
        <meta
          name="abstract"
          content="A platform for tracking and exposing government corruption through video evidence."
        />
        <meta
          name="keywords"
          content="government corruption, video evidence, transparency, accountability, political scandals, public records, corruption tracking, investigative journalism"
        />
        <meta name="application-name" content="Corruption Tracker" />
        <meta name="category" content="Government Accountability" />
        <meta name="classification" content="Platform" />
        <meta name="creator" content="@corruptionwatcher" />
        <meta name="generator" content="Evidence Collector" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Exposing Government Corruption - Video Records & Evidence"
        />
        <meta
          property="og:description"
          content="Tracking government corruption with video evidence. Stay informed and hold those in power accountable."
        />
        <meta property="og:url" content="https://stepdownhasina.vercel.app/" />
        <meta
          property="og:image"
          content="https://stepdownhasina.vercel.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Corruption Tracker" />
        <meta
          property="og:video"
          content="https://www.youtube.com/watch?v=dOHpGDutmKQ&rco=1"
        />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1080" />
        <meta property="og:ttl" content="60" />

        <meta
          name="twitter:title"
          content="Exposing Government Corruption - Video Records & Evidence"
        />
        <meta
          name="twitter:description"
          content="Tracking government corruption with video evidence. Stay informed and hold those in power accountable."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@corruptionwatcher" />
        <meta name="twitter:creator" content="@corruptionwatcher" />
        <meta
          name="twitter:image"
          content="https://stepdownhasina.vercel.app/og-image.png"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />

        <meta name="referrer" content="origin" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-startup-image"
          href="/apple-touch-startup-image.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-title" content="Corruption Tracker" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-image"
          content="/apple-touch-icon.png"
        />
      </Head>
      <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
        <Navbar />
        <div className="flex gap-6 md:gap-20 ">
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Analytics />
            <GoogleAnalytics gaId="G-WEH8067BWV" />
            <GoogleAnalytics gaId="G-82GB1617RE" />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
