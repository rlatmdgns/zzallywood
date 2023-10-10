import NavigationList from './components/NavigationList/NavigationList'

const navigations = [
  {
    title: '홈',
    path: '/',
  },
  {
    title: '투표하기',
    path: '',
  },
  {
    title: '로그인',
    path: '/sign-in',
  },
]

const NavigationModule = () => {
  return <NavigationList navigations={navigations} />
}

export default NavigationModule
