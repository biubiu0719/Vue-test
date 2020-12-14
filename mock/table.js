import Mock from 'mockjs'

const data = Mock.mock({  // 模拟数据生成，遵循Mock语法规范
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/message/prompt',
    type: 'post',
    response: config => {
      let re = {
        nums: 3
      }
      console.log('/message/prompt', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/hhh/add',
    type: 'post',
    response: config => {
      let re = {
        status:2000
      }
      console.log('/hhh/add', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/message/new',
    type: 'post',
    response: config => {
      let re = {
        total: 9,
        list: [
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "呵呵哒",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "呵呵哒",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
        ]
      }
      console.log('/message/new', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/message/all',
    type: 'post',
    response: config => {
      let re = {
        total: 3,
        list: [
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
          {
            message: "有一个新的采购订单需要入库",
            sender: "唐兴民",
            sendTime: "Thu Jun 04 15:32:43 CST 2020",
            trackNum: "SF2020213A231"
          },
        ]
      }
      console.log('/message/all', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/auth/login',
    type: 'post',
    response: config => {
      let re = {
        accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaW1vbiBzaiIsImlhdCI6MTU4OTk4MTQyNiwiZXhwIjoxNTkwNTg2MjI2fQ.iTA4gF22IXMxdvm1poAEAdver3FXVyz7Ai2TnogNbawYzbWREbUkyJ0GpTZSM0BFyKPVr_Ugw28ueYg_uZNedQ",
        tokenType: "Bearer",
        currentAuthority: "USER"
      }
      console.log('/auth/login', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/user/info',
    type: 'post',
    response: config => {
      let type
      if (config.body.username == "ZiyueFan") type = "仓管"
      else if (config.body.username == "18341006") type = "销售"
      else if (config.body.username == "YiZeng") type = "项目组"
      else type = "采购"
      let re = {
        userId: 1,
        nickName: "张三",
        userType: type,
        email: "123456@qq.com"
      };
      console.log('/user/info', config.body, 'POST', re)
      return re;
    }
  },
  {
    url: '/user/info1',
    type: 'post',
    response: config => {
      let type
      if (config.body.username == "ZiyueFan") type = "仓管"
      else if (config.body.username == "18341006") type = "销售"
      else if (config.body.username == "YiZeng") type = "项目组"
      else type = "采购"
      let re = {
        userId: 1,
        nickName: "张三",
        userType: type,
        email: "123456@qq.com"
      };
      console.log('/user/info', config.body, 'POST', re)
      return re;
    }
  },
  {
    url: '/storage/registration',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/storage/registration', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/rma/submit',
    type: 'post',
    response: config => {
      let re = {
        result: "/rma/submit",
        status: 2000
      }
      console.log('/rma/submit', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/tool/modelList',
    type: 'post',
    response: config => {
      let re = {
        nums: 22,
        modelList: [
          {
            model: "UCAM120",
            spec: ["20MW", "样机"]
          },
          {
            model: "TD1001",
            spec: ["20MW", "样机"]
          },
          {
            model: "TD1001W",
            spec: ["20MW", "样机"]
          },
          {
            model: "TD2000B",
            spec: ["20MW", "样机"]
          },
          {
            model: "TD2000",
            spec: ['80MW', '160MW', '20MW-N', '20MW-NE', '20MW-STD', '样机']
          },
          {
            model: "TD1501",
            spec: ['TD1601-L1(A01AB1)', 'TD1601-L1(A01CB1)', 'TD1501-L1(A01CC2)', 'TD1501-L1(A01AE2)', 'TD1501-L1(A01AD2)', 'TD1501-L1(A01AC2)', '样机']
          },
          {
            model: "TD1601",
            spec: ['TD1601-L1(A01AB1)', 'TD1601-L1(A01CB1)', '样机']
          },
          {
            model: "TD1500",
            spec: ['TD1600-800', 'TD1600-200']
          },
          {
            model: "BS1100",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "BS2300",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "BS2310",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "BS2500",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "BS3D+",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "BS3D Live",
            spec: ['2.5', '2.0', '2.9', '3.8', '3.0', '5.6']
          },
          {
            model: "NVS920",
            spec: ['2.0']
          },
          {
            model: "TD990",
            spec: ['样机']
          },
          {
            model: "监控支架",
            spec: ['12cm', '20-40cm']
          },
          {
            model: "3D嵌入支架通用款",
            spec: ['TD-MT-RC-2']
          },
          {
            model: "3D嵌入支架老款",
            spec: ['TD-MT-RC-2']
          },
          {
            model: "2D支架老款",
            spec: ['TD-MT-RC-1']
          },
          {
            model: "平贴支架老款",
            spec: ['TD-SM-13']
          },
          {
            model: "平贴支架通用款",
            spec: ['TD-SM-13']
          }
        ]
      }
      console.log('/tool/modelList', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/storage/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 2,
        list: [
          {
            recordId: 3,		   				//不显示给用户
            userId: 5,      					//采购账号的用户id
            userName: "张三",      			//采购账号的用户名
            storageId:"R20200813001SJ",  		//入库单号
            opType:"采购",		   				//操作类型
            num: 2,			   				//设备数量
            time:"2020-07-08 06:38:07",   	//采购单日期
            orderType:"订单号",  				//单号类型
            orderNumber:"1000010",  			//采购单号
            remark:"带员工识别和加密",			//备注（仓管和采购页面都要显示）
            state: "等待处理",   				//订单状态
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                warehouse:"广州仓",			//入库仓库（广州仓、上海仓）
                state:"新机",					//设备状态（新机、二手）
                nums:  2
              },
              {
                model: "TD2000",
                spec:  "5MP",
                warehouse:"广州仓",			//入库仓库（广州仓、上海仓）
                state:"新机",					//设备状态（新机、二手）
                nums:  3
              }
            ]
          },
          {
            recordId: 4,
            purchaserId: 5,
            num: 2,
            state: "等待处理",
            warehouse: "广州",	   //所属仓库
            time: "2020-07-08 06:38:07",   //采购单日期
            orderNumber: "1000010",  		//采购单号
            model: "TD2000",      			//设备型号
            remark: "test2"
          }
        ]
      }
      console.log('/storage/listSj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/storage/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/storage/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/storage/confirm',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/storage/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/storage/resubmit',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 2000
      }
      console.log('/storage/rusubmit', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/form',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/form', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/replace',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/replace', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/check',
    type: 'post',
    response: config => {
      let re = {
        total: 2,
        list: [
          {
            recordId: 38,								// 不用显示，只是为了在修改数据的时候，保持传输数据的格式一致
            type: "销售",								// 订单类型(不用显示，只是为了在修改数据的时候，保持传输数据的格式一致)
            sn: "SN202019000502",						// 设备序列号
            customer: "张国胜",						// 客户名称
            project: "共建和谐社会",					// 项目名称
            orderNumType: "合同号",					// 单号类型
            orderNumber: "10000001",					// 销售单号
            guarantee: "三年",						// 客户维保年限
            approvalNum: "10000001",					// 审批单号
            addressee: "李兴邦",						// 收件人
            address: "北京市东城区景山前街4号",		// 收件地址
            model: "HD8100",							// 领用设备型号
            spec: "E4-2",								// 规格
            num: 2,									// 领用数量
            customerCompany: "故宫",					// 客户所属公司
            remark: "领料测试"						//备注
          },
          {
            recordId: 38,								// 不用显示，只是为了在修改数据的时候，保持传输数据的格式一致
            type: "销售",								// 订单类型(不用显示，只是为了在修改数据的时候，保持传输数据的格式一致)
            sn: "SN202019000502",						// 设备序列号
            customer: "张国胜",						// 客户名称
            project: "共建和谐社会",					// 项目名称
            orderNumType: "合同号",					// 单号类型
            orderNumber: "10000001",					// 销售单号
            guarantee: "三年",						// 客户维保年限
            approvalNum: "10000001",					// 审批单号
            addressee: "李兴邦",						// 收件人
            address: "北京市东城区景山前街4号",		// 收件地址
            model: "HD8100",							// 领用设备型号
            spec: "E4-2",								// 规格
            num: 2,									// 领用数量
            customerCompany: "故宫",					// 客户所属公司
            remark: "领料测试"						//备注
          }
        ]
      }
      console.log('/picking/check', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/modify',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/modify', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/lock', config.body, 'POST', re)
      // return { re, code: 403 }
      return re
    }
  },
  {
    url: '/picking/confirm',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 4,
        list: [
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "sj",	// 客户所属公司
            trackNum: 2020213891230919, //快递单号	
            state: "等待处理",			// 订单状态
            userId: 10,           // 领料账号
            SnListJson: [
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000605"
              },
              {
                sn: "SN202019000606"
              }
            ],
            ActualList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "1"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "4"
              }
            ],
            DemandList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "2"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "3"
              }
            ]
          },
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "td",	// 客户所属公司
            trackNum: null, //快递单号	
            state: "订单异常",			// 订单状态
            userId: 10,           // 领料账号
          },
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "故宫",	// 客户所属公司
            trackNum: 2020213891230919, //快递单号	
            state: "等待发货",			// 订单状态
            userId: 10,           // 领料账号
          },
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "故宫",	// 客户所属公司
            trackNum: null, //快递单号	
            state: "发货成功",			// 订单状态
            userId: 10,           // 领料账号
          },
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "故宫",	// 客户所属公司
            trackNum: null, //快递单号	
            state: "等待处理",			// 订单状态
            userId: 10,           // 领料账号
          },
          {
            recordId: 1,				// 该订单的recordId，不显示给用户，只用于端口传递
            type: "坏件替换",				// 表单类型（销售、坏件替换）
            customer: "张国胜",		// 客户名称
            project: "共建和谐社会",	// 项目名称
            model: "HD8100",			// 设备型号
            spec: "E4-2",				// 规格
            num: 2,					// 订单领料数
            actualNum: 2,				// 实际发货数
            customerCompany: "故宫",	// 客户所属公司
            trackNum: null, //快递单号	
            state: "等待处理"			// 订单状态
          },
        ]
      }
      console.log('/picking/listSj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/endUp',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/endUp', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/picking/track',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/picking/track', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocPicking/form',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocPicking/form', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocPicking/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 1,
        list: [
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            userId: 10,					// POC领料账号Id
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            num: 8,						// 领用数量
            actualNum: 5,					// 实际发货数
            orderNumType: "POC",			// 单号类型
            pocNum: "POC219381",			// POC号
            approvalNum: "1231241",		// 审批单号
            customerCompany: "数据",		// 客户所属公司
            state: "等待处理",			// 订单状态
            trackNum: "2013912930913",	// 快递单号
            pocTime: "2020-07-16",		// POC结束时间
            remark: "备注",				// 备注
            SnListJson: [
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000605"
              },
              {
                sn: "SN202019000606"
              }
            ],
            ActualList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "1"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "4"
              }
            ],
            DemandList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "2"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "3"
              }
            ]
          },
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            userId: 10,					// POC领料账号Id
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            num: 8,						// 领用数量
            actualNum: 5,					// 实际发货数
            orderNumType: "POC",			// 单号类型
            pocNum: "POC219381",			// POC号
            approvalNum: "1231241",		// 审批单号
            customerCompany: "数据",		// 客户所属公司
            state: "等待处理",			// 订单状态
            trackNum: "2013912930913",	// 快递单号
            pocTime: "2020-07-16",		// POC结束时间
            remark: "备注",				// 备注
            SnListJson: [
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000605"
              },
              {
                sn: "SN202019000606"
              }
            ],
            ActualList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "1"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "4"
              }
            ],
            DemandList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "2"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "3"
              }
            ]
          },
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            model: "HD8100",				// 设备型号
            spec: "E4-2",					// 规格
            num: 2,						// 领料订单需要领料的数量
            actualNum: 2,				// 实际发货数
            customerCompany: "故宫",		// 客户所属公司
            state: "正在处理",			// 订单状态
            trackNum: null, //快递单号	
            pocTime: "2020-07-16"			// POC结束时间
          },
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            model: "HD8100",				// 设备型号
            spec: "E4-2",					// 规格
            num: 2,						// 领料订单需要领料的数量
            actualNum: 3,				// 实际发货数
            customerCompany: "故宫",		// 客户所属公司
            state: "处理成功",			// 订单状态
            trackNum: null, //快递单号	
            pocTime: "2020-07-16"			// POC结束时间
          },
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            model: "HD8100",				// 设备型号
            spec: "E4-2",					// 规格
            num: 2,						// 领料订单需要领料的数量
            actualNum: 4,				// 实际发货数
            customerCompany: "故宫",		// 客户所属公司
            state: "处理成功",			// 订单状态
            trackNum: 2020213891230919, //快递单号	
            pocTime: "2020-07-16"			// POC结束时间
          },
          {
            recordId: 1,					// PocPicking表的recordId，不显示给用户，只用于端口间的数据传递
            customer: "张国胜",			// 客户名称	
            project: "共建和谐社会",		// 项目名称
            model: "HD8100",				// 设备型号
            spec: "E4-2",					// 规格
            num: 2,						// 领料订单需要领料的数量
            actualNum: 5,				// 实际发货数
            customerCompany: "故宫",		// 客户所属公司
            state: "等待处理",			// 订单状态
            trackNum: null, //快递单号	
            pocTime: "2020-07-16"			// POC结束时间
          },
        ]
      }
      console.log('/pocPicking/listSj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocPicking/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocPicking/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocPicking/confirm',
    type: 'post',
    response: config => {
      let re = {
          result: true,
          status: 200
      }
      console.log('/pocPicking/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/poc/picking/track',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/poc/picking/track', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocReturn/check',
    type: 'post',
    response: config => {
      let re = {
        total: 2,
        list: [
          {
            recordId: 5,							//订单recordId
            sn: "SN202019000500",
            customer: "张国胜",					//客户名称
            project: "共建和谐社会",				//项目名称
            orderNumType: "POC",					//单号类型
            orderNumber: "102930112",				//POC号
            pocTime: "2020-07-16",				//POC结束时间
            guarantee: "2019-11-25",				//（原厂）维保时间  
            approvalNum: "12030193",				//审批单号
            addressee: "李兴邦",					//收件人
            address: "北京市东城区景山前街4号",	//收件地址
            model: "HD8100",						//设备型号
            spec: "E4-2",							//规格
            num: 2,
            customerCompany: "故宫",				//客户所属公司
            trackNum: null,						//快递单号
            actualNum: null,						//实际发货数
            remark: "POC领料测试"
          },
          {
            recordId: 5,							//订单recordId
            sn: "SN202019000501",
            customer: "张国胜",					//客户名称
            project: "共建和谐社会",				//项目名称
            orderNumType: "POC",					//单号类型
            orderNumber: "102930112",				//POC号
            pocTime: "2020-07-16",				//POC结束时间
            guarantee: "2019-11-25",				//（原厂）维保时间  
            approvalNum: "12030193",				//审批单号
            addressee: "李兴邦",					//收件人
            address: "北京市东城区景山前街4号",	//收件地址
            model: "HD8100",						//设备型号
            spec: "E4-2",							//规格
            num: 2,
            customerCompany: "故宫",				//客户所属公司
            trackNum: null,						//快递单号
            actualNum: null,						//实际发货数
            remark: "POC领料测试"
          },
        ]
      }
      console.log('/pocReturn/check', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocReturn/submit',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocReturn/submit', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocReturn/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocReturn/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocReturn/confirm',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocReturn/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocReturn/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 3,
        list: [
          {
            recordId: 49,				// PocReturn表的recordId，不显示给用户，只用于端口间的数据传递
            userId: 8,				// 创建订单的POC用户账号ID （不显示，只用于端口间的数据传递）
            num: 5,					// 返回的设备数量
            trackNum: "20202138912",	// 快递单号
            state: "处理成功",		// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 49,				// PocReturn表的recordId，不显示给用户，只用于端口间的数据传递
            userId: 8,				// 创建订单的POC用户账号ID （不显示，只用于端口间的数据传递）
            num: 5,					// 返回的设备数量
            trackNum: "20202138912",	// 快递单号
            state: "等待处理",		// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 49,				// PocReturn表的recordId，不显示给用户，只用于端口间的数据传递
            userId: 8,				// 创建订单的POC用户账号ID （不显示，只用于端口间的数据传递）
            num: 5,					// 返回的设备数量
            trackNum: "20202138912",	// 快递单号
            state: "正在处理",		// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          }
        ]
      }
      console.log('/pocReturn/listSj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/allocation/form',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/allocation/form', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/allocation/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/allocation/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/allocation/confirm',
    type: 'post',
    response: config => {
      let re = {
        result: "录入设备的型号规格数量与订单不符合",
        status: 5001,
        wrongList: "型号:TD2000 规格:20MW 调拨数量为 10, 录入数量为 8 ;  型号:TD2000 规格:80MW 调拨数量为 5, 录入数量为 4 ;"
      }
      console.log('/allocation/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/allocation/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 1,
        list: [
          {
            recordId: 71,						// 该订单的recordId，不显示给用户，只用于端口传递
            allocationId:"L20200813001SJ",  	// 调拨单号
            orderNum:"DB1293012213",			// 订单号
            num: 5,							// 设备数量
            warehouseOut:"广州仓",			// 出库仓库（广州仓、上海仓）
            warehouseIn:"上海仓",				// 入库仓库（广州仓、上海仓）
            state: "处理成功",				// 订单状态
            userId: 10,						// 项目组账号Id
            SnListJson: [
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000605"
              },
              {
                sn: "SN202019000606"
              }
            ],
            ActualList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "1"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "4"
              }
            ],
          },
          {
            recordId: 71,						// 该订单的recordId，不显示给用户，只用于端口传递
            allocationId:"L20200813001SJ",  	// 调拨单号
            orderNum:"DB1293012213",			// 订单号
            num: 5,							// 设备数量
            warehouseOut:"广州仓",			// 出库仓库（广州仓、上海仓）
            warehouseIn:"上海仓",				// 入库仓库（广州仓、上海仓）
            state: "等待处理",				// 订单状态
            userId: 10,						// 项目组账号Id
            SnListJson: [
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              },
              {
                sn: "SN202019000605"
              },
              {
                sn: "SN202019000606"
              }
            ],
            ActualList: [
              {
                model: "TD2000",
                spec: "8MP",
                nums: "1"
              },
              {
                model: "TD2000",
                spec: "5MP",
                nums: "4"
              }
            ],
          },
          {
            recordId: 71,						// 该订单的recordId，不显示给用户，只用于端口传递
            allocationId:"L20200813001SJ",  	// 调拨单号
            orderNum:"DB1293012213",			// 订单号
            num: 5,							// 设备数量
            warehouseOut:"广州仓",			// 出库仓库（广州仓、上海仓）
            warehouseIn:"上海仓",				// 入库仓库（广州仓、上海仓）
            state: "正在处理",				// 订单状态
            userId: 10,						// 项目组账号Id
          },
        ]
      }
      console.log('/allocation/listSj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocChange/changing',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 200
      }
      console.log('/pocChange/changing', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/pocChange/fuzzySearch',
    type: 'post',
    response: config => {
      let re = {
        total: 2,
        list: [
          {
            recordId: 5,							//订单recordId
            sn: "SN202019000500",
            customer: "张国胜",					//客户名称
            project: "共建和谐社会",				//项目名称
            orderNumType: "POC",					//单号类型
            orderNumber: "102930112",				//POC号
            pocTime: "2020-07-16",				//POC结束时间
            guarantee: "2019-11-25",				//（原厂）维保时间  
            approvalNum: "12030193",				//审批单号
            addressee: "李兴邦",					//收件人
            address: "北京市东城区景山前街4号",	//收件地址
            model: "HD8100",						//设备型号
            spec: "E4-2",							//规格
            num: 2,
            customerCompany: "故宫",				//客户所属公司
            trackNum: null,						//快递单号
            actualNum: null,						//实际发货数
            remark: "POC领料测试"
          },
          {
            recordId: 5,							//订单recordId
            sn: "SN202019000501",
            customer: "张国胜",					//客户名称
            project: "共建和谐社会",				//项目名称
            orderNumType: "POC",					//单号类型
            orderNumber: "102930112",				//POC号
            pocTime: "2020-07-16",				//POC结束时间
            guarantee: "2019-11-25",				//（原厂）维保时间  
            approvalNum: "12030193",				//审批单号
            addressee: "李兴邦",					//收件人
            address: "北京市东城区景山前街4号",	//收件地址
            model: "HD8100",						//设备型号
            spec: "E4-2",							//规格
            num: 2,
            customerCompany: "故宫",				//客户所属公司
            trackNum: null,						//快递单号
            actualNum: null,						//实际发货数
            remark: "POC领料测试"
          },
        ]
      }
      console.log('/pocChange/fuzzySearch', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/query/device',
    type: 'post',
    response: config => {
      let re = {
        total: 22,
        list: [
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000502",
            model: "TD2077",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
        ]
      }
      console.log('/query/device', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/query/sn',
    type: 'post',
    response: config => {
      let re = {
        total: 22,
        list: [
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {							
            sn: "SN202019000500",     // 序列号
            model: "TD2000",			// 型号
            spec: "20MW",				// 规格
            status:"在库",			// 状态
            company:"sj",				// 所属公司（英文要改成中文）
            warehouse: "广州仓"		// 所在场所
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000502",
            model: "TD2077",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
          {
            sn: "SN202019000501",
            model: "TD2000",
            spec: "20MW",
            status:"在库",
            company:"td",	
            warehouse: "上海仓"
          },
        ]
      }
      console.log('/query/sn', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/query/tableList',
    type: 'post',
    response: config => {
      let re = {
        total: 22,
        list: [
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000005",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              },
              {
                model: "TD2002",
                spec: "21MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              },
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200815SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000006",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200814SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-04 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-05 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
          {
            tableType: "采购",
            storageId:"R20200813SJ",
            time: "2020-11-06 12:41:12",
            orderType: "合同号",
            orderNumber: "10000001",
            supplier: "富士康",
            company:	"sj",
            status: "处理成功",
            remark:"测试",
            ActualList: [
              {
                model: "TD2000",
                spec: "20MW",
                warehouse: "广州仓",
                state: "新机",
                nums: 5
              }
            ]
          },
        ]
      }
      console.log('/query/tableList', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/inlinePicking/form',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        // status: 2000  // 这里有修改！！
      }
      if (config.body.num == 4) re.status = 5001;
      else if (config.body.num == 6) re.status = 5000;
      else re.status = 5001;
      console.log('/inlinePicking/form', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/inlinePicking/lock',
    type: 'post',
    response: config => {
      let re = {
        result: true,
        status: 2000  // 这里有修改！！
      }
      console.log('/inlinePicking/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/inlinePicking/confirm',
    type: 'post',
    response: config => {
      let re = {
        result:"录入设备的型号规格与订单不符合",
        status: 5001,
        wrongList: "型号:TD2000 规格:20MW 需求数量为 10, 录入数量为 8;型号:TD2000 规格:80MW 需求数量为 5, 录入数量为 4;"
      }
      console.log('/inlinePicking/confirm', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/inlinePicking/listSj',
    type: 'post',
    response: config => {
      let re = {
        total: 1,
        list: [
          {
            recordId: 1,				// 该领料单在领料表中的recordId，不显示给用户，只用于端口传递
            pickingId:"L20201017001SJ", // 内联领料单的领料单号
            userId: 10,				// 领料用户账号Id
            userName: "张三",			// 领料账号用户名
            company:"td",				// 物权变更的发起方 （显示”数据“或”天棣“）
            targetCompany:"sj",		// 物权变更的目的公司  （显示”数据“或”天棣“）
            warehouseOut:"广州仓",	// 出库仓库
            warehouseIn:"上海仓",		// 入库仓库 
            trackNum: "2020213A231", 	// 快递单号	
            num:"5",					// 设备总数量 
            remark:"领料测试2",        // 备注
            state:"订单异常",			// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,				// 该领料单在领料表中的recordId，不显示给用户，只用于端口传递
            pickingId:"L20201017001SJ", // 内联领料单的领料单号
            userId: 10,				// 领料用户账号Id
            userName: "张三",			// 领料账号用户名
            company:"td",				// 物权变更的发起方 （显示”数据“或”天棣“）
            targetCompany:"sj",		// 物权变更的目的公司  （显示”数据“或”天棣“）
            warehouseOut:"广州仓",	// 出库仓库
            warehouseIn:"上海仓",		// 入库仓库 
            trackNum: "2020213A231", 	// 快递单号	
            num:"5",					// 设备总数量 
            remark:"领料测试2",        // 备注
            state:"等待处理",			// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,				// 该领料单在领料表中的recordId，不显示给用户，只用于端口传递
            pickingId:"L20201017001SJ", // 内联领料单的领料单号
            userId: 10,				// 领料用户账号Id
            userName: "张三",			// 领料账号用户名
            company:"td",				// 物权变更的发起方 （显示”数据“或”天棣“）
            targetCompany:"sj",		// 物权变更的目的公司  （显示”数据“或”天棣“）
            warehouseOut:"广州仓",	// 出库仓库
            warehouseIn:"上海仓",		// 入库仓库 
            trackNum: "2020213A231", 	// 快递单号	
            num:"5",					// 设备总数量 
            remark:"领料测试2",        // 备注
            state:"正在处理",			// 订单状态
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
        ]
      }
      console.log('', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/query/inventorySj',
    type: 'post',
    response: config => {
      let re = {
        total: 14,
        list: [
          {
            model: "TD2000",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "在库"
          },
          {
            model: "TD2001",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "POC"
          },
          {
            model: "TD2002",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "销售"
          },
          {
            model: "TD2003",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "赠送"
          },
          {
            model: "TD2004",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "报废"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
          {
            model: "TD2005",
            spec: "20MV",
            nums: 15,
            warehouse: "广州仓",
            state: "维修"
          },
        ]
      }
      console.log('/query/inventorySj', config.body, 'POST', re)
      return re
    }
  },
  {
    url: '/query/pickingListSj',
    type: 'post',
    response: config => {
      let re = {
        total: 12,
        list: [
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-07",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000605"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2001",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
          {
            recordId: 1,					// 该订单的recordId，不显示给用户，只用于端口传递
            type: "销售",					// 操作类型
            pickingId:"L20200813001TD",  	// 系统单号
            sendDate: "2020-11-03",		// 发货日期
            orderType: "合同号",			// 单号类型
            orderNumber: "956468464",		// 销售单号
            customer: "张某某",			// 客户名称
            project: "某某计划",			// 项目名称
            customerCompany: "某某公司",	// 客户所属公司
            trackNum:"2020213891230919", 	// 快递单号
            addressee:"某某某",			// 收件人
            address:"某市某区某街道",		// 收件地址
            contact:"15935481235",		// 联系方式
            guaranteeBegin:"2020-11-03",	// 维保起始
            guaranteeEnd:"2021-11-03",	// 维保结束
            state: "处理成功",			// 订单状态
            remark:"666",					// 备注
            SnListJson: [		
              {
                sn: "SN202019000600"		//SN号
              },
              {
                sn: "SN202019000601"		//SN号
              },
              {
                sn: "SN202019000602"		//SN号
              },
              {
                sn: "SN202019000603"		//SN号
              },
              {
                sn: "SN202019000604"
              }
            ],
            ActualList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "1"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ],
            DemandList: [		
              {
                model: "TD2000",
                spec:  "8MP",
                nums:  "2"
              },
              {
                model: "TD2000",
                spec:  "5MP",
                nums:  "3"
              }
            ]
          },
        ]
      }
      console.log('/query/pickingListSj', config.body, 'POST', re)
      return re
    }
  },
  {
      url:'/rma/search',
      type:'post',
      response: config => {
        let re = {
          total: 17,
          list: [
            {							
              sn: "202120010561",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'',
              state:"二手在库",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000501",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'2',
              state:"POC",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000502",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'3',
              state:"在库",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000503",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'4',
              state:"销售",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000504",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'上海七宝城',
              orderNumType:'test',
              state:"POC",
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000505",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'上海七宝城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              imei:'',
            },
            {							
              sn: "202019000506",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'上海七宝城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000507",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'上海七宝城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000508",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              state:"待处理",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000509",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000510",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              state:"待处理",
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000511",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000512",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000513",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202019000514",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202120010515",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
            {							
              sn: "202120010516",     // 序列号
              orderType:'POC',
              customer:'biubiu',
              project:'深圳宝龙城',
              orderNumType:'test',
              orderNumber:'12121212',
              guaranteeStart:'2020/1/1',
              guaranteeEnd:'2020/1/1',
              approvalNum:'9999',
              addressee:'biu',
              address:'中山大学',
              contact:'8888',
              model: "TD2000",			// 型号
              spec: "20MW",				// 规格
              status:"在库",			// 状态
              company:"sj",				// 所属公司（英文要改成中文）
              warehouse: "广州仓",		// 所在场所
              remark:'测试',
              pick:'',
            },
          ],
          PocCountList: 	// 返回关联项目有POC备件的设备统计信息
          [
                  {
                    model: "TD2000",
                    spec:  "20MW",
                    nums:  "1"
                  },
                  {
                    model: "TD2000",
                    spec:  "80MW",
                    nums:  "2"
                  }
                ],
          PeojectList:					
              [
                {
                  relatedProject: "上海七宝城",
                  nums: 1,
                  total:5,
                  DeviceList:
                    [
                      {
                        sn: "202020020006",
                        model: "TD2000",
                        spec:  "20MW",
                        customer: "万达",						
                        project: "上海七宝城",					
                        pocNumber: "POC9213821",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "闪电鞭！",
                        pick:""
                      },
                      {
                        sn: "202020020007",
                        model: "TD2000",
                        spec:  "20MW",
                        customer: "万达",						
                        project: "上海七宝城",					
                        pocNumber: "POC9213821",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "闪电鞭！",
                        pick:""
                      },
                      {
                        sn: "202020020008",
                        model: "TD2000",
                        spec:  "20MW",
                        customer: "万达",						
                        project: "上海七宝城",					
                        pocNumber: "POC9213899",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "年轻人，耗子尾汁!",
                        pick:""
                      },
                      {
                        sn: "202020020012",
                        model: "TD2000",
                        spec:  "20MW",
                        customer: "万达",						
                        project: "上海七宝城",					
                        pocNumber: "POC9213899",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "年轻人，耗子尾汁!",
                        pick:""
                      },
                      {
                        sn: "202020020013",
                        model: "TD2000",
                        spec:  "20MW",
                        customer: "万达",						
                        project: "上海七宝城",					
                        pocNumber: "POC9213899",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "年轻人，耗子尾汁!",
                        pick:""
                      },
                    ]
                },
                {
                  relatedProject: "深圳宝龙城",
                  nums: 2,
                  total:3,
                  DeviceList:
                    [
                      {
                        sn: "202030020009",
                        model: "TD2000",
                        spec:  "80MW",
                        customer: "万达",						
                        project: "深圳宝龙城",					
                        pocNumber: "POC92131235",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "接化发",
                        pick:""
                      },
                      {
                        sn: "202030020010",
                        model: "TD2000",
                        spec:  "80MW",
                        customer: "万达",						
                        project: "深圳宝龙城",					
                        pocNumber: "POC92131235",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "接化发",
                        pick:""
                      },
                      {
                        sn: "202030020011",
                        model: "TD2000",
                        spec:  "80MW",
                        customer: "万达",						
                        project: "深圳宝龙城",					
                        pocNumber: "POC92131235",
                        pocTime:  "2021-02-13",
                        trackNumber: "SF0192831U0O",
                        remarks:  "接化发",
                        pick:""
                      }
                    ]
                }
            
              ]
          
        }
        console.log('/rma/search', config.body, 'POST', re)
        return re
      }
  },
  {
    url:'/rma/list',
    type:'post',
    response: config => {
      let re = {
        total: 11,
        list: [
                {				
                  recordId :137,				    // 订单的recordId，不显示给用户，只在系统内部使用
                  RMAID:"RMA2012031203SJ",
                  type:	"返厂维修",				// RMA类型	
                  company: "数据",				// 客户所属公司(数据、天棣)
                  RMAtime: "2020-11-19",		// RMA发出日期
                  trackNumber: "SF1231123",		// 快递单号
                  state: "处理成功",
                  remarks: "测试数据",			// 备注
                  SnListJson: 
                      [		
                        {
                          sn: "SN202019000600",		// SN号
                          model: "TD2000",			// 设备型号
                          spec:  "20MW",			// 规格
                          right: "上海七宝宝龙城",	// 物权
                          project: "宝龙城项目",	// 返回项目
                          symptom:"插电没反应"		// 症状
                        },
                        {
                          sn: "SN202019000601",		// SN号
                          model: "TD2000",			// 设备型号
                          spec:  "20MW",			// 规格
                          right: "上海七宝宝龙城",	// 物权
                          project: "宝龙城项目",	// 返回项目
                          symptom:"插电没反应"		// 症状
                        },
                        {
                          sn: "SN202019000602",		// SN号
                          model: "TD2000",			// 设备型号
                          spec:  "20MW",			// 规格
                          right: "上海七宝宝龙城",	// 物权
                          project: "宝龙城项目",	// 返回项目
                          symptom:"插电没反应"		// 症状
                        },
                        {
                          sn: "SN202019000603",		// SN号
                          model: "TD2000",			// 设备型号
                          spec:  "20MW",			// 规格
                          right: "上海七宝宝龙城",	// 物权
                          project: "宝龙城项目",	// 返回项目
                          symptom:"插电没反应"		// 症状
                        },
                        {
                          sn: "SN202019000604",		// SN号
                          model: "TD2000",			// 设备型号
                          spec:  "20MW",			// 规格
                          right: "上海七宝宝龙城",	// 物权
                          project: "宝龙城项目",	// 返回项目
                          symptom:"插电没反应"		// 症状
                        }
                      ]
        },
        {
            recordId :138,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"返回仓库",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "等待处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :139,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "等待处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :140,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "正在处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :141,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "正在处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :142,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "正在处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :143,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "正在处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },

          {
            recordId :144,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "正在处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :145,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "等待处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :146,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "等待处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },
          {
            recordId :147,
            RMAID: "RMA2012031203SJ",     // RMA单号
            right: "上海七宝宝龙城",		// 物权
            type:	"报废申请",				// RMA类型	
            company: "数据",				// 客户所属公司(数据、天棣)
            project: "宝龙城项目",		// 返回项目
            RMAtime: "2020-11-19",		// RMA发出日期
            trackNumber: "SF1231123",		// 快递单号
            state: "等待处理",
            remarks: "测试数据",			// 备注
            SnListJson: 
            [		
              {
                sn: "SN202019000600",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000601",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000602",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000603",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              },
              {
                sn: "SN202019000604",		// SN号
                model: "TD2000",			// 设备型号
                spec:  "20MW",			// 规格
                symptom:"插电没反应"		// 症状
              }
              ],


          },

        ],
      }
      console.log('/rma/list', config.body, 'POST', re)
      return re
    }
  },
  {
    url:'/rma/lock',
    type:'post',
    response: config => {
      let re = {
        status:2000,
        result:"锁定成功"
      }
      console.log('/rma/lock', config.body, 'POST', re)
      return re
    }
  },
  {
    url:'/rma/confirm',
    type:'post',
    response: config => {
      let re = {
        status:2000,
        result:"提交成功"
      }
      console.log('/rma/confirm', config.body, 'POST', re)
      return re
    }
  }

  // {
  //   url: '',
  //   type: 'post',
  //   response: config => {
  //     let re = {

  //     }
  //     console.log('', config.body, 'POST', re)
  //     return re
  //   }
  // },
  // {
  //   url: '',
  //   type: 'post',
  //   response: config => {
  //     let re = {

  //     }
  //     console.log('', config.body, 'POST', re)
  //     return re
  //   }
  // },
]