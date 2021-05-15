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
        title={`Neuronal networks`}
        description={`How postsynatptic plasticity can control of working memory`}
        url={`${siteMetadata.siteUrl}/NeuronalNetworks`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Neuronal networks
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">

          Relatively simple neuronal network configurations can give rise to surprisingly rich
          repertoire of dynamic behaviours. For example, a stimulus can set off a cascade of
          population spikes, which may serve as a correlate for working memory.
          <Graph0/>
          Some behaviors can be explained using simpler firing rate models -- which can be described
          by easily solvable differential equations:
          <img src="/static/animations/Figure4_c1.gif" alt="loading..." />

          Check out the full paper by Sophia Becker et al.
            <span data-tip="Becker et al., 'Formation and synaptic control of active transient working memory representations', BioRxiv">
            <a href={"https://www.biorxiv.org/content/10.1101/2020.08.30.273995v1"}> here </a>
            </span>.
          
          </div>
        </div>
      </div>
      <ReactTooltip className={utilStyles.tooltip}/>
    </>
  )
}
