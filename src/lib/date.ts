/**
 * 指定された startYear から現在までの経過年数と、1年を100%とした場合の割合を計算するユーティリティ関数
 * 
 * @param startDate - スキル習得開始日 (例: "2019-04-01")
 * @param currentYear - 現在の年 (例: 2025)。デフォルトでは new Date().getFullYear()
 * @returns { years: number, percentage: number }
 */
export const calculateExperience = (
    startDate: string,
    // currentYear: number = new Date().getFullYear()
  ): { years: number; percentage: number } => {
    const start = new Date(startDate);
    const now = new Date();
  
    // 経過年数（小数点付き、例: 2.5年）
    const diffInMilliseconds = now.getTime() - start.getTime();
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = diffInMilliseconds / millisecondsPerYear;
  
    const clampedYears = Math.max(0, years); // 過去日でないか確認
    const percentage = Math.min((clampedYears / 1) * 100, 100); // 1年を100%として扱う
  
    return {
      years: parseFloat(clampedYears.toFixed(1)),
      percentage: parseFloat(percentage.toFixed(0)),
    };
  };
  