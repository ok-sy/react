import { action, observable, makeObservable, computed } from 'mobx'
import log from '@/log'

/**
 * 사이드바 상태를 보관하는 mobx 스토어
 */
export default class SidebarStore {
    constructor() {
        makeObservable(this)
    }

    /**
     * 열림 상태
     */
    @observable private opened_ = false

    /**
     * 자동열림 체크 여부
     * 최초 시점에 Large 화면은 열린 상태, Small화면은 닫힌 상태로 설정
     */
    @observable private isAutoOpenChecked_ = false

    @computed get opened(): boolean {
        return this.opened_
    }

    @computed get isAutoOpenChecked(): boolean {
        return this.isAutoOpenChecked_
    }

    /**
     * 사이드바 열림 상태 변경
     */
    @action setAutoOpenChecked = (checked: boolean) => {
        this.isAutoOpenChecked_ = checked
    }

    /**
     * 사이드바 열림 상태 변경
     */
    @action setOpened = (opened: boolean) => {
        log.debug(`setOpen() changed to ${opened}`)
        this.opened_ = opened
    }

    /**
     * 열림 상태 토글
     */
    @action toggleOpen = () => {
        log.debug(`toggleOpen() changed to ${!this.opened_}`)
        this.opened_ = !this.opened_
    }
}
