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

interface ResData {
  result: boolean;
  data?: Record<string, ResDataItem>;
}

const reqApiData = (formData: string) => {
  return axios.get<ResData>("https://www.dtek-oem.com.ua/ua/ajax", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: formData,
  });
};

const getShutdownsListInfo = ({
  street,
  city = "Одеса",
}: {
  street: string;
  city?: string;
}) => {
  const formData = qs.stringify({
    method: "getHomeNum",
    "data[0][name]": "city",
    "data[0][value]": city,
    "data[1][name]": "street",
    "data[1][value]": street,
  });

  return handler<ResData["data"]>(
    reqApiData(formData).then((response) => {
      const { data } = response;
      if (!data || !data.result || !data.data)
        throw new Error("Could not get response");
      return data.data;
    })
  );
};

const getShutdownsHouseInfo = ({
  street,
  house,
  city = "Одеса",
}: {
  street: string;
  house: string;
  city?: string;
}) => {
  const formData = qs.stringify({
    method: "getHomeNum",
    "data[0][name]": "city",
    "data[0][value]": city,
    "data[1][name]": "street",
    "data[1][value]": street,
  });

  return handler<ResDataItem>(
    reqApiData(formData).then((response) => {
      const { data } = response;
      if (!data || !data.result || !data.data)
        throw new Error("Could not get response");

      const resDataHouse: ResDataItem | null = data.data[house];

      if (!resDataHouse) throw new Error("Could not get house data");

      return resDataHouse;
    })
  );
};

export { getShutdownsListInfo, getShutdownsHouseInfo };
