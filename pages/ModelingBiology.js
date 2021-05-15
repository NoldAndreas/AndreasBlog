import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

import ReactTooltip from 'react-tooltip'
import utilStyles from '../css/utils.module.css'
import Graph0 from "../components/Graph_Rasterplot"
import Graph1 from "../components/Graph1"


export default function WM_PRG() {
  return (
    <>
      <PageSeo
        title={`Modeling biological systems`}
        description={`How postsynatptic plasticity can control of working memory`}
        url={`${siteMetadata.siteUrl}/WM_PRG`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Modeling biological systems
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">

             Working memory describes the brain's capacity to
             temporarily store a limited number of items. Its limited capacity sets it apart
             from stable long-term memory system. However, a computational models of working
             memory that represents memory through neuronal spikes and is finite in its duration
             is still missing.

             <h3>Representation of items in the brain </h3>
             One
             <span data-tip="Fuster, Garrett: 'Neuron Activity Related to Short-Term Memory', Science (1971)"> <a href="https://science.sciencemag.org/content/173/3997/652.long">idea </a> </span>
             is that working memory items are represented in the brain as recurrent population spikes.
             This can be implemented in a
             <span data-tip="Mongillo, Tsodyks: 'Synaptic Theory of Working Memory', Science (2008)"> <a href="https://science.sciencemag.org/content/319/5869/1543">computational model </a> </span>
             of working memory with short-term-plasticity:

             As the background activity increases, a neural network traverses different states.
             <Graph1
               width={400}
               height={400}
             />

             <img src="/static/images/ParenchymalSnapshot_t.png" alt="loading..." />
          </div>
        </div>
      </div>
      <ReactTooltip className={utilStyles.tooltip}/>
    </>
  )
}
