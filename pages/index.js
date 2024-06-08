import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoCall, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software developer from Colombia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Edwin Cuetia
          </Heading>
          <p>Software Developer ( Angular / React / Ionic )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/edwin.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          As a passionate web developer specialized in technologies such as Angular, React, WordPress. My organized and results-oriented approach has allowed me to successfully complete the various projects and challenges that have been presented to me. My commitment and work ethic, where responsibility and collaboration are fundamental. My previous experience includes developing effective and engaging web solutions, making the most of my technical skills and ability to work as a team.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work experience
        </Heading>
        <BioSection>
          <BioYear>2024</BioYear>
          Factor Clave: e-learning, Articulate 360
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Hexa Solutions: Development web, angular/Ionic
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Ujusa: Ujusa web, Wordpress.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Graphics designer in Adobe management (Acrobat, Photoshop, after effects, premiere and illustrator) & 3d modeling in Sketchup, And machine operator in a company called Gilpa Impresores
        </BioSection>
      </Section>

     

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Personal information
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/edwinkay" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @edwinkay
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/edwin-cuetia/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @edwin-cuetia
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                edwinkaycut@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoCall />}
              >
                +57 301 7757343
              </Button>
            </Link>
          </ListItem>
        </List>          
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getStaticProps } from '../components/chakra'
