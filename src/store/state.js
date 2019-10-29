const state = {
  acountID: 0,
  authSetting_userinfo: false,
  typeList: [],
  userInfo: '',
  loginConfig: {},
  form_id: '',
  department: '',
  position: '',
  name: '',
  creat_flag: false,
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmNodWFuZ2hlaHVpLmNvbVwvYXBpXC9sb2dpblwvYWRtaW4iLCJpYXQiOjE1NjUwNzYxNDcsImV4cCI6MTU3NTQ0NDE0NywibmJmIjoxNTY1MDc2MTQ3LCJqdGkiOiJlZk5pSWx4TjZ3Q0E1bGFKIiwic3ViIjoyODEsInBydiI6ImEwNWNhMTk5ZWNhOGJmZDQ1ZTE1NzMwNWI1NmZiM2QwZTE5NjFjNTgifQ.2P4cout8FMx0icqyqboSyxTEFYtPk4g47dS80t6l3iU',
  tabBarList: [
    {
      text: '我的链接',
      iconPath: '/static/tabs/home.png',
      selectedIconPath: '/static/tabs/home-active.png',
      selected: true
    },
    {
      text: '收款记录',
      iconPath: '/static/tabs/history.png',
      selectedIconPath: '/static/tabs/history-active.png',
      selected: false
    },
    {
      text: '固定支付',
      iconPath: '/static/tabs/money.png',
      selectedIconPath: '/static/tabs/money-active.png',
      selected: false
    },
    {
      text: '班级考勤',
      iconPath: '/static/tabs/kao.png',
      selectedIconPath: '/static/tabs/kao-active.png',
      selected: false
    }
  ]
}

export default state
