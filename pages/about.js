import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">PostDoc</div>
            <div className="text-gray-500 dark:text-gray-400">Computational Modeling & Data Analysis</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <p>
          Andreas completed his undergraduate studies in both mechanical engineering and
          mathematics and computer science at TU Darmstadt. There, he specialized
          in the analysis and simulation of differential equations in fluid mechanics.
          He did his PhD at Imperial College London on computational models of fluid flows at the nanoscale.
          </p>
          <p>
          After working as an IT consultant with Senacor at one of the top banks in Germany, he moved to
          the field of neuroscience as a PostDoc at the Max-Planck Institute for Brain Research in Frankfurt.
          There, he pursued several collaborative projects, including
          data analysis of single-molecule super-resolution imaging data,
          the mathematical modeling for neuronal correlates of working memory,
          as well as programming of a software framework for neuronal network simulations.
          </p>
          <p>
          Andreas is driven by the curiosity to connect the dots, make applications work, and apply cutting-edge
          modeling and data analysis techniques across disciplines. He works hard to enable the team and its members to succeed.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}
