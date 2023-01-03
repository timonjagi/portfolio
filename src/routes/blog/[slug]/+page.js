import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function load(req) {

  const slug = req.params.slug;

  try {
    const query = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug}){
          title
          date
          tags
          authors {
            name
            picture {
              url
            }
          }
          content 
          coverImage {
            url
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