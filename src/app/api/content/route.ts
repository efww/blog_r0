import { NextResponse } from 'next/server'
import { getAllContent } from '@/lib/markdown'

export async function GET() {
  try {
    const content = await getAllContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
} 