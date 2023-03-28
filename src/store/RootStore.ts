import log from '@/log'
import MainLayoutStore from './MainLayoutStore'
import ProfileStore from './ProfileStore'
import SidebarStore from './SidebarStore'
import { RootStoreInitialState } from './types'

/**
 * @class Mobx 루트 스토어
 */
export class RootStore {
    mainLayoutStore = new MainLayoutStore()

    sidebarStore = new SidebarStore()

    profileStore = new ProfileStore()

    /**
     * hydrate
     */
    hydrate = (data: RootStoreInitialState | null | undefined) => {
        log.debug('store hydrate:', data)
        // this.intlStore.hydrate(data?.intlStoreData)
        // add other stores
    }
}
