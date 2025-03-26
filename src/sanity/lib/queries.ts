import {groq} from 'next-sanity'
import {client} from './client'

export async function getCategories() {
  return client.fetch(allCategoriesQuery)
}

export const allProductsQuery = groq`*[_type == "producto" | order(_createdAt desc)]{
  _id,_createdAt, nombre, "mainImage":image.asset->url, categoria, descripcion
}`
export const allCategoriesQuery = groq`*[_type == "category" | order(_createdAt desc)]{
  _id,_createdAt, nombre, "enlace": slug.current
}`