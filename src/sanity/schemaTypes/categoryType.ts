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
            title: 'Enlace',
            options: {
              source: 'name', // Genera el slug a partir del campo `name`
              maxLength: 200, // Longitud máxima del slug
            },
            validation: (Rule) => Rule.required(), 
    }),
  ],
})
