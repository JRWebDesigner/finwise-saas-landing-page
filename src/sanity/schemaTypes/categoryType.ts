import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'Enlace',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
