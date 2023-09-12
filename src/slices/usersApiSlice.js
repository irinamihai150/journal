import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: "/auth",
				method: "POST",
				body: data,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/logout",
				method: "POST",
			}),
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
	usersApi
