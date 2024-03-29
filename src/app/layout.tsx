import SupabaseProvider from '@/src/app/supabase-provider';
import Navbar from '@/src/components/Navbar';
import '@mdxeditor/editor/style.css';
import './globals.css';
import { ThemeProvider } from '@/src/app/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "PCJ's Homepage",
  description:
    'BeaverCoding provides a simple and powerful solution for your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="text-foreground">
        <ThemeProvider defaultTheme="dark" disableTransitionOnChange>
          <SupabaseProvider>
            <Navbar />
            <div className="max-w-screen-lg  px-6 mx-auto">
              <main
                id="skip"
                className="flex flex-col prose dark:prose-invert max-w-full min-h-screen"
              >
                {children}
              </main>
              <footer className="w-full border-t border-t-foreground/10 p-4 flex justify-center text-center text-xs">
                <p>Copyright © PCJ {new Date().getFullYear()}</p>
              </footer>
            </div>
            <Toaster />
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
