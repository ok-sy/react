import { enableStaticRendering, Provider } from 'mobx-react'
import React from 'react'
import { RootStore } from './RootStore'
import { RootStoreInitialState } from './types'

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

/**
 * 루트 스토어
 */
let rootStore: RootStore | undefined

type Props = {
    children: JSX.Element
    rootStoreInitialState: RootStoreInitialState | undefined | null
}

/**
 * RootStore 초기화
 */
function initializeStore(initialData: RootStoreInitialState | undefined | null): RootStore {
    const _store = rootStore ?? new RootStore()

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    if (initialData) {
        _store.hydrate(initialData)
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store

    // Create the store once in the client
    if (!rootStore) rootStore = _store

    return _store
}

/**
 * Mobx 스토어 프로바이더
 */
export default function StoreProvider(props: Props) {
    const { children, rootStoreInitialState } = props
    const store = initializeStore(rootStoreInitialState)
    const subStores = Object.entries(store).reduce((acc, cur) => {
        const [key, value] = cur
        if (typeof key === 'string' && key.endsWith('Store') && value && typeof value === 'object') {
            acc[key] = value
        }
        return acc
    }, {} as Record<string, any>)

    return <Provider {...subStores}>{children}</Provider>
}
