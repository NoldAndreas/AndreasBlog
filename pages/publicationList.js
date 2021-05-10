
import hydrate from 'next-mdx-remote/hydrate'
import { getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('publications')
  const post = await getFileBySlug('publications','publications')

  return { props: { post} }

}

export default function Home({post } ) {
  const { mdxSource, frontMatter } = post
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <PageSeo
        title={`Publications - ${siteMetadata.author}`}
        description={`Publications - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/publicationList`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          {content}
          </div>
        </div>
      </div>
    </>
  )
}
