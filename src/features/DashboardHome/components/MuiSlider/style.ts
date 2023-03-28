import { SxProps } from "@mui/material/styles";

export const rootSx: SxProps = {
    
      display: 'flex',
  // alignItems:'center',
  flexDirection: 'column',
  gap: 4,
    '& .MuiSliderHead': {
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
  '& .MuiSliderContents': {
        display: 'flex',
    flexDirection: 'column',
      gap: 3,
   
    },
    '& .MuiSliderBody': {
        display: 'flex',
    flexDirection: 'column',
    gap: 5
    },
    
  }
