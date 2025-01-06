export function dateToYYYYMMDD(date: Date): string {
  let formattedDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return formattedDate;
}

export function calculateOpacity(
  dataPt: number,
  mean: number,
  stdDev: number
): number {
  if (dataPt === 0 || stdDev === 0) {
    return 0;
  }

  const zScoreHash = {
    lowQuartile: -1.282, // 10th percentile
    midQuartile: -0.385, // 35th percentile
    highQuartile: 0.253, // 60th percentile
  };

  // Calculate z-score
  const zScore = (dataPt - mean) / stdDev;

  // Determine opacity based on z-score
  if (zScore < zScoreHash["lowQuartile"]) {
    return 0.2;
  } else if (zScore < zScoreHash["midQuartile"]) {
    return 0.5;
  } else if (zScore < zScoreHash["highQuartile"]) {
    return 0.8;
  } else {
    return 1;
  }
}
