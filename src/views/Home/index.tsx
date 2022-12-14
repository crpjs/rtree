import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Counter } from '@/components/Counter';
import { currentEnv } from '@/consts/env';

export default function Home() {
  console.log('process.env', process.env);
  return (
    <>
      <header className="App-header">
        <p>
          RTREE <code> 子应用</code> v0.0.1
        </p>
      </header>
      {/* <Counter /> */}
      currentEnv {process.env.CRP_ENV}
      currentEnv-env: {process.env.CRP_NAME}
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
