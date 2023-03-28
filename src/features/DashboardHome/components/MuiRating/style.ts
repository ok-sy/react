import { SxProps } from "@mui/material/styles";

export const rootSx: SxProps = {
    
      display: 'flex',
  // alignItems:'center',
  flexDirection: 'column',
    border: '1px, solid, red',
  gap: 4,
    '& .MuiRatingHead': {
        margin:'0 auto'
  },
  '& .ContentsBox': {
    display: 'flex',
    border: '1px solid gray',
    gap: 2,
      alignItems: 'center',
      flexDirection: 'column',
    backgroundColor: '#efefef',
     padding: '1.25rem'
    },
  '& .MuiRatingContents': {
        display: 'flex',
    flexDirection: 'column',
      gap: 3,
   
    },
    '& .MuiRatingBody': {
        display: 'flex',
    flexDirection: 'column',
    gap: 5
    },
    
  }
