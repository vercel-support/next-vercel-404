import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'

const Index = () => {
  return (
    <div>
      <NextLink href="/tags/1">
        <a>
          tags
        </a>
      </NextLink>
    </div>
  )
}

export default Index