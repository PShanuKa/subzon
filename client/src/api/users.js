import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (data)=>({
                url:`${USERS_URL}/login`,
                method: "POST",
                body: data,
            })
        }),
        google: builder.mutation({
            query: (data)=>({
                url:`/auth/google`,
                body: data,
            })
        }),

        register: (builder.mutation)({
            query: (data)=>({
                url:`${USERS_URL}/register`,
                method: "POST",
                body: data,
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useGoogleMutation } = userApiSlice