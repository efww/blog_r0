import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

export function formatDate(date: string): string {
  const parsedDate = parseISO(date)
  return format(parsedDate, 'yyyy년 MM월 dd일', { locale: ko })
}
