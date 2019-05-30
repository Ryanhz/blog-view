import * as Dayjs from "dayjs"
export function zy_log(text: any) {

  //  console.log(text, getCircularReplacer())
  console.log(text)
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export function dateStr(dateStr: string) {
  let day = Dayjs(dateStr)
  let str = day.format('YYYY-MM-DD')

  zy_log(str)
  return str
}