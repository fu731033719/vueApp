import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList() {
  const date = new Date().getTime()
  const url = `/api/getDiscList?time=${date}&platform=yyq&houtUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=${Math.random()}&outCharset=utf-8`
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    houtUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    outCharset: 'utf-8'
  })
  return axios.get(url, {
    param: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}