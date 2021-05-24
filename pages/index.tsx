import Head from 'next/head'
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import { fetchHello } from '../redux_modules/template'
import { RootState } from '../redux_modules'
import styles from '../styles/Home.module.css'

const Home = props => {
  useEffect(() => {
    props.fetchHello()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Saga App</title>
        <meta name="description" content="NEXT + SAGA BOILER PLATE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="home-page-test">
          {`Hello ${props.name}`}
      </div>
    </div>
  )
}

export default connect(
  (state: RootState) => ({
    name: state.Template.name
  }), 
  dispatch => ({
    fetchHello: bindActionCreators(fetchHello, dispatch)
  })
)(Home)