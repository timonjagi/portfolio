import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function load() {
  try {
    const query = gql`
      query Posts {
        posts {
          title
          slug
          date
          tags
          coverImage {
            url
          }

        }
      }
    `
    return await client.request(query);

  } catch (err) {
    return {
      status: 500,
      body: { error: 'There was a server error' }
    }
  }
}