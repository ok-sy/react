export type MemberFieldsKey =
    | 'id'
    | 'userName'
    | 'callNumber'
    | 'representativeTell'
    | 'team'
    | 'club'
    | 'position'
    | 'fax'
    | 'email'
    | 'organization'
    | 'address'
    | 'partyMember'
    | 'memo'

export const MemberFields: Record<MemberFieldsKey, string> = {
    id: '고유 ID',
    userName: '이름',
    callNumber: '연락처',
    representativeTell: '대표번호',
    team: '부서',
    club: '그룹',
    position: '직함',
    fax: '팩스',
    email: '이메일',
    organization: '단체명',
    address: '주소',
    partyMember: '당원',
    memo: '메모',
}

export type MemberField = {
    fieldKey: MemberFieldsKey
    fieldName: string
    visible: boolean
}
