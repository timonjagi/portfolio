import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function load(req) {

  const slug = req.params.slug;
  try {
    const query = gql`
      query Page($slug: String!) {
        page(where: { slug: $slug}){
          title
          slug
          content {
            html
          }
        }
      }
    `
    const variables = { slug };
    return await client.request(query, variables);

  } catch (err) {
    return {
      status: 500,
      body: { error: 'There was a server error' }
    }
  }
}