import { SxProps } from "@mui/material/styles";

export const rootSx: SxProps = {
    
  display: 'flex',
  // alignItems:'center',
  flexDirection: 'column',
  gap: 4,
  '& .MuiListHead': {
    margin: '0 auto'
  },

  '& .MuiListContents': {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
   
  },
  '& .MuiListBody': {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },

    '& .ContentsBox': {
    
    display: 'flex',
    border: '1px solid gray',
    gap: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#efefef',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '1.25rem',
    flexWrap: 'wrap',
      flex: 'auto',
      
    
  },
  '& .Contents': {
    
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'Start',
    flexWrap: 'wrap',
    flex: 'auto',
    
    
  },
  '& .Contents > .mui-style-1u3bzj6-MuiFormControl-root-MuiList-root ': {
    width : '33%',flexWrap:'wrap'
  }
  }
