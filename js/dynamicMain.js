

function dynamicMain(mainFloor) {
  // 获取图片的内容
  // let mainFloor_01_data = mainFloor.mainFloor_01_data
  // let html = ''
  // for (let i = 0; i < mainFloor_01_data.length; i++) {
  //   html += `<div class="floor_01">
  //   <div>${mainFloor_01_data[i].title}</div>
  //   <div>${mainFloor_01_data[i].main}</div>
  //   <div><img src="${mainFloor_01_data[i].url}" alt=""></div>
  // </div>`
  // }
  // console.log(html)
  // $('.floor_00_img').html(html)




  // 获取第一层的内容特殊的内容let mainFloor_01_data = mainFloor.mainFloor_01_data
  let mainFloor_01_i_data = mainFloor.mainFloor_01_i_data
  if (mainFloor_01_i_data && mainFloor_01_i_data.length) {
    let html_i = ''
    for (let i = 0; i < mainFloor_01_i_data.length; i++) {
      html_i += `<div class="floor_01_i">
      <div>${mainFloor_01_i_data[i].title}</div>
      <div></div>
      <div>${mainFloor_01_i_data[i].main}</div>
      <div><img src="${mainFloor_01_i_data[i].url}" alt=""></div>
    </div>`
    }
    // console.log(html_i)
    $('.mainFloor_01_i').html(html_i)
  }


  // 获取第一层的内容
  let mainFloor_01_data = mainFloor.mainFloor_01_data
  if (mainFloor_01_data) {
    let html = ''
    for (let i = 0; i < mainFloor_01_data.length; i++) {
      html += `<div class="floor_01">
      <div>${mainFloor_01_data[i].title}</div>
      <div>${mainFloor_01_data[i].main}</div>
      <div><img src="${mainFloor_01_data[i].url}" alt=""></div>
    </div>`
    }
    // console.log(html)
    $('.mainFloor_01').html(html)
  }

  // 获取第二层的内容
  let mainFloor_02_data = mainFloor.mainFloor_02_data
  if (mainFloor_02_data) {
    let html = `<div class="floor_02">
    <div>${mainFloor_02_data.title}</div>
    <div></div>
    <div>  `
    for (let i = 0; i < mainFloor_02_data.children.length; i++) {
      html += `<div>
      <div><img src="${mainFloor_02_data.children[i].url}" alt=""></div>
      <div>${mainFloor_02_data.children[i].title}</div>
      <div>${mainFloor_02_data.children[i].main}</div>
    </div>`
    }
    html += `</div>  </div>`
    // console.log(html)
    $('.mainFloor_02').html(html)
  }

  // 获取第三层的内容
  let mainFloor_03_data = mainFloor.mainFloor_03_data
  if (mainFloor_03_data) {
    let html = `<div class="floor_03">
    <div>${mainFloor_03_data.title}</div>
    <div></div>
    <div>  `
    for (let i = 0; i < mainFloor_03_data.children.length; i++) {
      html += `<div>
      <div><img src="${mainFloor_03_data.children[i].url}" alt=""></div>
      <div>${mainFloor_03_data.children[i].title}</div>
      <div>${mainFloor_03_data.children[i].main}</div>
    </div>`
    }
    html += `</div></div>`
    // console.log(html)
    $('.mainFloor_03').html(html)
  }

  // 获取第四层的内容
  let mainFloor_04_data = mainFloor.mainFloor_04_data
  if (mainFloor_04_data) {
    let html = `<div class="floor_04">
    <div>${mainFloor_04_data.title}</div>
    <div></div><div> `
    for (let i = 0; i < mainFloor_04_data.children.length; i++) {
      html += `<div>
      <div><img src="${mainFloor_04_data.children[i].url}" alt=""></div>
      <div>${mainFloor_04_data.children[i].title}</div>
      <div>${mainFloor_04_data.children[i].main}</div>
    </div>
    <div></div>`
    }
    html += ` </div></div>`
    // console.log(html)
    $('.mainFloor_04').html(html)
  }






}


dynamicMain(mainFloor)