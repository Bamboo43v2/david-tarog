import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"David Tarog | Life Coaching",description:"Clarity for where you are. Confidence for what’s next."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
