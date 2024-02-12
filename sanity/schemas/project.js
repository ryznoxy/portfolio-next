export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'link_demo',
      title: 'Demo Link',
      type: 'url',
    },
    {
      name: 'link_github',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'tech_stack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'is_show',
      title: 'Show',
      type: 'boolean',
      intialValue: true,
    },
    {
      name: 'is_featured',
      title: 'Featured',
      type: 'boolean',
      intialValue: false,
    },
    // {
    //   name: 'params',
    //   title: 'Params',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'slug',
    //       title: 'Slug',
    //       type: 'slug',
    //     },
    //   ],
    // },
    // {
    //   name: 'tooltip',
    //   title: 'Tooltip',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string',
    //     },
    //   ],
    // },
  ],
}
