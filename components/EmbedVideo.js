/* eslint-disable jsx-a11y/anchor-has-content */
import ReactTooltip from 'react-tooltip'
import utilStyles from '../css/utils.module.css'

const EmbedVideo = ({href}) => {
  return <iframe width="560" height="315" src={href} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

export default EmbedVideo
