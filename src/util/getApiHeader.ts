import jsSHA from 'jssha'

export const GetAuthorizationHeader = () => {
  const AppID = import.meta.env.VITE_APP_ID as string
  const AppKey = import.meta.env.VITE_APP_KEY as string

  const UTCString = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + UTCString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'

  return {
    Authorization: Authorization,
    'X-Date': UTCString
  }
  //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
