import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { iChingBase, iChingNameList, iChingLinkList } from './contants';
import { get3FiguresRandom, getIChingKidName } from './utils';

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [result, setResult] = useState('');
  const [resultLink, setResultLink] = useState('');

  const onRandom = () => {
    setNumber1(get3FiguresRandom());
    setNumber2(get3FiguresRandom());
    setNumber3(get3FiguresRandom());
  }

  const onResult = () => {
    const firstIChing = iChingBase[number1 % 8];
    const secondIChing = iChingBase[number2 % 8];
    const initName = `${secondIChing.name}上${firstIChing.name}下`;
    setResult(`${initName} ${getIChingKidName(number3 % 6, firstIChing, secondIChing)}`);
    setResultLink(iChingLinkList[iChingNameList[initName]]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>周易64卦</h1>
        <h1>不诚不占，不义不占，不疑不占</h1>
        <section>
          <div>
            <span>数字1:</span>
            <input
              ref={inputRef1}
              type="text"
              placeholder="请输入第一位三位数"
              maxLength={50}
              value={number1 ? number1 : ""}
              onChange={(e) => {
                setNumber1(Number(e.target.value))
              }}
            />
          </div>
          <div>
            <span>数字2:</span>
            <input
              ref={inputRef2}
              type="text"
              placeholder="请输入第二位三位数"
              maxLength={50}
              value={number2 ? number2 : ""}
              onChange={(e) => {
                setNumber2(Number(e.target.value))
              }}
            />
          </div>
          <div>
            <span>数字3:</span>
            <input
              ref={inputRef3}
              type="text"
              placeholder="请输入第三位三位数"
              maxLength={50}
              value={number3 ? number3 : ""}
              onChange={(e) => {
                setNumber3(Number(e.target.value))
              }}
            />
          </div>
        </section>
        <div className="button-container">
          <button type="button" onClick={onRandom}>随机数</button>
          <button type="button" onClick={onResult}>测算</button>
        </div>
        <h1><a href={resultLink} style={{ color: "red" }}>{result}</a></h1>
      </header>
    </div>
  )
}

export default App
