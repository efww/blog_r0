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
import html from 'remark-html'
import rehypeRaw from 'rehype-raw'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ContentMeta {
  slug: string
  title: string
  date: string
  tags?: string[]
  description?: string
  content: string
  [key: string]: any
}

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

export async function getAllContent(): Promise<ContentMeta[]> {
  const fileNames = fs.readdirSync(contentDirectory)
  
  const allContent = await Promise.all(
    fileNames
      .filter(fileName => {
        return fileName.endsWith('.md')
      })
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        
        const content = await getContentBySlug(slug)
        
        if (!content.date) {
          content.date = new Date().toISOString().slice(0, 10)
        }
        
        return content
      })
  )
  
  return allContent.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllContentSlugs() {
  const fileNames = fs.readdirSync(contentDirectory)
  
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getContentBySlug(slug: string): Promise<ContentMeta> {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return {
      slug,
      title: 'Content not found',
      date: new Date().toISOString().slice(0, 10),
      content: '<p>The requested content was not found.</p>',
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  
  if (!data.title) {
    data.title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
  }
  
  if (!data.date) {
    data.date = new Date().toISOString().slice(0, 10)
  }
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)
    
  const contentHtml = processedContent.toString()
  
  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    ...data,
  }
}
