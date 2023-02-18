import streets from "@data/streets";

const startWithNum = (el: string): boolean => {
  const firstPart = el.split(" ")[0];

  const checkIsNum = firstPart.replace(/[^0-9]/g, "");

  return !!checkIsNum;
};

const uaSort = (s1: string, s2: string): number => {
  return s1.localeCompare(s2);
};

const getStreetsStartWithNum = (): Record<string, string[]> => {
  const streetsWithNum = streets
    .filter((el) => {
      if (startWithNum(el)) return el;
    })
    .sort(uaSort);

  const streetsObj: Record<string, string[]> = {};

  for (let el of streetsWithNum) {
    const firstPart = el.split(" ")[0];

    streetsObj[firstPart]?.length
      ? streetsObj[firstPart].push(el)
      : (streetsObj[firstPart] = [el]);
  }

  return streetsObj;
};

const getStreetsStartWithStr = (): Record<string, string[]> => {
  const streetsWithStr = streets
    .filter((el) => {
      if (!startWithNum(el)) return el;
    })
    .sort(uaSort);

  const streetsObj: Record<string, string[]> = {};

  for (let el of streetsWithStr) {
    const firstPart = el[0];

    streetsObj[firstPart]?.length
      ? streetsObj[firstPart].push(el)
      : (streetsObj[firstPart] = [el]);
  }

  return streetsObj;
};

export { getStreetsStartWithNum, getStreetsStartWithStr };
