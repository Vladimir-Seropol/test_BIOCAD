import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import Result from './Result';
import { validate } from '../utils/validate';

type FormData = {
  seq1: string;
  seq2: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>();

  const [result, setResult] = useState<FormData | null>(null);
  const [lengthError, setLengthError] = useState(false);

  // Приведение к верхнему регистру
  const handleUppercase = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setValue(field, value, { shouldValidate: true });
  };

  const onSubmit = (data: FormData) => {
    if (data.seq1.length !== data.seq2.length) {
      setLengthError(true);
      setResult(null);
      return;
    }

    setLengthError(false);
    setResult(data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label="Последовательность 1"
        {...register('seq1', {
          required: true,
          validate,
        })}
        value={watch('seq1') || ''}
        onChange={handleUppercase('seq1')}
        error={!!errors.seq1}
        helperText={errors.seq1 && 'Допустимы только латинские символы из набора аминокислот'}
        fullWidth
        autoComplete="off"
      />
      <TextField
        label="Последовательность 2"
        {...register('seq2', {
          required: true,
          validate,
        })}
        value={watch('seq2') || ''}
        onChange={handleUppercase('seq2')}
        error={!!errors.seq2}
        helperText={errors.seq2 && 'Допустимы только латинские символы из набора аминокислот'}
        fullWidth
        autoComplete="off"
      />

      {lengthError && (
        <Alert severity="error">Последовательности должны быть одинаковой длины</Alert>
      )}

      <Button type="submit" variant="contained">
        Визуализировать
      </Button>

      {result && <Result seq1={result.seq1} seq2={result.seq2} />}
    </Box>
  );
}
