import { Metadata } from "next"
import { Providers } from "./providers"

export const metadata: Metadata = {
    title: "bkkim's Home",
    description: 'My App is a....'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <Providers><div id="root">{children}</div></Providers>
            </body>
      </html>
    )
}