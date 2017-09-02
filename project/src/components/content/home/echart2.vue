<template>
<div id="echart2" :style="{width: '100%', height: '350px'}"></div>
</template>
<script>
import echart from 'echarts';
import $ from 'jquery';
import {
  resize
} from 'jquery';

export default {
  name: "echart2",
  mounted() {
    this.drawLine();
    // if(localStorage.getItem('addData')){
    //   let data = JSON.parse(localStorage.getItem('addData'));
    //   this.attr.sy = data.filter(e=>e.attr === '首页').length;
    //   this.attr.zd = data.filter(e=>e.attr === '置顶').length;
    //   this.sypre = parseFloat(this.attr.sy/(this.attr.sy+this.attr.zd)*100);
    //   this.zdpre = parseFloat(this.attr.zd/(this.attr.sy+this.attr.zd)*100);
    // }
  },
  data() {
    return {
      attr:{
        sy:1100,
        zd:4200
      },
      sypre:20.7,
      zdpre:79.2
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echart.init(document.getElementById('echart2'));
      window.addEventListener('resize', function() {
        myChart.resize();
      })
      let val1 = this.attr.sy;
      let val2 = this.attr.zd;
      let valpre1 = this.sypre;
      let valpre2 = this.zdpre;
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#060f4c',
        series: [{
          type: 'pie',
          radius: ['35%', '55%'],
          silent: true,
          data: [{
            value: 1,
            itemStyle: {
              normal: {
                color: '#050f58',
                borderColor: '#162abb',
                borderWidth: 2,
                shadowBlur: 50,
                shadowColor: 'rgba(21,41,185,.75)'
              }
            }
          }]
        }, {
          type: 'pie',
          radius: ['35%', '55%'],
          silent: true,
          label: {
            normal: {
              show: false,
            }
          },
          data: [{
            value: 1,
            itemStyle: {
              normal: {
                color: '#050f58',
                shadowBlur: 50,
                shadowColor: 'rgba(21,41,185,.75)'
              }
            }
          }]
        }, {
          name: '占比',
          type: 'pie',
          radius: ['39%', '52%'],
          hoverAnimation: false,

          data: [{
            value: valpre1,
            name: "首页",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 15,
                    fontWeight: "bold"
                  },
                  position: "center"
                },
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(5,193,255,1)'
                }, {
                  offset: 1,
                  color: 'rgba(15,15,90,1)'
                }])
              }
            },
            label: {
              normal: {
                position: 'outside',
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                },
                formatter: '{b}: '+val2+'\n\n{a}: {c}%'
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 30,
                smooth: false,
                lineStyle: {
                  width: 1,
                  color: "#2141b5"
                }
              }
            }
          }, {
            value: valpre2,
            name: "置顶",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 15,
                    fontWeight: "bold"
                  },
                  position: "center"
                },
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(5,15,88,1)'
                }, {
                  offset: 1,
                  color: 'rgba(235,122,255,1)'
                }])
              }
            },
            label: {
              normal: {
                position: 'outside',
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                },
                formatter: '{b}: '+val1+'\n\n{a}: {c}%'
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 40,
                smooth: false,
                lineStyle: {
                  width: 1,
                  color: "#2141b5"
                }
              }
            }
          }]
        }, {
          name: '',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [200, 200],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 0,
            label: {
              normal: {
                formatter: '40',
                textStyle: {
                  color: '#fe8b53',
                  fontSize: 25,
                  fontWeight: 'bold'
                }
              }
            }
          }, {
            tooltip: {
              show: false
            },
            label: {
              normal: {
                formatter: '\n平均数量',
                textStyle: {
                  color: '#bbeaf9',
                  fontSize: 14
                }
              }
            }
          }]
        }]
      });
    }
  },
  watch:{
    attr:function(){
      alert(1)
      prec()
    }
  }
}
</script>
<style  scoped>
</style>
