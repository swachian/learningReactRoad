export type Story = {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number
}

export type Action = 
  { type: 'SET_STORIES', payload: Story[] }
  | {type: 'LOAD_MORE_STORIES', payload: Story[]}
  | { type: 'DELETE_STORY', payload: Story }
  | { type: 'FILTER_STORY'; payload: string }

export type SearchParam = {
  param: string,
  page: number
}
