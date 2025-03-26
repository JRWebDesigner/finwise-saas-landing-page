import {groq} from 'next-sanity'

export const allProductsQuery = groq`*[_type == "producto" | order(_createdAt desc)]{
  _id,_createdAt, nombre, "mainImage":image.asset->url, categoria, descripcion
}`
export const allCategoriesQuery = groq`*[_type == "category" | order(_createdAt desc)]{
  _id,_createdAt, nombre, "enlace": slug.current
}`