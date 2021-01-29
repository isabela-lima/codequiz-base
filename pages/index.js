import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>CodeQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Friends Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault()
                router.push(`/quiz?name=${name}`)
                console.log('Fazendo uma submissão por meio de react')
              }}
            >
              <Input
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value)
                }}
                placeholder='Escreva seu nome!'
                value={name}
              />
              <Button type='submit' disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        {/* <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget> */}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/isabela-lima' />
    </QuizBackground>
  )
}
