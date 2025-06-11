import { Typography } from '@mui/material';
import { aminoColors } from '../utils/aminoColors';

type Props = {
  letter: string;
  highlight: boolean;
};

export default function AminoBlock({ letter, highlight }: Props) {
  const upper = letter.toUpperCase();
  const bgColor = highlight ? '#FFD4D4' : aminoColors[upper] || '#EEE';

  return (
    <Typography
      component="span"
      sx={{
        display: 'inline-block',
        minWidth: 14,
        padding: '2px 4px',
        backgroundColor: bgColor,
        color: '#000',
        fontFamily: 'monospace',
        fontSize: '14px',
        borderRadius: '3px',
        margin: '1px',
        userSelect: 'text',
        lineHeight: 1.4, 
      }}
    >
      {upper}
    </Typography>
  );
}
