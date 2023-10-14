import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StakeBridge</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
