import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

export const RepairChart = ({ data }) => {
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        beginAtZero: true
      }
    },
    onClick: (e, element) => {
      if (element.length > 0) {
        const index = element[0].index;
        const info = data.datasets[0].data[index];
        // Afficher les informations - vous pouvez les afficher comme vous le souhaitez
        console.log(info);
      }
    }
  };

  return <Line data={data} options={options} />;
}