import './App.css';
import { howToCutBoards1D } from 'stock-cutting';

function App() {
  const bladeSize = 0.125;
  const stockSizes = [
    { size: 12 * 8, cost: 1 },
    { size: 12 * 2, cost: 1 / 4 },
  ];
  const input1 = [
    { size: 7, count: 21 },
    { size: 76, count: 17 },
    { size: 80, count: 7 },
  ];

  const output1 = howToCutBoards1D({
    stockSizes: stockSizes,
    bladeSize: bladeSize,
    requiredCuts: input1,
  });

  console.log('OUTPUT: ', output1);

  // solution - /config-overrides.js && /package.json -> replaced react-scripts with react-app-rewired
  return <div className='App'>{<text>{'this is the output: '}</text>}</div>;
}

export default App;
