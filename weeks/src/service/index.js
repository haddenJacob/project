import * as userService from './user'
import * as stationService from './station'
import * as carinfoService from './carinfo'
//模拟接口
import * as testService from './test'

let api={
	user:userService,
	station:stationService,
	carinfo:carinfoService,
	test:testService,
}

export default api