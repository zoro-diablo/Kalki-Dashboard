import React from 'react'
import ApexCharts from 'apexcharts'
import './graph.scss'
import { options } from '../../utilities/data'




class ArearGraph extends React.Component {
  chart = null
  componentDidMount() {
    if (!this.chart) {
      this.chart = new ApexCharts(
        document.querySelector('#chart-timeline'),
        options
      )
      this.chart.render()
    }
  }

  resetCssClasses = (activeEl) => {
    const els = document.querySelectorAll('button')
    Array.prototype.forEach.call(els, function (el) {
      el.classList.remove('active')
    })

    activeEl.target.classList.add('active')
  }

  handleOneMonthClick = (e) => {
    this.resetCssClasses(e)

    this.chart.zoomX(
      new Date('28 Jan 2013').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  }

  handleSixMonthsClick = (e) => {
    this.resetCssClasses(e)

    this.chart.zoomX(
      new Date('27 Sep 2012').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  }

  handleOneYearClick = (e) => {
    this.resetCssClasses(e)

    this.chart.zoomX(
      new Date('27 Feb 2012').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  }

  handleYTDClick = (e) => {
    this.resetCssClasses(e)

    this.chart.zoomX(
      new Date('01 Jan 2013').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  }

  handleAllClick = (e) => {
    this.resetCssClasses(e)

    this.chart.zoomX(
      new Date('23 Jan 2012').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  }

  render() {
    return (
      <div className=''>
        <div id='chart-timeline'></div>
        <div className='flex justify-end gap-x-4 mb-5 mr-2'>
          <button
            id='one_month'
            onClick={this.handleOneMonthClick}
            className='bg-[#ff971d] hover:bg-[#ff961de1] hover:text-black text-[#ffffffda] text-sm py-1 px-2 rounded-sm font-medium'
          >
            One Month
          </button>
          <button
            id='six_months'
            onClick={this.handleSixMonthsClick}
            className='bg-[#ff971d] hover:bg-[#ff961de1] hover:text-black text-[#ffffffda] text-sm py-1 px-2 rounded-sm font-medium'
          >
            Six Months
          </button>
          <button
            id='one_year'
            onClick={this.handleOneYearClick}
            className='bg-[#ff971d] hover:bg-[#ff961de1] hover:text-black text-[#ffffffda] text-sm py-1 px-2 rounded-sm font-medium'
          >
            One Year
          </button>
          <button
            id='ytd'
            onClick={this.handleYTDClick}
            className='bg-[#ff971d] hover:bg-[#ff961de1] hover:text-black text-[#ffffffda] text-sm py-1 px-2 rounded-sm font-medium'
          >
            YTD
          </button>
          <button
            id='all'
            onClick={this.handleAllClick}
            className='bg-[#ff971d] hover:bg-[#ff961de1] hover:text-black text-[#ffffffda] text-sm py-1 px-2 rounded-sm font-medium'
          >
            All
          </button>
        </div>
      </div>
    )
  }
}

export default ArearGraph
