import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { ReviewCalculationInput } from "../calculator/ReviewCalculator";
import { RepositoryCalculationInput } from "../calculator/RepositoryCalculator";
import { StagingCalculationInput } from "../calculator/StagingCalculator";

export class ChartConfiguration {

    reviewSeries: am5xy.LineSeries;
    repoSeries: am5xy.LineSeries;
    linkReviewSeries: am5xy.LineSeries;
    coldSeries: am5xy.LineSeries;
    stageSeries: am5xy.LineSeries;
    reviewData: Point[] = [];
    repoData: Point[] = [];
    linkReviewData: Point[] = [];
    coldData: Point[] = [];
    stageData: Point[] = [];
    constructor() {
        const root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                layout: root.verticalLayout
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );
        yAxis.children.unshift(
            am5.Label.new(root, {
              rotation: -90,
              text: "File size, GB",
              y: am5.p50,
              centerX: am5.p50
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
        let legend = chart.children.push(am5.Legend.new(root, {

        }));

        this.reviewSeries = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Review",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#7eb0d5"),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        this.linkReviewSeries = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Linked files",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#ffb55a"),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        this.repoSeries = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Repository",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#b2e061"),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        this.coldSeries = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Cold storage",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#8bd3c7"),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        this.stageSeries = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Staging",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                stroke: am5.color("#beb9db"),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            })
        );

        this.stageSeries.strokes.template.set("strokeWidth", 3);
        this.coldSeries.strokes.template.set("strokeWidth", 3);
        this.repoSeries.strokes.template.set("strokeWidth", 3);
        this.linkReviewSeries.strokes.template.set("strokeWidth", 3);
        this.reviewSeries.strokes.template.set("strokeWidth", 3);

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        for (let i = 0; i < 5; i++) {
            this.reviewData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(),
                value: 0,
                bullet: false
            });
            this.repoData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(),
                value: 0,
                bullet: false
            });
            this.linkReviewData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(),
                value: 0,
                bullet: false
            });
            this.coldData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(),
                value: 0,
                bullet: false
            });
            this.stageData.push({
                date: new Date(2023, 8, i * 7 + 1).getTime(),
                value: 0,
                bullet: false
            });
        }

        this.reviewSeries.bullets.push(function (root, series, dataItem) {
            // @ts-ignore
            if (dataItem.dataContext.bullet) {
                var container = am5.Container.new(root, {});
                var circle0 = container.children.push(am5.Circle.new(root, {
                    radius: 5,
                    tooltipText:"Pick",
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
        legend.data.setAll(chart.series.values);
        this.reviewSeries.data.setAll(this.reviewData);
        this.repoSeries.data.setAll(this.repoData);
        this.linkReviewSeries.data.setAll(this.linkReviewData);
        this.coldSeries.data.setAll(this.coldData);
        this.stageSeries.data.setAll(this.stageData);
    }

    updateReview(newData: ReviewCalculationInput[], pickIndex: number) {
        newData.forEach((element, i) =>{
            this.reviewData[i].value = element.dataInGb + element.textOnlyDocumentsCount/4000;
            this.reviewData[i].bullet = false;
        })
        this.reviewData[pickIndex].bullet = true;
        this.reviewSeries.data.setAll(this.reviewData);
    }

    updateRepo(newData: RepositoryCalculationInput[]) {
        newData.forEach((element, i) =>{
            this.repoData[i].value = element.totalBilliableFileSizeInGB;
            this.linkReviewData[i].value = element.linkedBilliableFileSizeInGB;
        })
        this.linkReviewSeries.data.setAll(this.linkReviewData);
        this.repoSeries.data.setAll(this.repoData);
    }

    updateCold(newData: RepositoryCalculationInput[]) {
        newData.forEach((element, i) =>{
            this.coldData[i].value = element.totalBilliableFileSizeInGB;
        })
        this.coldSeries.data.setAll(this.coldData);
    }

    updateStage(newData: StagingCalculationInput[]) {
        newData.forEach((element, i) =>{
            this.stageData[i].value = element.dataInGb;
        })
        this.stageSeries.data.setAll(this.stageData);
    }
}
export class Point {
    date: number = 0;
    value: number = 0;
    bullet: boolean = false;
}