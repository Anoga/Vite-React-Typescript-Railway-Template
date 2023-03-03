import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
const linkMatch = [
  { name: "乾上乾下", value: "乾为天" },
  { name: "坤上坤下", value: "坤为地" },
  { name: "坎上震下", value: "水雷屯" },
  { name: "艮上坎下", value: "山水蒙" },
  { name: "坎上乾下", value: "水天需" },
  { name: "乾上坎下", value: "天水讼" },
  { name: "坤上坎下", value: "地水师" },
  { name: "坎上坤下", value: "水地比" },
  { name: "巽上乾下", value: "风天小畜" },
  { name: "乾上兑下", value: "天泽履" },
  { name: "坤上乾下", value: "地天泰" },
  { name: "乾上坤下", value: "天地否" },
  { name: "乾上离下", value: "天火同人" },
  { name: "离上乾下", value: "火天大有" },
  { name: "坤上艮下", value: "地山谦" },
  { name: "震上坤下", value: "雷地豫" },
  { name: "兑上震下", value: "泽雷随" },
  { name: "艮上巽下", value: "山风蛊" },
  { name: "坤上兑下", value: "地泽临" },
  { name: "巽上坤下", value: "风地观" },
  { name: "离上震下", value: "火雷噬嗑" },
  { name: "良上离下", value: "山火贲" },
  { name: "良上坤下", value: "山地剥" },
  { name: "坤上震下", value: "地雷复" },
  { name: "乾上震下", value: "天雷无妄" },
  { name: "良上乾下", value: "山天大畜" },
  { name: "艮上震下", value: "山雷颐" },
  { name: "兑上異下", value: "泽风大过" },
  { name: "坎上坎下", value: "坎为水" },
  { name: "离上离下", value: "离为火" },
  { name: "兑上良下", value: "泽山咸" },
  { name: "震上巽下", value: "雷风恒" },
  { name: "乾上良下", value: "天山遁" },
  { name: "震上乾下", value: "雷天大壮" },
  { name: "离上坤下", value: "火地晋" },
  { name: "坤上离下", value: "地火明夷" },
  { name: "巽上离下", value: "风火家人" },
  { name: "离上兑下", value: "火泽睽" },
  { name: "坎上艮下", value: "水山蹇" },
  { name: "震上坎下", value: "雷水解" },
  { name: "艮上兑下", value: "山泽损" },
  { name: "巽上震下", value: "风雷益" },
  { name: "兑上乾下", value: "泽天夬" },
  { name: "乾上巽下", value: "天风姤" },
  { name: "兑上坤下", value: "泽地萃" },
  { name: "坤上巽下", value: "地风升" },
  { name: "兑上坎下", value: "泽水困" },
  { name: "坎上巽下", value: "水风井" },
  { name: "兑上离下", value: "泽火革" },
  { name: "离上巽下", value: "火风鼎" },
  { name: "震上震下", value: "震为雷" },
  { name: "艮上艮下", value: "艮为山" },
  { name: "巽上良下", value: "风山渐" },
  { name: "震上兑下", value: "雷泽归妹" },
  { name: "震上离下", value: "雷火丰" },
  { name: "离上艮下", value: "火山旅" },
  { name: "巽上巽下", value: "巽为风" },
  { name: "兑上兑下", value: "兑为泽" },
  { name: "巽上坎下", value: "风水涣" },
  { name: "坎上兑下", value: "水泽节" },
  { name: "巽上兑下", value: "风泽中孚" },
  { name: "震上艮下", value: "雷山小过" },
  { name: "坎上离下", value: "水火既济" },
  { name: "离上坎下", value: "火水未济" },
]

const linkList = [
  { name: "乾为天", link: "https://www.zhouyi.cc/zhouyi/yijing64/4103.html" },
  { name: "坤为地", link: "https://www.zhouyi.cc/zhouyi/yijing64/4105.html" },
  { name: "水雷屯", link: "https://www.zhouyi.cc/zhouyi/yijing64/4106.html" },
  { name: "山水蒙", link: "https://www.zhouyi.cc/zhouyi/yijing64/4107.html" },
  { name: "水天需", link: "https://www.zhouyi.cc/zhouyi/yijing64/4108.html" },
  { name: "天水讼", link: "https://www.zhouyi.cc/zhouyi/yijing64/4109.html" },
  { name: "地水师", link: "https://www.zhouyi.cc/zhouyi/yijing64/4110.html" },
  { name: "水地比", link: "https://www.zhouyi.cc/zhouyi/yijing64/4111.html" },
  { name: "风天小畜", link: "https://www.zhouyi.cc/zhouyi/yijing64/4112.html" },
  { name: "天泽履", link: "https://www.zhouyi.cc/zhouyi/yijing64/4113.html" },
  { name: "地天泰", link: "https://www.zhouyi.cc/zhouyi/yijing64/4126.html" },
  { name: "天地否", link: "https://www.zhouyi.cc/zhouyi/yijing64/4127.html" },
  { name: "天火同人", link: "https://www.zhouyi.cc/zhouyi/yijing64/4140.html" },
  { name: "火天大有", link: "https://www.zhouyi.cc/zhouyi/yijing64/4141.html" },
  { name: "地山谦", link: "https://www.zhouyi.cc/zhouyi/yijing64/4142.html" },
  { name: "雷地豫", link: "https://www.zhouyi.cc/zhouyi/yijing64/4143.html" },
  { name: "泽雷随", link: "https://www.zhouyi.cc/zhouyi/yijing64/4144.html" },
  { name: "山风蛊", link: "https://www.zhouyi.cc/zhouyi/yijing64/4145.html" },
  { name: "地泽临", link: "https://www.zhouyi.cc/zhouyi/yijing64/4146.html" },
  { name: "风地观", link: "https://www.zhouyi.cc/zhouyi/yijing64/4147.html" },
  { name: "火雷噬嗑", link: "https://www.zhouyi.cc/zhouyi/yijing64/4148.html" },
  { name: "山火贲", link: "https://www.zhouyi.cc/zhouyi/yijing64/4149.html" },
  { name: "山地剥", link: "https://www.zhouyi.cc/zhouyi/yijing64/4150.html" },
  { name: "地雷复", link: "https://www.zhouyi.cc/zhouyi/yijing64/4152.html" },
  { name: "天雷无妄", link: "https://www.zhouyi.cc/zhouyi/yijing64/4153.html" },
  { name: "山天大畜", link: "https://www.zhouyi.cc/zhouyi/yijing64/4159.html" },
  { name: "山雷颐", link: "https://www.zhouyi.cc/zhouyi/yijing64/4164.html" },
  { name: "泽风大过", link: "https://www.zhouyi.cc/zhouyi/yijing64/4167.html" },
  { name: "坎为水", link: "https://www.zhouyi.cc/zhouyi/yijing64/4168.html" },
  { name: "离为火", link: "https://www.zhouyi.cc/zhouyi/yijing64/4169.html" },
  { name: "泽山咸", link: "https://www.zhouyi.cc/zhouyi/yijing64/4170.html" },
  { name: "雷风恒", link: "https://www.zhouyi.cc/zhouyi/yijing64/4171.html" },
  { name: "天山遁", link: "https://www.zhouyi.cc/zhouyi/yijing64/4172.html" },
  { name: "雷天大壮", link: "https://www.zhouyi.cc/zhouyi/yijing64/4173.html" },
  { name: "火地晋", link: "https://www.zhouyi.cc/zhouyi/yijing64/4174.html" },
  { name: "地火明夷", link: "https://www.zhouyi.cc/zhouyi/yijing64/4175.html" },
  { name: "风火家人", link: "https://www.zhouyi.cc/zhouyi/yijing64/4176.html" },
  { name: "火泽睽", link: "https://www.zhouyi.cc/zhouyi/yijing64/4177.html" },
  { name: "水山蹇", link: "https://www.zhouyi.cc/zhouyi/yijing64/4179.html" },
  { name: "雷水解", link: "https://www.zhouyi.cc/zhouyi/yijing64/4180.html" },
  { name: "山泽损", link: "https://www.zhouyi.cc/zhouyi/yijing64/4181.html" },
  { name: "风雷益", link: "https://www.zhouyi.cc/zhouyi/yijing64/4182.html" },
  { name: "泽天夬", link: "https://www.zhouyi.cc/zhouyi/yijing64/4183.html" },
  { name: "天风姤", link: "https://www.zhouyi.cc/zhouyi/yijing64/4184.html" },
  { name: "泽地萃", link: "https://www.zhouyi.cc/zhouyi/yijing64/4185.html" },
  { name: "地风升", link: "https://www.zhouyi.cc/zhouyi/yijing64/4186.html" },
  { name: "泽水困", link: "https://www.zhouyi.cc/zhouyi/yijing64/4187.html" },
  { name: "水风井", link: "https://www.zhouyi.cc/zhouyi/yijing64/4188.html" },
  { name: "泽火革", link: "https://www.zhouyi.cc/zhouyi/yijing64/4189.html" },
  { name: "火风鼎", link: "https://www.zhouyi.cc/zhouyi/yijing64/4190.html" },
  { name: "震为雷", link: "https://www.zhouyi.cc/zhouyi/yijing64/4192.html" },
  { name: "艮为山", link: "https://www.zhouyi.cc/zhouyi/yijing64/4193.html" },
  { name: "风山渐", link: "https://www.zhouyi.cc/zhouyi/yijing64/4194.html" },
  { name: "雷泽归妹", link: "https://www.zhouyi.cc/zhouyi/yijing64/4195.html" },
  { name: "雷火丰", link: "https://www.zhouyi.cc/zhouyi/yijing64/4196.html" },
  { name: "火山旅", link: "https://www.zhouyi.cc/zhouyi/yijing64/4197.html" },
  { name: "巽为风", link: "https://www.zhouyi.cc/zhouyi/yijing64/4198.html" },
  { name: "兑为泽", link: "https://www.zhouyi.cc/zhouyi/yijing64/4200.html" },
  { name: "风水涣", link: "https://www.zhouyi.cc/zhouyi/yijing64/4212.html" },
  { name: "水泽节", link: "https://www.zhouyi.cc/zhouyi/yijing64/4244.html" },
  { name: "风泽中孚", link: "https://www.zhouyi.cc/zhouyi/yijing64/4255.html" },
  { name: "雷山小过", link: "https://www.zhouyi.cc/zhouyi/yijing64/4256.html" },
  { name: "水火既济", link: "https://www.zhouyi.cc/zhouyi/yijing64/4257.html" },
  { name: "火水未济", link: "https://www.zhouyi.cc/zhouyi/yijing64/4263.html" }
]


const numberToSimplifiedChinese = (num: number) => {
  switch (num) {
    case 2:
      return "二";
    case 3:
      return "三";
    case 4:
      return "四";
    case 5:
      return "五";
    default:
      return "";
  }
}

const bagua = [
  { name: "坤", yaoming: ["六", "六", "六"] },
  { name: "乾", yaoming: ["九", "九", "九"] },
  { name: "兑", yaoming: ["九", "九", "六"] },
  { name: "离", yaoming: ["九", "六", "九"] },
  { name: "震", yaoming: ["九", "六", "六"] },
  { name: "巽", yaoming: ["六", "九", "九"] },
  { name: "坎", yaoming: ["六", "九", "六"] },
  { name: "艮", yaoming: ["六", "六", "九"] }
];


const getYaoMing = (number: number, firstED: any, secondED: any) => {
  let yaoList = firstED.yaoming.concat(secondED.yaoming);
  switch (number) {
    case 0:
      return `上${yaoList[5]}`
    case 1:
      return `初${yaoList[0]}`
    default:
      return `${yaoList[number - 1]}${numberToSimplifiedChinese(number)}`
  }

}

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
    setNumber1(Math.floor(Math.random() * 1000));
    setNumber2(Math.floor(Math.random() * 1000));
    setNumber3(Math.floor(Math.random() * 1000));
  }

  const onResult = () => {
    let firstED = bagua[number1 % 8];
    let secondED = bagua[number2 % 8];
    let thirdNumber = number3 % 6;
    setResult(`${secondED.name}上${firstED.name}下 ${getYaoMing(thirdNumber, firstED, secondED)}`);
    const initName = `${secondED.name}上${firstED.name}下`;
    const matchName = linkMatch.find(x => x.name == initName)?.value;
    const link = linkList.find(x => x.name == matchName)?.link;
    debugger;
    setResultLink(link ?? "");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>周易64卦</h1>
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
        <a href={resultLink} style={{ color: "red" }}>{result}</a>
      </header>
    </div>
  )
}

export default App
