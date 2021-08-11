export type ContentType = 'ABOUT' | 'BUY'

export interface Content {
  type: ContentType
  content: string
}
