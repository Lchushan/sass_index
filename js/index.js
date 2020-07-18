var index = {
  scrollBar: function (val) {
    let top = $('.main').offset().top
    console.log(top)
    console.log(val)
    console.log(val.length)
    if (val == '首页') {
      console.log('首页')
      document.documentElement.scrollTop = 0;
    }
    if (val == '电商直播') {
      console.log('电商直播')
      // console.log($('.subtitle_02').offset().top)
      document.documentElement.scrollTop = $('.subtitle_02').offset().top - top;
    }
    if (val == '种草电商') {
      // console.log('种草电商')
      // console.log($('.subtitle_03').offset().top)
      document.documentElement.scrollTop = $('.subtitle_03').offset().top - top;
    }
    if (val == '电商功能') {
      // console.log('电商功能')
      // console.log($('.subtitle_04').offset().top)
      document.documentElement.scrollTop = $('.subtitle_04').offset().top - top;
    }
    if (val == '开发动态') {
      // console.log('开发动态')
      // console.log($('.subtitle_05').offset().top)
      document.documentElement.scrollTop = $('.subtitle_06').offset().top - top;
    }
    if (val == '联系我们') {
      // console.log('联系我们')
      // console.log($('.subtitle_06').offset().top)
      document.documentElement.scrollTop = $('.subtitle_07').offset().top - top;
    }
  },
  init: function () {
    // console.log(1111111)
    $(".header_right").on("click", '.active', function () {
      // console.log($(this).index())
      // 自动移动到相对应的内容
      index.scrollBar($(this).text().trim())
      // index.scrollBar($(this).index())
    })

    $(".nav_index").on("click", '.active', function () {
      // 自动移动到相对应的内容
      index.scrollBar($(this).text().trim())

    })
  }
}