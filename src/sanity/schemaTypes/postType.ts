import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'nombre',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categoria',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'descripcion',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'mainImage',
    }
  },
})
