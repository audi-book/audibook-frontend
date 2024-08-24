import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({
        url: `api/v1/auth/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "api/v1/auth",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: "api/v1/auth/update",
        method: "PUT",
        body: userData,
        credentials: "include" as const,
      }),
    }),
    resetPassword: builder.mutation({
      query: (passwordData) => ({
        url: "api/v1/auth/reset-password",
        method: "PUT",
        body: passwordData,
        credentials: "include" as const,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `api/v1/auth/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useResetPasswordMutation,
  useDeleteUserMutation,
} = userApi;
