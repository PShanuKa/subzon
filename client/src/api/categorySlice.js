import { CATEGORY_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => `${CATEGORY_URL}/all`,
      method: "GET",
    }),
    
  }),
});

export const {
  useGetAllCategoryQuery,

} = categoryApiSlice;
