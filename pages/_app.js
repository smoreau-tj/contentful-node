import "../styles.scss";

export default function MyApp({ Component, pageProps }) {
  function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  return <Component {...pageProps} />;
}
