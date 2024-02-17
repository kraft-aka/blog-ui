export default function Range(start, end) {
  return [...Array(end).keys()].map((el) => el + 1);
}
