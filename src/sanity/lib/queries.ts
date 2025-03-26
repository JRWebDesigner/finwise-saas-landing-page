import { defineQuery } from "next-sanity";

export const allProductsQuery = defineQuery(`*[_type == "producto" | order(_createdAt desc)]{
  _id,_createdAt, Nombre, mainImage, categoria, descripcion
}`)
export const allCategoriesQuery = defineQuery(`*[_type == "category" | order(_createdAt desc)]{
  _id,_createdAt, Nombre, Enlace
}`)