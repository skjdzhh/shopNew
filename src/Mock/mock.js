import Mock from 'mockjs'
import data from  './data.json'
Mock.mock('http://www.weichuang.com/getList',{
        "name|2":"sunxiaoxiao",
        "age|2-10":4
    }
)

