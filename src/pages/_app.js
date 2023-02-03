import '@/styles/globals.css'
import { Inter, Source_Serif_4} from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })
const source_serif_4 = Source_Serif_4({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --source-serif-4-font: ${source_serif_4.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
