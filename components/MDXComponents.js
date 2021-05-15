import Image from 'next/image'
import CustomLink from './Link'
import Graph0 from "../components/Graph_Rasterplot"
import Graph1 from "../components/Graph1"

const MDXComponents = {
  Image,
  a: CustomLink,
  G0: Graph0,
  G1: Graph1,
}

export default MDXComponents
