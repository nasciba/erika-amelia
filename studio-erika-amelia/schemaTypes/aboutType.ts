import {defineField, defineType} from 'sanity'

export const bioType = defineType({
  name: 'bio',
  title: 'Sobre',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Sobre Erika Amelia',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
    // defineField({
    //   name: 'title',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'slug',
    //   type: 'slug',
    //   options: {source: 'title'},
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   type: 'datetime',
    //   initialValue: () => new Date().toISOString(),
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'image',
    //   type: 'image',
    // }),
    // defineField({
    //   name: 'body',
    //   type: 'array',
    //   of: [{type: 'block'}],
    // }),
  ],
})
