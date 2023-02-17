import { handler } from "@utils/promise";
import axios from "axios";
import qs from "qs";

type ResDataItem = {
  sub_type: string;
  start_date: string;
  end_date: string;
  type: string;
  sub_type_reason: string[];
  voluntarily: boolean | null;
};

interface ReqData {
  city: string;
  street: string;
  house: string;
}

interface ResData {
  result: boolean;
  data?: Record<string, ResDataItem>;
}

const getData = async ({
  city,
  street,
  house,
}: ReqData): Promise<[ResDataItem | null, any]> => {
  const reqData = qs.stringify({
    method: "getHomeNum",
    "data[0][name]": "city",
    "data[0][value]": city,
    "data[1][name]": "street",
    "data[1][value]": street,
  });

  const [res, err] = await handler<ResDataItem>(
    axios
      .get("https://www.dtek-oem.com.ua/ua/ajax", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: reqData,
      })
      .then((response) => {
        const { data } = response;
        if (!data || !data.result || !data.data)
          throw new Error("Could not get response");

        const resDataHouse: ResDataItem | null = data.data[house];

        if (!resDataHouse) throw new Error("Could not get house data");

        return resDataHouse;
      })
  );

  return [res, err];
};

export { getData };
