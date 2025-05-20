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
  try {
    // 파일 시스템에서 모든 콘텐츠 파일 이름 가져오기
    const fileNames = fs.readdirSync(contentDirectory)
    
    // .md 확장자를 제거하고 슬러그 형태로 반환
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        return {
          params: {
            slug: fileName.replace(/\.md$/, ''),
          },
        }
      })
  } catch (error) {
    // 파일 시스템 접근 오류 발생 시 빈 배열 반환
    // 서버 사이드 렌더링 모드에서는 동적으로 콘텐츠를 로드함
    console.warn('컨텐츠 디렉토리 접근 실패:', error)
    return []
  }
}

export async function getContentBySlug(slug: string): Promise<ContentMeta> {
  // URL에서 왔을 수 있는 슬러그 디코딩 처리
  const decodedSlug = decodeURIComponent(slug)
  console.log('Trying to find content for slug:', decodedSlug)
  
  try {
    // 디코딩된 슬러그로 파일 경로 구성
    let fullPath = path.join(contentDirectory, `${decodedSlug}.md`)
    
    // 디코딩된 슬러그로 파일이 없으면 원래 슬러그로 시도
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDirectory, `${slug}.md`)
    }
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Content file not found: ${fullPath}`)
    }
    
    // 여기서 파일을 성공적으로 찾음
    console.log('Content file found:', fullPath)
    
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
  } catch (error) {
    // 파일 찾기 실패 로그
    console.log('Content not found or error:', error)
    return {
      slug,
      title: 'Content not found',
      date: new Date().toISOString().slice(0, 10),
      content: '<p>The requested content was not found.</p>',
    }
  }
}
