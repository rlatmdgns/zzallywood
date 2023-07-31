export const API_URL = {
  TEAMS: '/teams',
  MEMES: '/memes',
  TEAM_MEMBERS: (id: string) => `http://api.rumor-lab.com/teams/${id}/members`,
  MEMBER_MEMES: (id: string) => `/members/${id}/memes`,
}
