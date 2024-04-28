export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  date.setHours(date.getHours() - 9);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

export const formatDueDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (`0` + (d.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더해줌
  const day = (`0` + d.getDate()).slice(-2);
  const hours = (`0` + d.getHours()).slice(-2);
  const minutes = (`0` + d.getMinutes()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
