import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  makeVar,
  type NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT ?? ''

export const accountBalanceVar = makeVar(0)
export const currentAccountHolderIdVar = makeVar('')

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: endpoint,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}

export function useApollo(initialState: any) {
  const store = useMemo(() => {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
      _apolloClient.cache.restore(initialState)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
  }, [initialState])
  return store
}
