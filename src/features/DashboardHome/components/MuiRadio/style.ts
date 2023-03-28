import { SxProps } from "@mui/material";


export const rootSx: SxProps = {
      display: 'flex',
  // alignItems:'center',
  flexDirection: 'column',
    border: '1px, solid, red',
    gap: 4,
    '& .MuiRadio_body_text': {
    display: 'flex',
    border: '1px, solid, red',
    gap:4,
  },
}