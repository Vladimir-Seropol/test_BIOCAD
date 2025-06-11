const VALID = /^[ARNDCEQGHILKMFPSTWYV-]+$/i;

export function validate(seq: string): boolean {
  return VALID.test(seq);
}
