import React from 'react';

export function tocToList(tocText: string): JSX.Element[] {
  return tocText
    .split('\n')
    .filter((line) => line.trim().startsWith('- ['))
    .map((line, index) => {
      const match = line.match(/\((#[^)]+)\)/);
      const anchor = match ? match[1].replace(/^#/, '') : '';

      // インデントレベル判定（スペース数で判断）
      const spaceCount = line.search(/\S/); // 最初の非スペース文字の位置
      let indentClass = '';
      if (spaceCount >= 8) {
        indentClass = 'ml-8';
      } else if (spaceCount >= 4) {
        indentClass = 'ml-4';
      }

      return (
        <div
          key={index}
          className={`text-sm leading-relaxed ${indentClass}`}
        >
          {anchor}
        </div>
      );
    });
}
