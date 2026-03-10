/**
 * Force fresh data from Sanity for all Obras routes so that:
 * - Deleted linguagens/obras disappear from the list immediately
 * - New linguagens show up without waiting for revalidation
 */
export const dynamic = 'force-dynamic'

export default function ObrasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
