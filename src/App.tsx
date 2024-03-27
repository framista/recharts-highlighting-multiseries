import { Chart } from './chart';
import { limitations, series } from './chart/data';

function App() {
  return (
    <>
      <Chart chartSeries={series} limitations={limitations} />
    </>
  );
}

export default App;
