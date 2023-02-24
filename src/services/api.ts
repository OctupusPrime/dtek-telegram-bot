import { hadleRetry } from "@utils/promise";
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
      Cookie:
        "visid_incap_2398477=8ugMUNCoSvCeE84E/tSGxwjB7mMAAAAAQUIPAAAAAAALoRUgPh0z39DP6g8A16IS; _language=4feef5ffdc846bbf9c35c97292b7b3e6c48117a536a6462b530e0984a39d6bd4a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_language%22%3Bi%3A1%3Bs%3A2%3A%22uk%22%3B%7D",
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

  return hadleRetry<ResData["data"]>(
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

  return hadleRetry<ResDataItem>(
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
