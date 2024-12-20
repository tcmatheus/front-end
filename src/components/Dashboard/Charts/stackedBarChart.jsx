import { Chart } from "primereact/chart"
import { useEffect, useState } from "react";

import '../../../styles/Dashboard/cardComGrafico.css';


export default function StackedBarChart(){
    
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);

        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
        {
    type: 'bar',
    label: 'Valor das Vendas R$',
    backgroundColor: '#0A703F',
    data: [50.00, 25.00, 12.00, 48.00, 90.00, 76.00, 42.00, 50.00, 50.00, 50.00, 50.00, 25.00]
        },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.2,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            borderRadius: 8
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="totVendas__container">
            <p className="totVendas__container--text">Total de Vendas</p>
            <h3 className="totVendas__container--valor">R$ 1.000,00</h3>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}