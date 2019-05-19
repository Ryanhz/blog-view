export function zy_log(text:any){

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