import Head from 'next/head';
import TodolistContextProvider from '../context/todolistContext';
import ThemeContextProvider from '../context/todolistContext';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>TODOAMAZING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <Header />
        <main>
          <TodolistContextProvider>
            <TodoList />
            <TodoForm />
          </TodolistContextProvider>
        </main>

        <footer>
          <small>You got this buddy! 😃</small>
        </footer>
      </ThemeContextProvider>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          background-color: rgba(255, 255, 255, 0.25);
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ul, ol {
          list-style-type: none;
          margin-left: -50%;
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          src: url('/fonts/Quicksand-Regular.ttf')
        }
        @font-face {
          font-family: 'Quicksand-Bold';
          font-style: normal;
          src: url('/fonts/Quicksand-Bold.ttf')
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Quicksand, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #d2e7ff;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
