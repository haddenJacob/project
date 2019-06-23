const baseurl = 'http://localhost:8080/mine'
const locationurlpath = 'http://localhost:63342/HbuilderProject/VueDemo/face/pages/admin/'
const loginurl = baseurl + '/admin/login.do'
//提交user数据地址
const userurl = baseurl + '/user/user_in.do'
//提交脸部数据地址
const faceurl = baseurl + '/face/face_in.do'
//识别请求地址
const findfaceurl = baseurl + '/identity/find_face.do'
//存储识别成功的用户数据地址
const insertfaceuserurl = baseurl + '/identity/insert_face_user.do'
//用户所有数据
const userallurl = baseurl + '/user/user_all.do?page=1&limit=5'
//管理用户编辑数据
const userediturl = baseurl + '/user/user_up.do'
//管理用户删除数据
const userdeleteurl = baseurl + '/user/user_del.do'
//管理用户条件查询
const usersearchurl = baseurl + '/user/user_sel.do'


//管理用户识别成功后状态数据获取
const userfindallinfaceurl = baseurl + '/identity/find_allface.do'
//管理用户识别成功后状态数据搜索
const searchinfaceurl = baseurl + '/identity/find_searchface.do'

//device所有设备模块数据
const deviceallurl = baseurl + '/device/find_device_all.do'