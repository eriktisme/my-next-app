import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { cn } from '@packages/utils'

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html className={'h-full w-full overflow-hidden'} lang={'en'}>
        <Head>
          <style jsx global={true}>
            {`
              #__next {
                width: 100%;
                height: 100%;
            `}
          </style>
        </Head>
        <body
          className={cn(
            'w-full',
            'h-full',
            'font-sans',
            'antialiased',
            'overflow-hidden'
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
