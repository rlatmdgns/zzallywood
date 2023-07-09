import NavigationModule from '@/components/Navigations'

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
