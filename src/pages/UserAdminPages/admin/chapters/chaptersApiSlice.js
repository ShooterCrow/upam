import { apiSlice } from "../../../../app/api/apiSlice";

export const chaptersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChapters: builder.query({
      query: () => "/chapters",
      providesTags: ["Chapters"],
    }),
    getChapterById: builder.query({
      query: (id) => `/chapters/${id}`,
      providesTags: (result, error, id) => [{ type: "Chapters", id }],
    }),
    addNewChapter: builder.mutation({
      query: (chapterData) => ({
        url: "/chapters",
        method: "POST",
        body: chapterData,
      }),
      invalidatesTags: ["Chapters"],
    }),
    updateChapter: builder.mutation({
      query: ({ id, ...chapterData }) => ({
        url: `/chapters/${id}`,
        method: "PUT",
        body: chapterData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Chapters", id },
        "Chapters",
      ],
    }),
    deleteChapter: builder.mutation({
      query: (id) => ({
        url: `/chapters/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chapters"],
    }),
  }),
});

export const {
  useGetChaptersQuery,
  useGetChapterByIdQuery,
  useAddNewChapterMutation,
  useUpdateChapterMutation,
  useDeleteChapterMutation,
} = chaptersApiSlice;
