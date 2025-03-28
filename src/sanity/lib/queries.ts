import {groq} from 'next-sanity'
import { client } from './client';

export const allProductsQuery = groq`*[_type == "producto"] | order(_createdAt desc) {
  _id, _createdAt, nombre, "mainImage": mainImage.asset->url, categoria, descripcion
}`
export const allCategoriesQuery = groq`*[_type == "category"]| order(_createdAt desc){
  _id,_createdAt, nombre, "enlace": enlace.current
}`
export async function getProductCategory(categorySlug: string) {
  return client.fetch(
    groq`*[_type == "producto" && categoria == $categorySlug] | order(_createdAt desc) {
       _id, _createdAt, nombre, "mainImage": mainImage.asset->url, categoria, descripcion
    }`,
    { categorySlug }
  );
}