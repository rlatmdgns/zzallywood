import NavigationModule from '@/modules/Navigations'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <NavigationModule />
    </>
  )
}
