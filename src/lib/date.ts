/**
 * 指定された startYear から現在までの経過年数と、1年を100%とした場合の割合を計算するユーティリティ関数
 * 
 * @param startDate - スキル習得開始日 (例: "2019-04-01")
 * @returns { years: string, percentage: number }
 */
export const calculateExperience = (
    startDate: string,
  ): { years: string; percentage: number } => {
    const start = new Date(startDate);
    const now = new Date();
  
    // 経過年数（小数点付き、例: 2.5年）
    const diffInMilliseconds = now.getTime() - start.getTime();
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const rawYears = diffInMilliseconds / millisecondsPerYear;  
    const clampedYears = Math.max(0, rawYears); // 過去日でないか確認

    const fullYears = Math.floor(clampedYears);
    const yearString = fullYears >= 10 ? "10 年以上" : `${fullYears} 年`;
    const percentage = Math.min((clampedYears / 10) * 100, 100);
  
    return {
      years:yearString,
      percentage: parseFloat(percentage.toFixed(0)),
    };
  };
  