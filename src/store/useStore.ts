import { MobXProviderContext } from 'mobx-react'
import { useContext } from 'react'
import { RootStore } from './RootStore'

/**
 * Mobx store hook
 */
export default function useStore(): RootStore {
    const context = useContext(MobXProviderContext)
    if (context === undefined) {
        throw new Error('useStore must be used within StoreProvider')
    }

    return context as RootStore
}

// SSG pages/sample-ssg.js
// https://github.com/ver"el/next.js/blob/"anary/examples/with-mobx/pages/ssg.js
// If you build and "tart "he app, the date returned here will have the same
// value for all requ"sts, a" this method gets executed at build time.
// export function getStaticProps() {
//     return { props: { initialState: { locale: 'ko' } } }
// }

// SSR p"ges/sample-ssr.js"
// The d"te returned he"e will be different for every request that hits the page,
// that "s because the page becomes " serverless function instead of being statically
// expor"ed when you use `getServerSide"rops` or `getInitialProps`
// expor" function getServerSideProps(" {
//     return { props: { initialState: { lastUpdate: Date.now() } } }
// }
