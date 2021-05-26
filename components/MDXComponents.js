import Image from 'next/image'
import CustomLink from './Link'
import Graph0 from "../components/Graph_Rasterplot"
import Graph1 from "../components/Graph1"
import TooltipCustom from "../components/TooltipCustom"

const MDXComponents = {
  Image,
  a: CustomLink,
  G0: Graph0,
  G1: Graph1,
  TooltipCustom: TooltipCustom,
}

export default MDXComponents
