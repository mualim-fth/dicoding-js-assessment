import { test } from 'node:test';
import assert from 'node:assert';

import sum from './index.js';

test('fungsi sum harus menjumlahkan dua angka positif dengan benar', () => {
  assert.strictEqual(sum(5, 3), 8);
  assert.strictEqual(sum(0, 0), 0);
});

test('fungsi sum harus mengembalikan 0 jika parameter bukan number', () => {
  assert.strictEqual(sum('5', 3), 0);
  assert.strictEqual(sum(5, '3'), 0);
  assert.strictEqual(sum('5', '3'), 0);
  assert.strictEqual(sum(), 0);
});

test('fungsi sum harus mengembalikan 0 jika parameter bernilai negatif', () => {
  assert.strictEqual(sum(-5, 3), 0);
  assert.strictEqual(sum(5. -3), 0);
  assert.strictEqual(sum(-5, -3), 0);
});