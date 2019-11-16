export default function wxRequest(url = '', dataObj = {}, type = 'get', header = {}) {
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: dataObj,
      method: type,
      header: header,
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      }
    })
  });
  return promise;
}