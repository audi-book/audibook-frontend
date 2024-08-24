import { apiSlice } from "../apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (eventData) => ({
        url: "api/v1/events",
        method: "POST",
        body: eventData,
        credentials: "include" as const,
      }),
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `api/v1/events/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    getEventById: builder.query({
      query: (id) => ({
        url: `api/v1/events/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getAllEvents: builder.query({
      query: () => ({
        url: "api/v1/events",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    updateEvent: builder.mutation({
      query: (eventData) => ({
        url: `api/v1/events/${eventData.id}`,
        method: "PUT",
        body: eventData,
        credentials: "include" as const,
      }),
    }),
    updateEventStatus: builder.mutation({
      query: (statusData) => ({
        url: "api/v1/events/status",
        method: "PUT",
        body: statusData,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateEventMutation,
  useDeleteEventMutation,
  useGetEventByIdQuery,
  useGetAllEventsQuery,
  useUpdateEventMutation,
  useUpdateEventStatusMutation,
} = eventApi;
