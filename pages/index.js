import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
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
import Link from '../src/components/Link'

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
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.0 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial='hidden'
          animate='show'
        >
          <Widget.Header>
            <h1>Friends Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre a série que é um sucesso desde
              sua estreia até hoje.
            </p>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault()
                router.push(`/quiz?name=${name}`)
                console.log('Fazendo uma submissão por meio de react')
              }}
            >
              <Input
                name='nomeDoUsuario'
                onChange={(infosDoEvento) =>
                  setName(infosDoEvento.target.value)
                }
                placeholder='Diz ai seu nome'
                value={name}
              />
              <Button type='submit' disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.0 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial='hidden'
          animate='show'
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.0 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial='hidden'
          animate='show'
        />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/isabela-lima' />
    </QuizBackground>
  )
}
