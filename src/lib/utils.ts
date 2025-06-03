// src/lib/utils.ts

/**
 * classNames ユーティリティ関数
 * 可変長の引数を受け取り、真偽値によってクラス名を連結する
 * 
 * @param classes - 文字列または falsy な値の配列
 * @returns 結合されたクラス名の文字列
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  