import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export class ChartConfiguration {

    static createChart() {
        const root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {})
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                baseInterval: {
                    timeUnit: "day",
                    count: 1
                }
            })
        );

        let series = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                  })
            })
        );
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        let data = [];
        let visits = 10;
        for (let i = 1; i < 30; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2023, 8, i).getTime(), value: visits });
        }

        let maxValue = data[0].value;
        let maxIndex = 0;
        data.forEach((element, index) => {
            if(maxValue < element.value)
            {
                maxValue = element.value;
                maxIndex = index;
            }
        });
        data[maxIndex] = {
            date: data[maxIndex].date,
            value: data[maxIndex].value,
            bullet: true
        }

        series.bullets.push(function (root, series, dataItem) {
            // @ts-ignore
            if (dataItem.dataContext.bullet) {
                var container = am5.Container.new(root, {});
                var circle0 = container.children.push(am5.Circle.new(root, {
                    radius: 5,
                    fill: am5.color(0xff0000)
                }));
                var circle1 = container.children.push(am5.Circle.new(root, {
                    radius: 5,
                    fill: am5.color(0xff0000)
                }));

                circle1.animate({
                    key: "radius",
                    to: 20,
                    duration: 1000,
                    easing: am5.ease.out(am5.ease.cubic),
                    loops: Infinity
                });
                circle1.animate({
                    key: "opacity",
                    to: 0,
                    from: 1,
                    duration: 1000,
                    easing: am5.ease.out(am5.ease.cubic),
                    loops: Infinity
                });

                return am5.Bullet.new(root, {
                    sprite: container
                })
            }
        })
        series.data.setAll(data);
    }
}