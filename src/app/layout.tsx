import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import LeftSidebar from '@/components/layout/left-sidebar'
import RightSidebar from '@/components/layout/right-sidebar'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700']
})

export const metadata = {
  title: "Robert's Blog",
  description: '세상에서 가장 흥륭한 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-FJ873T673H`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJ873T673H');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="navigation-progress" className="navigation-progress"></div>
          
          {/* Left sidebar */}
          <LeftSidebar />
          
          {/* Main content */}
          <main className="main-content">
            <div className="claude-content">
              {children}
            </div>
          </main>
          
          {/* Right sidebar */}
          <RightSidebar />
          
          {/* 스크롤 진행률 표시 스크립트 */}
          <Script id="navigation-progress" strategy="afterInteractive">
            {`
              document.addEventListener('DOMContentLoaded', function() {
                const progressBar = document.getElementById('navigation-progress');
                window.addEventListener('scroll', function() {
                  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                  const scrolled = (winScroll / height) * 100;
                  if (progressBar) progressBar.style.width = scrolled + "%";
                });
              });
            `}
          </Script>
          
          {/* 애니메이션 효과 스크립트 */}
          <Script id="animation-effects" strategy="afterInteractive">
            {`
              document.addEventListener('DOMContentLoaded', function() {
                // 호버 효과 추가
                const hoverElements = document.querySelectorAll('.hover-lift');
                hoverElements.forEach(element => {
                  element.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                  });
                  element.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                  });
                });
                
                // 페이지 로드 애니메이션
                document.body.classList.add('fade-in');
              });
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}
