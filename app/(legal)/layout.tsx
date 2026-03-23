import PageShell from "@/app/shared/page-shell";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children}</PageShell>;
}
