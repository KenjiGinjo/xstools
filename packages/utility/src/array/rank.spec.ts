import { describe, expect, test } from 'bun:test';
import { rankByPath } from './rank';

describe('rankByPath', () => {
  test('normal usage', () => {
    const data = [
      { exam: { score: 70 } },
      { exam: { score: 70 } },
      { exam: { score: 100 } },
      { exam: { score: 80 } },
      { exam: { score: 90 } },
      { exam: { score: 100 } },
    ];

    expect(rankByPath(data, 'exam.score')).toEqual([
      { _rank: 1, exam: { score: 100 } },
      { _rank: 1, exam: { score: 100 } },
      { _rank: 3, exam: { score: 90 } },
      { _rank: 4, exam: { score: 80 } },
      { _rank: 5, exam: { score: 70 } },
      { _rank: 5, exam: { score: 70 } },
    ]);
  });

  test('empty array', () => {
    expect(rankByPath([] as { category: string; name: string }[], 'category')).toEqual([]);
  });

  test('array with one element', () => {
    expect(rankByPath([{ score: 59 }], 'score')).toEqual([{ _rank: 1, score: 59 }]);
  });
});
