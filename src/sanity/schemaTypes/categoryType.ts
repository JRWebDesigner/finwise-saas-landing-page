import {TagIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
    name: 'nombre',
    type: 'string',
    },
    {
        name: 'enlace',
        type: 'slug',
        title: 'Enlace',
        options: {
          source: 'nombre', // Genera el slug a partir del campo `name`
          maxLength: 200, // Longitud máxima del slug
        },
        validation: (Rule) => Rule.required(), // Asegura que el slug sea obligatorio
    },
],
preview: {
    select: {
    title: 'enlace.current',
    },
},
})
