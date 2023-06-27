import NavigationList from './components/NavigationList/NavigationList'

const navigations = [
  {
    title: 'home',
    path: '/',
    type: 'link',
  },
  {
    title: 'upload',
    path: '',
    type: 'button',
  },
  {
    title: 'mypage',
    path: 'mypage',
    type: 'link',
  },
]

const NavigationModule = () => {
  return <NavigationList navigations={navigations} />
}

export default NavigationModule
