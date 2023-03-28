import { SxProps } from '@mui/material'

export const rootSx: SxProps = {
  display:'flex',
  // alignItems:'center',
  flexDirection: 'column',
  gap:4,
  '& .MuiButton-test': {
    display:'flex',
    flexDirection: 'row',
  },
  

  // '& .hhhh': {
  //   border:'1px solid red'
  // }
    
}