import { LANGUAGE_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const languageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllLanguage: builder.query({
      query: () => `${LANGUAGE_URL}/all`,
      method: "GET",
    }),
  }),
});

export const {
  useGetAllLanguageQuery,
} = languageApiSlice;
