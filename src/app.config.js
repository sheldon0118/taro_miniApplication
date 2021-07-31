export default {
  pages: [
    'pages/index/index',
    'pages/userCenter/userCenter'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'gray',
    selectedColor:'gold',
    backgroundColor:'#eee',
    borderStyle:'white',
    position:'bottom',
    list:[
      {
        pagePath:'pages/index/index',
        text:'仓库',
        iconPath:'',
        selectedIconPath:''
      },
      {
        pagePath:'pages/userCenter/userCenter',
        text:'我的',
        iconPath:'',
        selectedIconPath:''
      }
    ]
  }
}
