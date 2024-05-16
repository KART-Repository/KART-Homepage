import { createClient } from 'contentful'

export const buildClient = () => {
  const client = createClient({
    space: process.env.CTF_SPACE_ID ?? '',
    accessToken: process.env.CTF_ACCESS_TOKEN ?? '',
  })

  return client
}
