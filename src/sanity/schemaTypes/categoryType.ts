import {TagIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
    name: 'Nombre',
    type: 'string',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'Nombre', // Genera el slug a partir del campo `name`
          maxLength: 200, // Longitud máxima del slug
        },
        validation: (Rule) => Rule.required(), // Asegura que el slug sea obligatorio
    },
],
preview: {
    select: {
    title: 'name',
    },
},
})
