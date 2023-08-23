import * as BaseApi from "./baseApi.js";

const baseUrl = "https://disease.sh/v3/covid-19";

export const getAll = async () => {
  const res = await BaseApi.getRequest(`${baseUrl}/all`, {});
  return res;
};
export const getcountries = async () => {
  const res = await BaseApi.getRequest(`${baseUrl}/countries`, {});
  return res;
};
export const getgraphdata = async () => {
    const res = await BaseApi.getRequest(`${baseUrl}/all?lastdays=all`, {});
    return res;
}
