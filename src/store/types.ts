export type IntlLocaleKey = 'ko'

export type IntlStoreState = {
    locale: IntlLocaleKey
}

export type RootStoreInitialState = {
    intlStoreData: IntlStoreState
}
