import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <link rel="icon" href="/remindeen-logo.png" sizes="any" />
        <title>Remindeen</title>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
