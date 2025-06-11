import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export default function CopyHandler() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseUp = async () => {
      const selection = window.getSelection();
      const rawText = selection?.toString();

      if (
        rawText &&
        rawText.length > 1 &&
        selection?.anchorNode?.parentElement?.closest('[data-copy-zone]')
      ) {
      
        const cleaned = rawText.replace(/[^A-Za-z-]/g, '');

        if (!cleaned) return;

        try {
          await navigator.clipboard.writeText(cleaned);
          setOpen(true);
        } catch (err) {
          console.error('Ошибка при копировании:', err);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Скопировано!
      </Alert>
    </Snackbar>
  );
}
