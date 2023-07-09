export interface GetHomeResponse {
  homeViews: HomeView[]
}

export interface HomeView {
  memeViews: MemeView[]
  idolView: IdolView
}

interface MemeView {
  id: string
  filePath: string
  creator: string
  editor: string
  created: string
  edited: string
}

interface IdolView {
  id: string
  name: string
}
