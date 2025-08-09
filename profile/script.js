$(function () {
  // ハンバーガーメニュー
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".navi").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".navi").removeClass("active");
  });
});
// ハンバーガーメニューに変える　↑

//  hana.htmlの漫画のポップアップ↓

$(function () {
  const thumbnails = $(".thumbnail");
  const modal = $("#modal");
  const mask = $("#mask");
  const imgPopup = $("#imgPopup");
  const close = $("#close");
  const moveBtnLeft = $("#moveBtn_Left");
  const moveBtnRight = $("#moveBtn_Right");

  let currentImageIndex = 0;

  // ページ読み込み時に矢印は隠す
  moveBtnLeft.css({ visibility: 'hidden', opacity: 0 });
  moveBtnRight.css({ visibility: 'hidden', opacity: 0 });

  thumbnails.on("click", function () {
    currentImageIndex = thumbnails.index(this);
    showModal(currentImageIndex);
  });

  function showModal(index) {
    currentImageIndex = index;

    imgPopup.attr("src", "");
    setTimeout(() => {
      imgPopup.attr("src", thumbnails.eq(currentImageIndex).attr("src"));
    }, 50);

    modal.css({ visibility: "visible", opacity: 1 });
    mask.css({ visibility: "visible", opacity: 0.7 });

    if (currentImageIndex === 0) {
      moveBtnLeft.css({ visibility: "hidden", opacity: 0 });
    } else {
      moveBtnLeft.css({ visibility: "visible", opacity: 1 });
    }

    if (currentImageIndex === thumbnails.length - 1) {
      moveBtnRight.css({ visibility: "hidden", opacity: 0 });
    } else {
      moveBtnRight.css({ visibility: "visible", opacity: 1 });
    }
  }

close.on("click", function () {
  // 矢印はすぐに非表示（visibility: hidden）
  moveBtnLeft.css({ visibility: 'hidden', opacity: 0 });
  moveBtnRight.css({ visibility: 'hidden', opacity: 0 });

  // モーダルとマスクはフェードアウト（opacity: 0）
  modal.css("opacity", 0);
  mask.css("opacity", 0);

  // 0.5秒後にvisibility:hiddenを付ける（モーダルとマスクだけ）
  setTimeout(() => {
    modal.css("visibility", "hidden");
    mask.css("visibility", "hidden");
    imgPopup.attr("src", "");
  }, 100);
});


  mask.on("click", function () {
    close.trigger("click");
  });

  moveBtnLeft.on("click", function () {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      showModal(currentImageIndex);
    }
  });

  moveBtnRight.on("click", function () {
    if (currentImageIndex < thumbnails.length - 1) {
      currentImageIndex++;
      showModal(currentImageIndex);
    }
  });
});

//  hana.htmlの漫画のポップアップ↑


// 華のトリミング画像　↓
// 華のトリミング画像ランダム表示
//ボタンクリックで呼び出される関数
function hana_trimming(){

  let data;
  let img_data;

  //ランダムで数字を生成して変数に格納
  data = Math.random();

  console.log(data);

  //値に対応したおみくじ画像を表示
  if (data >= 0.8) {
    img_data = "img/hana/photo2.png";
  } else if (data >= 0.6) {
    img_data = "img/hana/photo3.png";
  } else if (data >= 0.4) {
    img_data = "img/hana/photo4.png";
  } else if (data >= 0.2) {
    img_data = "img/hana/photo5.png";
  } else {
    img_data = "img/hana/photo6.png";
  }
  document.getElementById("hana_trimming_img").src= img_data;

}


// 華のトリミング画像　↑