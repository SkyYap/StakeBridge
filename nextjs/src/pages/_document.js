import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>StakeBridge</title>
      </Head>
      <body style={{ margin: '0px', overflow: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
