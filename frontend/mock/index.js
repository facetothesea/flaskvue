// const fs = require('fs')

const proxy = {
  'GET /api/getNumber': { randomNumber: Math.floor((Math.random() * 100) + 1) },
  'GET /api/getpcss': [
    { value: '0', label: '件' },
    { value: '1', label: '托' },
    { value: '2', label: '箱' },
    { value: '3', label: '支' },
    { value: '4', label: '组' },
    { value: '5', label: '卷' }
  ],
  'GET /api/getstates': [
    { value: '1', label: '启用' },
    { value: '0', label: '停用' }
  ],
  'GET /api/getMaterials': [{
    value: '1000011',
    label: '电池12'
  }, {
    value: '1010022',
    label: '电池20'
  }, {
    value: '1010032',
    label: '电池32'
  }, {
    value: '1010122',
    label: '电池45'
  }],
  'GET /api/getAllocations': [
    { value: 'A01A' },
    { value: 'B01A' },
    { value: 'C01A' },
    { value: 'D01A' },
    { value: 'BX01' }
  ],
  'POST /api/inventory/add': (req, res) => {
    const { code, name, acount } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '入库成功',
      data: { 'code': code, 'name': name, 'acount': acount }
    })
  },
  'POST /api/inventory/sub': (req, res) => {
    const { code, name, acount } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '出库成功',
      data: { 'code': code, 'name': name, 'acount': acount }
    })
  },
  'POST /api/inventory/chg': (req, res) => {
    const { code, allocationFrom, allocationTo, name, acount } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '移库成功',
      data: { 'code': code, 'name': name, allocationFrom, allocationTo, 'acount': acount }
    })
  },
  'POST /api/material/add': (req, res) => {
    const { code, name, state } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '物料添加成功',
      data: { 'code': code, 'name': name, 'state': state }
    })
  },
  'POST /api/material/mod': (req, res) => {
    const { code, name, state } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '物料修改成功',
      data: { 'code': code, 'name': name, 'state': state }
    })
  },
  'POST /api/allocation/add': (req, res) => {
    const { allocation, state } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '货位添加成功',
      data: { 'allocation': allocation, 'state': state }
    })
  },
  'POST /api/allocation/mod': (req, res) => {
    const { allocation, state } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '货位修改成功',
      data: { 'allocation': allocation, 'state': state }
    })
  },
  'POST /api/safety/add': (req, res) => {
    const { code, name, acount } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '安全库存添加成功',
      data: { 'code': code, 'name': name, 'acount': acount }
    })
  },
  'POST /api/safety/mod': (req, res) => {
    const { code, name, acount } = req.body
    return res.send({
      status: 'ok',
      code: 0,
      msg: '安全库存修改成功',
      data: { 'code': code, 'name': name, 'acount': acount }
    })
  },
  'GET /api/getsafety': [
    { code: '1001', name: '1001', acount: '9000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1002', name: '1002', acount: '8000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1003', name: '1003', acount: '7000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1004', name: '1004', acount: '6000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1005', name: '1005', acount: '5000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1006', name: '1006', acount: '4000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1007', name: '1007', acount: '3000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1008', name: '1008', acount: '2000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1009', name: '1009', acount: '1000', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1010', name: '1010', acount: '900', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1011', name: '1011', acount: '800', remark: '初始化1', lastdt: '2019-12-14 13:03:01' },
    { code: '1012', name: '1012', acount: '700', remark: '初始化1', lastdt: '2019-12-14 13:03:01' }
  ],
  'GET /api/getmaterial': [
    { code: '10101', name: '电池12', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    { code: '10102', name: '电池20', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    { code: '10303', name: '电池15', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    { code: '10404', name: '电池32', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    { code: '10101', name: '电池39', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' },
    { code: '10301', name: '电池40', pcs: '0', state: '1', remark: '初始化', lastdt: '2019-12-14 13:03:01' }
  ],
  'GET /api/storage': [
    { allocation: 'A01A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01' },
    { allocation: 'A02A', state: '0', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01' },
    { allocation: 'A91A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01' },
    { allocation: 'A71A', state: '1', remark: '每次都要初始化', lastdt: '2019-12-14 13:03:01' }
  ],
  'GET /api/user/list': [
    { id: 1, username: 'kenny', sex: 6 },
    { id: 2, username: 'kenny2', sex: 7 }
  ],
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body
    if (password === '88888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: 'adkeofkjdljoeijflj',
        data: { id: 1, username: 'kenny', sex: 6 }
      })
    } else {
      return res.send({ status: 'error', code: 403 })
    }
  },
  '/DELETE /api/user/:id': (req, res) => {
    console.log('--->', req.body)
    console.log('--->', req.params.id)
    res.send({ status: 'ok', message: '删除成功' })
  }
}
module.exports = proxy
