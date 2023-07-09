import { Idols } from '@/services/getIdols/Idols.interface'
import { Meme } from '@/services/getMemes/getMemes.interface'

export interface GetHome {
  homeViews: HomeView[]
}

export interface HomeView {
  memeViews: Meme[]
  idolView: Idols
}
