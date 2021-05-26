/* eslint-disable jsx-a11y/anchor-has-content */
import ReactTooltip from 'react-tooltip'
import utilStyles from '../css/utils.module.css'

const TooltipCustom = ({ text_display,text_link, href }) => {
  return <span data-tip={text_link}> <a href={href}>{text_display} </a>  <ReactTooltip className={utilStyles.tooltip}/></span> 
}

export default TooltipCustom
