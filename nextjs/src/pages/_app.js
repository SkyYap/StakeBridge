import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stake Bridge</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
