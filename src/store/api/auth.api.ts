import { baseApi } from ".";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  confirmed_password: string; // ✅ REQUIRED
};

export type RegisterResponse = {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  token?: string;
};


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<{ id: string; name: string }, void>({
      query: () => "auth/user",
      providesTags: ["User"],
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: "customer/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
} = authApi;
