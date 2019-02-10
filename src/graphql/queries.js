// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    slug
    title
    content
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      slug
      title
      content
    }
    nextToken
  }
}
`;
export const searchPosts = `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: SearchablePostSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      slug
      title
      content
    }
    nextToken
  }
}
`;
