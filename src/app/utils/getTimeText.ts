export const getTimeText = (timeStamp: string | Date) => {
  const now = new Date();
  const date = new Date(timeStamp);

  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;

  if (diffInMinutes < 1) {
    // 1分以内
    return "さっき";
  }

  if (diffInHours < 1) {
    // その他1時間以内
    return `${Math.floor(diffInMinutes)}分前`;
  }

  if (diffInHours < 24 && date.getDate() === now.getDate()) {
    // 本日中で、現在日時からの差分
    return `${Math.floor(diffInHours)}時間前`;
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    // 現在日時から昨日に当たる場合
    return "昨日";
  }

  const isThisYear = date.getFullYear() === now.getFullYear();
  if (isThisYear) {
    // 2日前～今年以内
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }

  // 上記に該当しない場合
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
