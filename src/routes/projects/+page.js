import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function load({ fetch }) {
  try {
    const data = await (fetch('projects'))
    const projects = await data.json()

    return projects;

  } catch (err) {
    return {
      status: 500,
      body: { error: 'There was a server error' }
    }
  }
}