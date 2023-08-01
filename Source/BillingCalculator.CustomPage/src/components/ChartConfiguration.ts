import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export class ChartConfiguration {

    reviewSeries: am5xy.LineSeries;
    repoSeries: am5xy.LineSeries;
    sumSeries: am5xy.LineSeries;
    reviewData: Point[] = [];
    repoData: Point[] = [];
    sumData: Point[] = [];
    constructor() {
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

        this.reviewSeries = chart.series.push(
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

        this.repoSeries = chart.series.push(
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

        this.sumSeries = chart.series.push(
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
        this.sumSeries.strokes.template.setAll({
            strokeWidth: 3,
            strokeDasharray: [10,5]
          });
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        for (let i = 0; i < 5; i++) {
            this.reviewData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(), value: 0,
                bullet: false
            });
            this.repoData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(), value: 0,
                bullet: false
            });
            this.sumData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(), value: 0,
                bullet: false
            });
        }

        this.sumSeries.bullets.push(function (root, series, dataItem) {
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
        this.reviewSeries.data.setAll(this.reviewData);
        this.repoSeries.data.setAll(this.repoData);
        this.sumSeries.data.setAll(this.sumData);
    }
    recalculateMax() {
        let maxValue = this.sumData[0].value;
        let maxIndex = 0;
        this.sumData.forEach((element, index) => {
            element.value = this.repoData[index].value + this.reviewData[index].value;
            element.bullet = false;
            if (maxValue < element.value) {
                maxValue = element.value;
                maxIndex = index;
            }
        });
        this.sumData[maxIndex].bullet = true;
        this.sumSeries.data.clear();
        this.sumSeries.data.setAll(this.sumData);
    }


    updateReview(index: number, value: number) {
        this.reviewSeries.data.setIndex(index, {
            date: new Date(2023, 8, index * 7 + 1).getTime(),
            value: value
        });
        this.recalculateMax();
    }

    updateRepo(index: number, value: number) {
        this.repoSeries.data.setIndex(index, {
            date: new Date(2023, 8, index * 7 + 1).getTime(),
            value: value
        });
        this.recalculateMax();
    }
}
export class Point {
    date: number = 0;
    value: number = 0;
    bullet: boolean = false;
}