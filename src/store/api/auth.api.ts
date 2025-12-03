import { baseApi } from ".";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<{ id: string; name: string }, void>({
      query: () => "auth/user",
      providesTags: ["User"],
    }),

    login:builder.mutation({
        query: () => "/user/login",
        
    })
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = authApi;
