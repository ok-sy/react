import { SxProps } from "@mui/material/styles";

export const rootSx: SxProps = {
    
      display: 'flex',
  // alignItems:'center',
  flexDirection: 'column',
  gap: 4,
    '& .MuiSelectHead': {
        margin:'0 auto'
  },
  '& .ContentsBox': {
    display: 'flex',
    border: '1px solid gray',
    gap: 2,
      alignItems: 'center',
      flexDirection: 'row',
    backgroundColor: '#efefef',
    textAlign: 'center',
    justifyContent:'center',
     padding: '1.25rem'
    },
  '& .MuiSelectContents': {
        display: 'flex',
    flexDirection: 'column',
      gap: 3,
   
    },
    '& .MuiSelectBody': {
        display: 'flex',
    flexDirection: 'column',
    gap: 5
    },
    
  }
