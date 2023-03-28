/**
 * @interface WontactMemberType
 */
export interface WontactMemberType {
    /*
     *고유 ID
     */
    id: string
    /*
     *이름
     */
    userName: string
    /*
     *연락처
     */
    callNumber: string
    /*
     *대표번호
     */
    representativeTell?: string
    /*
     *부서
     */
    team?: string
    /*
     *그룹
     */
    club?: string
    /*
     *직함
     */
    position?: string
    /*
     *메모
     */
    memo?: string
    /*
     *팩스
     */
    fax?: string
    /*
     *이메일
     */
    email?: string
    /*
     *단체명
     */
    organization?: string
    /*
     *주소
     */
    address?: string
    /*
     *당원
     */
    partyMember?: string
}
