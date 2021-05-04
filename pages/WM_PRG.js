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
        title={`Working memory model`}
        description={`How postsynatptic plasticity can control of working memory`}
        url={`${siteMetadata.siteUrl}/WM_PRG`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Transient Working Memories
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">

          <h3>What is working memory </h3>
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
             <Graph0/>

             As the background activity increases, a neural network traverses different states.
             <Graph1
               width={400}
               height={400}
             />

             Interestingly, we find one transient state, in which the duration of the population spikes is finite.
              Is this a mechanism that could complement
              <span data-tip="Jonides et al., 'The Mind and Brain of Short-Term Memory', Ann. Rev. Psych. (2008)"> <a href="https://doi.org/10.1146/annurev.psych.59.103006.093615">known mechanisms</a> </span> of forgetting?

              <h3>How stable are transient representations of working memory?</h3>
              For this, we study a firing rate model. This is a simplified set
              of equations, which does not capture spikes of single neurons, but models the
              firing rate of the population as a whole. We observe that:
              <ul>
              <li>
              noise can initiate a limit cycle from a regime without limit cycles
              <img src="/static/animations/Figure4_c1.gif" alt="loading..." />
              </li>
              <li>
            Noise can disrupt a limit cycle from a regime with limit cycles
            <img src="/static/animations/Figure4_c2.gif" alt="loading..." />
            </li>
            </ul>
            <h3> Might unregulated transient working memory durations underly psychiatric diseases?</h3>
            We include the effect of a genetic alteration which was linked to schizophrenia
            in our synaptic model. We show how an alteration in this synaptic pathway
            shifts network activity to longer transients. Could this impact the ability
            to forget?

            <h3>And now?</h3>
            The computational model suggests that forgetting happens in a tuned regime
            of neural network activity. In psychiatric diseases, synaptic dysfunction could
            disrupt this regime. This hypothesis needs to be tested experimentally.

            <p>
            Check out the full paper by Sophia Becker et al.
            <span data-tip="Becker et al., 'Formation and synaptic control of active transient working memory representations', BioRxiv">
            <a href={"https://www.biorxiv.org/content/10.1101/2020.08.30.273995v1"}> here </a>
            </span>.
            </p>
          </div>
        </div>
      </div>
      <ReactTooltip className={utilStyles.tooltip}/>
    </>
  )
}
