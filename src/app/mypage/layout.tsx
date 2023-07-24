import NavigationModule from '@/common/components/Navigations'

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
