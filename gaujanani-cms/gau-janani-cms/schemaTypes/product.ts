export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },

    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};