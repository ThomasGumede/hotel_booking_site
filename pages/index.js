import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Destinations from '../components/Destinations'
import Hotels from '../components/Hotels'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Explore />
      <Destinations />
      <Hotels />
    </Layout>
  )
}
