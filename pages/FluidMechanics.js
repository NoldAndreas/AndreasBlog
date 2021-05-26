import hydrate from 'next-mdx-remote/hydrate'
import { getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'

import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'


export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('publications')
  const post = await getFileBySlug('publications','FluidMechanics')

  return { props: { post} }

}

export default function ModelingBiology({post}) {
  const { mdxSource, frontMatter } = post
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
    <PageSeo
      title={`Dynamic Contact Line - ${siteMetadata.author}`}
      description={`Exploring what happens at the smallest scales when liquid, gas and solid meet..`}
      url={`${siteMetadata.siteUrl}/FluidMechanics`}
    />
    <div className="divide-y">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          FluidMechanics
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        {content}
      </div>
      </div>
    </div>
    </>
  )
}
