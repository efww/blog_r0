import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'

const contentDirectory = path.join(process.cwd(), 'content')

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(contentDirectory, `${realSlug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: realSlug,
      frontmatter: data,
      content,
    }
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error)
    return null
  }
}

export async function getAllPosts() {
  try {
    const files = fs.readdirSync(contentDirectory)
    const posts = files
      .filter((file) => /\.md$/.test(file))
      .map((file) => {
        const post = getPostBySlug(file)
        return {
          slug: post?.slug,
          frontmatter: post?.frontmatter,
        }
      })
      .filter(Boolean)
      .sort((post1, post2) => {
        const date1 = new Date(post1?.frontmatter?.date || 0)
        const date2 = new Date(post2?.frontmatter?.date || 0)
        return date2.getTime() - date1.getTime()
      })
    
    return posts
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function markdownToHtml(markdown: string) {
  try {
    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(markdown)
    
    return result.toString()
  } catch (error) {
    console.error('Error converting markdown to HTML:', error)
    return ''
  }
}
