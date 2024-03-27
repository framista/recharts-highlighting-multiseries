import { Chart } from './chart';
import { series } from './chart/data';

function App() {
  return (
    <>
      <Chart chartSeries={series} />
    </>
  );
}

export default App;
