export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Name",
      type: "string",
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};