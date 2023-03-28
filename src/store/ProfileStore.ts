import { UserAccount } from '@/model/UserAccount'
import { action, computed, makeObservable, observable } from 'mobx'

/**
 * @class 사용자 프로필 상태를 보관하는 mobx 스토어
 */
export default class ProfileStore {
    constructor() {
        makeObservable(this)
    }

    @observable private profile_: UserAccount | null = null

    @computed get isLoggedIn(): boolean {
        return this.profile_ != null
    }

    @computed get profile(): UserAccount | null {
        return this.profile_
    }

    /**
     * 로그인 프로필 변경, 로그 아웃할 때는 null을 대입
     */
    @action setProfile = (profile: UserAccount | null) => {
        this.profile_ = profile
    }
}
