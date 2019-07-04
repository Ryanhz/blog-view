import * as Dayjs from "dayjs"

import eventproxy from "./eventProxy";

export let eventProxy = eventproxy;

export function zy_log(text: any) {

  if (typeof text == 'object') {
    console.log(text);
  } else {
    console.log(text)
  }

  // console.log(text, getCircularReplacer())
  // 
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

export function print(obj: object) {
  try {
    var seen: any[] = [];
    let json = JSON.stringify(obj, function (key, val) {
      if (typeof val == "object") {
        if (seen.indexOf(val) >= 0) return;
        seen.push(val)
      }
      return val;
    });
    return json;
  } catch (e) {
    return e;
  }
}