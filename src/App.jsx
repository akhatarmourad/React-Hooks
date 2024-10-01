import { UseStateHook, UseEffectHook, UseMemoHook } from './hooks';
import './App.css';

function App() {
  return (
    <div className='p-5 font-jost'>
      {/* useState Hook */}
      <UseStateHook />

      {/* useEffect Hook */}
      <UseEffectHook />

      {/* useMemoHook */}
      <UseMemoHook />
    </div>
  )
}

export default App
