import "@/styles/globals.css";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

const SEOSettings = {
  title: "Navkar - Jivan Hospital",
  sitename: "Navkar",
  icon: "/favicon.ico",
  url: "https://navkar-jivan-hospital.vercel.app/",
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{SEOSettings.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={SEOSettings.icon}></link>
        <link rel="apple-touch-icon" href={SEOSettings.icon} />
        <link rel="canonical" href={SEOSettings.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEOSettings.title} />
        <meta property="og:url" content={SEOSettings.icon} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={SEOSettings.sitename} />
        <meta
          property="article:modified_time"
          content="2021-08-15T11:42:51+00:00"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
