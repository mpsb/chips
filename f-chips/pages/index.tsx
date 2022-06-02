import type { NextPage } from 'next'
import Card from '../components/containers/Card'
import TextField from '../components/inputs/TextField'

const Home: NextPage = () => {
  return (
    <div style={{width: 196, marginLeft: 128, marginTop: 128}}>
      <Card>
      <TextField placeholder="Amount"/>
    </Card>
    </div>
  )
}

export default Home
