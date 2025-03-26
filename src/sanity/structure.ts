import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Administrador innovations biosupply')
    .items([
      S.documentTypeListItem('producto').title('Productos'),
      S.documentTypeListItem('category').title('Categorias'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['producto', 'category'].includes(item.getId()!),
      ),
    ])
