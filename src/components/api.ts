import axios from "axios";
import { AppProps } from "../../src/App";

interface ApiProps {
  query: string;
  client_id: string;
  page: number;
  per_page: number;
}

interface searchImages {
  respons: AppProps[];
  totalPages: number;
}
const searchImages = async (
  query: string,
  page: number
): Promise<searchImages> => {
  const client_id = "TArFxx_mLGUvT8o_R5TxUwRqiGV2Ie5D78Oz1_4z2mc";
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const url = `${BASE_URL}`;
  const params: ApiProps = {
    query,
    client_id,
    page,
    per_page: 12,
  };
  const respons = await axios.get(url, { params });

  return {
    respons: respons.data.results,
    totalPages: respons.data.total_pages,
  };
};

export default searchImages;
