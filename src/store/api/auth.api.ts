// import { baseApi } from ".";

// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
// }

// export type RegisterRequest = {
//   name: string;
//   email: string;
//   password: string;
//   confirmed_password: string; // ✅ REQUIRED
// };

// export type RegisterResponse = {
//   message: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
//   token?: string;
// };


// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getUser: builder.query<{ id: string; name: string }, void>({
//       query: () => "auth/user",
//       providesTags: ["User"],
//     }),

//     login: builder.mutation<LoginResponse, LoginRequest>({
//       query: (credentials) => ({
//         url: "user/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),

//     register: builder.mutation<RegisterResponse, RegisterRequest>({
//       query: (data) => ({
//         url: "customer/register",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useGetUserQuery,
//   useLazyGetUserQuery,
// } = authApi;



// import { baseApi } from ".";

// /* ============================
// ✅ BASE TYPES
// ============================ */

// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
// }

// export type RegisterRequest = {
//   name: string;
//   email: string;
//   password: string;
//   confirmed_password: string;
// };

// export type RegisterResponse = {
//   message: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
//   token?: string;
// };

// /* ============================
// ✅ PASSWORD RESET TYPES (FIXED)
// ============================ */

// export type ForgetPasswordRequest = {
//   email: string;
// };

// export type VerifyOtpRequest = {
//   email: string;
//   otp: string;
// };

// export type ResetPasswordRequest = {
//   email: string;
//   password: string;
//   confirmed_password: string;
// };

// /* ============================
// ✅ AUTH API (REAL BACKEND)
// ============================ */

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({

//     /* ✅ GET LOGGED USER */
//     getUser: builder.query<{ id: string; name: string; email: string }, void>({
//       query: () => ({
//         url: "auth/user",
//         method: "GET",
//       }),
//       providesTags: ["User"],
//     }),

//     /* ✅ LOGIN */
//     login: builder.mutation<LoginResponse, LoginRequest>({
//       query: (credentials) => ({
//         url: "user/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),

//     /* ✅ REGISTER */
//     register: builder.mutation<RegisterResponse, RegisterRequest>({
//       query: (data) => ({
//         url: "customer/register",
//         method: "POST",
//         body: data,
//       }),
//     }),

//     /* ✅ FORGET PASSWORD */
//     forgetPassword: builder.mutation<
//       {
//         success: boolean;
//         message: string;
//         data: { otp: string };
//         code: number;
//       },
//       ForgetPasswordRequest
//     >({
//       query: (body) => ({
//         url: "forget-password",
//         method: "POST",
//         body,
//       }),
//     }),

//     /* ✅ VERIFY OTP */
//     verifyOtpPassword: builder.mutation<
//       {
//         success: boolean;
//         message: string;
//         data: [];
//         code: number;
//       },
//       VerifyOtpRequest
//     >({
//       query: (body) => ({
//         url: "verify-otp-password",
//         method: "POST",
//         body,
//       }),
//     }),

//     /* ✅ RESET PASSWORD */
//     resetPassword: builder.mutation<
//       {
//         success: boolean;
//         message: string;
//         data: [];
//         code: number;
//       },
//       ResetPasswordRequest
//     >({
//       query: (body) => ({
//         url: "reset-password",
//         method: "POST",
//         body,
//       }),
//     }),

//   }),
// });

// /* ============================
// ✅ EXPORT HOOKS
// ============================ */

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useForgetPasswordMutation,
//   useVerifyOtpPasswordMutation,
//   useResetPasswordMutation,
//   useGetUserQuery,
//   useLazyGetUserQuery,
// } = authApi;



import { baseApi } from ".";

/* ============================
✅ BASE TYPES
============================ */

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
  confirmed_password: string;
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

/* ============================
✅ PASSWORD RESET TYPES
============================ */

export type ForgetPasswordRequest = {
  email: string;
};

export type VerifyOtpRequest = {
  email: string;
  otp: string;
};

export type ResetPasswordRequest = {
  email: string;
  password: string;
  confirmed_password: string;
};

/* ============================
✅ AMENITY TYPES
============================ */

export type Amenity = {
  id: number;
  name: string;
  image: string;
};

export type AmenityResponse = {
  data: Amenity[];
};

/* ============================
✅ TEAM TYPES
============================ */

export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  bio: string;
  is_active: number;
  image: string;
};

export type TeamResponse = {
  success: boolean;
  data: TeamMember[];
};

/* ============================
✅ PROPERTY TYPES
============================ */

export type PropertyAmenity = {
  id: number;
  name: string;
};

export type Property = {
  id: number;
  title: string;
  location: string;
  rating: number | null;
  total_reviews: number;
  price: number;
  cleaning_fee: number;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  description: string;
  main_image: string[];
  multiple_image: string[];
  amenities: PropertyAmenity[];
};

export type PropertyResponse = {
  success: boolean;
  data: Property[];
  message: string;
};


/* ============================
✅ AUTH + AMENITY API (REAL BACKEND)
============================ */

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    /* ✅ GET LOGGED USER */
    getUser: builder.query<{ id: string; name: string; email: string }, void>({
      query: () => ({
        url: "auth/user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    /* ✅ LOGIN */
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),

    /* ✅ REGISTER */
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: "customer/register",
        method: "POST",
        body: data,
      }),
    }),

    /* ✅ FORGET PASSWORD */
    forgetPassword: builder.mutation<
      {
        success: boolean;
        message: string;
        data: { otp: string };
        code: number;
      },
      ForgetPasswordRequest
    >({
      query: (body) => ({
        url: "forget-password",
        method: "POST",
        body,
      }),
    }),

    /* ✅ VERIFY OTP */
    verifyOtpPassword: builder.mutation<
      {
        success: boolean;
        message: string;
        data: [];
        code: number;
      },
      VerifyOtpRequest
    >({
      query: (body) => ({
        url: "verify-otp-password",
        method: "POST",
        body,
      }),
    }),

    /* ✅ RESET PASSWORD */
    resetPassword: builder.mutation<
      {
        success: boolean;
        message: string;
        data: [];
        code: number;
      },
      ResetPasswordRequest
    >({
      query: (body) => ({
        url: "reset-password",
        method: "POST",
        body,
      }),
    }),

    /* ✅ GET AMENITIES ✅ (FIXED LOCATION) */
    getAmenities: builder.query<AmenityResponse, void>({
      query: () => ({
        url: "amenity/index",
        method: "GET",
      }),
    }),

    /* ✅ GET ALL TEAM MEMBERS */
    getAllTeams: builder.query<TeamResponse, void>({
      query: () => ({
        url: "team/all",
        method: "GET",
      }),
    }),

    /* ============================
    ✅ PROPERTY API
    ============================ */

    getAllProperties: builder.query<PropertyResponse, void>({
      query: () => ({
        url: "property/index",
        method: "GET",
      }),
    }),

    // ✅ GET SINGLE PROPERTY
getSingleProperty: builder.query<any, number | string>({
  query: (id) => `property/getone/${id}`,
}),



  }),
});

/* ============================
✅ EXPORT HOOKS
============================ */

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgetPasswordMutation,
  useVerifyOtpPasswordMutation,
  useResetPasswordMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetAmenitiesQuery,
  useGetAllTeamsQuery,
  useGetAllPropertiesQuery,
  useGetSinglePropertyQuery,
} = authApi;
