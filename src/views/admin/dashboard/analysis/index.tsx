import { InfoCircleOutlined } from '@ant-design/icons-vue'
import { Col, Row, Tooltip } from 'ant-design-vue'
import { TinyArea, TinyColumn, Progress } from '@ant-design/charts'
import numeral from 'numeral'
import { Fragment } from 'vue'
import ChartCard from './components/ChartCard'
import Field from './components/ChartCard/Chart/Field'
import Trend from './components/ChartCard/Chart/Trend'
import Yuan from './components/ChartCard/Chart/Yuan'
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
}
const Analysis = defineComponent({
  setup() {},
  render() {
    return (
      <div>
        <>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard>
                {{
                  title: () => '总销售额',
                  action: () => (
                    <Tooltip title="指标说明">
                      <InfoCircleOutlined />
                    </Tooltip>
                  ),
                  total: () => <Yuan momany={126560} />,
                  footer: () => (
                    <Field
                      label="日销售额"
                      value={`￥${numeral(12423).format('0,0')}`}
                    />
                  ),
                  default: () => (
                    <>
                      <Trend flag="up">
                        周同比
                        <span class={'ml-2'}>12%</span>
                      </Trend>
                      <Trend flag="down">
                        日同比
                        <span class={'ml-2'}>11%</span>
                      </Trend>
                    </>
                  )
                }}
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard>
                {{
                  title: () => '访问量',
                  action: () => (
                    <Tooltip title="指标说明">
                      <InfoCircleOutlined />
                    </Tooltip>
                  ),
                  total: () => numeral(8846).format('0,0'),
                  footer: () => (
                    <Field
                      label="日访问量"
                      value={numeral(1234).format('0,0')}
                    />
                  ),
                  default: () => (
                    <TinyArea
                      color="#975FE4"
                      xField="x"
                      height={46}
                      forceFit
                      yField="y"
                      smooth
                      data={visitData}
                    />
                  )
                }}
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard>
                {{
                  title: () => '支付笔数',
                  action: () => (
                    <Tooltip title="指标说明">
                      <InfoCircleOutlined />
                    </Tooltip>
                  )
                }}
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard>
                {{
                  title: () => '运营活动效果',
                  action: () => (
                    <Tooltip title="指标说明">
                      <InfoCircleOutlined />
                    </Tooltip>
                  )
                }}
              </ChartCard>
            </Col>
          </Row>
        </>
      </div>
    )
  }
})
export default Analysis
