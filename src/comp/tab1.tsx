import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Button, Input, Wrap, WrapItem } from "@chakra-ui/react";
import readXlsxFile from "read-excel-file"

export function Tab1() {
    type transType = {
        id: string
        kor: string
        eng: string
        chn: string
        jpn: string
    }
    const transLst : transType[] = []

    return (
        <div>
            <Wrap>
                <WrapItem>
                    <Avatar name="bkkim" src='https://nid.naver.com/user2/api/route?m=routePcProfileModification' />
                </WrapItem>
            </Wrap>
            <Alert status='error' style={{ marginTop: '10px'}}>
                <AlertIcon />
                <AlertTitle>경고창!</AlertTitle>
                <AlertDescription>그냥 해봤어.</AlertDescription>
            </Alert>
            <Alert status='success'>
                <AlertIcon />
                <AlertTitle>녹색!</AlertTitle>
                녹색이야.
            </Alert>
            <Alert status='info'>
                <AlertIcon />
                <AlertTitle>파란거!</AlertTitle>
                파란게 이뻐.
            </Alert>
            <Input type="file" accept='.txt'
            onChange={(e) => {
                const txt = e.target.files
                
                if(txt && txt?.length > 0) {
                    const r = new FileReader()
                    r.onloadend = (e : ProgressEvent<FileReader>) => {
                        if(e.target && e.target.result) {
                            const lst = typeof e.target.result === 'string' ? e.target.result.split('\r\n') : []
                            lst.map((ll: string) => {
                                const lll = ll.split(' ')
                                if(lll.length > 2 && lll[0] === 'export' && lll[1] === 'const') {
                                    const llid = lll[2]
                                    const tmpLng = ll.substring(ll.indexOf('getTxtMsg(\'')).split('\'')
                                    const llkor = tmpLng.length === 9 ? tmpLng[1] :  ''
                                    const lleng = tmpLng.length === 9 ? tmpLng[3] :  ''
                                    const llchn = tmpLng.length === 9 ? tmpLng[5] :  ''
                                    const lljpn = tmpLng.length === 9 ? tmpLng[7] :  ''
                                    transLst.push({id: llid, kor: llkor, eng: lleng, chn: llchn, jpn: lljpn})
                                }
                            })
                        }
                    }
                    r.readAsText(txt[0])
                }
            }} />
            <Input type="file" accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
            onChange={(e) => {
                const exlF = e.target.files
                if(exlF && exlF?.length > 0) {
                    readXlsxFile(exlF[0]).then(r => {
                        r.map(rr => {
                            if(rr[1] !== null) {
                                const flt = transLst.filter(tl => tl.kor === rr[3])
                                if(flt.length === 1) {
                                    flt[0].chn = rr[5] as string
                                } else if (flt.length > 1) { 
                                    console.log(flt)
                                } else {
                                    transLst.push({id: '', kor: rr[3] as string, eng: '', chn: rr[5] as string, jpn: ''})
                                }
                            }
                        })
                    })
                }
            }} />
            <Button onClick={() => {
                let ret = ''
                transLst.map(tl => {
                    ret += `export const ${tl.id} = () => { return getTxtMsg('${tl.kor}', '${tl.eng}', '${tl.chn}', '${tl.jpn}') } \n`
                })
                console.log(ret)
            }}>스크립트 생성</Button>
            <Button onClick={() => {
                let ret = ''
                transLst.map(tl => {
                    ret += `${tl.kor}\n`
                })
                console.log(ret)
            }}>텍스트만</Button>
        </div>
    )
}