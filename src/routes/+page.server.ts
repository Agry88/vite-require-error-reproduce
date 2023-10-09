import type { PageServerLoad } from "./$types"
import { compile } from "mdsvex"

export const load: PageServerLoad = async () => {
  const mdx = `
  # Hello World
  
  This is a test
  `

  return {
    html: await compile(mdx),
  }

}