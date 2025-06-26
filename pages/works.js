import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/asomos.png'
import thumbWalknote from '../public/images/works/licor.png'
import thumbMenkiki from '../public/images/works/ice.png'
import thumbCorinto from '../public/images/works/corinto.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="corinto"
            title="Cabildo indegena de Corinto"
            thumbnail={thumbCorinto}
          >
            aplication made in WordPress (DIVI) using Laravel, Valet and MySQL
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="asomos" title="Asomos" thumbnail={thumbInkdrop}>
            App designed in ionic and angular
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="licorApp"
            title="LicorApp"
            thumbnail={thumbWalknote}
          >
            Desktop web application to manage sales inventory
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem id="iceCreamShop" thumbnail={thumbMenkiki} title="IceCreamShop">
            A simple Angular application to take ice cream orders
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getStaticProps } from '../components/chakra'
