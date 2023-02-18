const getActionVariables = (str: string): string[] => {
  return str.split("&")[1].split(",");
};

const generateButtonsRow = (
  list: string[],
  callbackState: string,
  row: number = 2
): { text: string; callback_data: string }[][] => {
  const buttonsArr: { text: string; callback_data: string }[][] = [];
  let i, k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % row === 0) {
      k++;
      buttonsArr[k] = [];
    }

    buttonsArr[k].push({
      text: list[i],
      callback_data: callbackState + "," + list[i],
    });
  }

  return buttonsArr;
};

export { getActionVariables, generateButtonsRow };
