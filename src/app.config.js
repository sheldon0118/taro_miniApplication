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
    color:'#000',
    selectedColor:'#000',
    backgroundColor:'#fff',
    borderStyle:'black',
    position:'bottom',
    list:[
      {
        pagePath:'pages/index/index',
        text:'δ»εΊ',
        iconPath:'assets/global/emotion-normal-line.png',
        selectedIconPath:'assets/global/emotion-laugh-line.png'
      },
      {
        pagePath:'pages/userCenter/userCenter',
        text:'ζη',
        iconPath:'assets/global/emotion-unhappy-line.png',
        selectedIconPath:'assets/global/emotion-happy-line.png'
      }
    ]
  }
}
