export const API_URL = {
  TEAMS: '/teams',
  MEMES: '/memes',
  TEAM_MEMBERS: (id) => `/teams/${id}/members`,
  MEMBER_MEMES: (id) => `/members/${id}/memes`,
}
