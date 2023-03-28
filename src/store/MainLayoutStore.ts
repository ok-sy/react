import { action, observable, makeObservable, computed } from 'mobx'

/**
 * MainLayout의 상태를 보관하는 mobx 스토어
 */
export default class MainLayoutStore {
    constructor() {
        makeObservable(this)
    }

    @observable private footerBackgroundColor_ = '#f5f5f5'

    @computed get footerBackgroundColor(): string {
        return this.footerBackgroundColor_
    }

    @action setFooterBackgroundColor = (color: string) => {
        this.footerBackgroundColor_ = color
    }
}
