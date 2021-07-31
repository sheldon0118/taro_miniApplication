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
        iconPath:'assets/global/emotion-normal-line.png',
        selectedIconPath:'assets/global/emotion-laugh-line.png'
      },
      {
        pagePath:'pages/userCenter/userCenter',
        text:'我的',
        iconPath:'assets/global/emotion-unhappy-line.png',
        selectedIconPath:'assets/global/emotion-happy-line.png'
      }
    ]
  }
}
