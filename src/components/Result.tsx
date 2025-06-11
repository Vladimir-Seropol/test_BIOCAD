import { Box } from '@mui/material';
import Block from './Block';

type Props = {
  seq1: string;
  seq2: string;
};

const chunkString = (str: string, size: number): string[] =>
  str.match(new RegExp(`.{1,${size}}`, 'g')) || [];

export default function Result({ seq1, seq2 }: Props) {
  const chunkSize = 50; 
  const rows1 = chunkString(seq1, chunkSize);
  const rows2 = chunkString(seq2, chunkSize);

  return (
    <Box mt={4} data-copy-zone>
      {rows1.map((chunk1, idx) => {
        const chunk2 = rows2[idx];
        return (
          <Box key={idx} sx={{ marginBottom: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {chunk1.split('').map((char, i) => (
                <Block
                  key={i}
                  letter={char}
                  highlight={false}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {chunk2.split('').map((char, i) => (
                <Block
                  key={i}
                  letter={char}
                  highlight={char !== chunk1[i]}
                />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
