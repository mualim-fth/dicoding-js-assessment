import { test } from 'node:test';
import assert from 'node:assert';

import { sum } from './index.js';

test('fungsi sum harus menambahkan dua angka dengan benar' , () => {
  const angkaA = 5;
  const angkaB = 3;

  const hasilAktual = sum(angkaA, angkaB);
  const hasilEkspektasi = 8;

  assert.strictEqual(hasilAktual, hasilEkspektasi);
})