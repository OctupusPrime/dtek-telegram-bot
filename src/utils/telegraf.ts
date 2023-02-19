const getActionVariables = (str: string): string[] => {
  return str.split("&")[1].split(",");
};

const generateButtonsRow = (
  list:
    | {
        label: string;
        value: string;
      }[]
    | string[],
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

    const item = list[i];

    if (typeof item === "string") {
      buttonsArr[k].push({
        text: item,
        callback_data: callbackState + "," + item,
      });
    } else {
      buttonsArr[k].push({
        text: item.label,
        callback_data: callbackState + "," + item.value,
      });
    }
  }

  return buttonsArr;
};

const generateRepeatButton = (callbackState: string) => {
  return [
    {
      text: "Повторити",
      callback_data: callbackState,
    },
  ];
};

export { getActionVariables, generateButtonsRow, generateRepeatButton };
