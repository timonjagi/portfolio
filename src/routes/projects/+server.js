import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'
import { json, error } from '@sveltejs/kit';

export const GET = async () => {
  try {
    const query = gql`
      query Projects {
        projects {
          createdAt
          demo
          description
          id
          name
          image {
            url
          }
          publishedAt
          slug
          sourceCode
          tags
          updatedAt
        }
      }
    `

    const res = await client.request(query);
    return json(res)

  } catch (err) {
    throw error(500, err)
  }
}