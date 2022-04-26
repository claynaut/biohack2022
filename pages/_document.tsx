import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' className='m-0 p-0 box-border overflow-x-hidden font-sans'>
        <Head>
          <meta name='description' content='BioHack, a 24-hour healthcare hackathon hosted at University of California, Riverside.' />
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' rel='stylesheet' />
          <link rel='preload' as='image' href='/assets/sponsors/aspb.png' />
          <link rel='preload' as='image' href='/assets/sponsors/kgi.png' />
          <link rel='preload' as='image' href='/assets/sponsors/blackstone.png' />
          <link rel='preload' as='image' href='/assets/sponsors/acm.png' />
          <link rel='preload' as='image' href='/assets/sponsors/asucr.png' />
        </Head>
        <body className='text-text bg-primary-300'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
