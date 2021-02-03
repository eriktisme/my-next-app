import '../styles/globals.css'
import { addDecorator } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { linkTo } from '@storybook/addon-links'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const startCase = (string) =>
  string
    .split(' ')
    .map((string) => {
      const word = string.toLowerCase()

      return word.charAt(0).toLocaleUpperCase() + word.slice(1)
    })
    .join(' ')

addDecorator((story) => (
  <RouterContext.Provider
    value={{
      route: '/',
      pathname: '/',
      asPath: '/',
      query: {},
      basePath: '',
      push: (_url, as) => {
        if (as) {
          linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
        }
        return Promise.resolve(true)
      },
      replace: (_url, as) => {
        if (as) {
          linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
        }
        return Promise.resolve(true)
      },
      reload: () => {},
      prefetch: async () => {},
      back: () => {},
      beforePopState: () => {},
      isFallback: false,
      events: {},
    }}
  >
    {story()}
  </RouterContext.Provider>
))
