// function submitData() {
//     let xhr = XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//                 alert(xhr.responseText);
//             } else {
//                 alert("Request was unsuccessful: " + xhr.status);
//             }
//         }
//     };

//     xhr.open("post", "postexample.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     let form = document.getElementsById("user-info"); 
//     xhr.send(serialize(form));//serialize 为外部方法
// }

let xhr = new XMLHttpRequest();
xhr.onload = function(event) {
  if ((xhr.status >= 200 && xhr.status < 300) ||
      xhr.status == 304) {
    alert(xhr.responseText);
  } else {
    alert("Request was unsuccessful: " + xhr.status);
  }
};
xhr.onprogress = function(event) {
  let divStatus = document.getElementById("status");
  if (event.lengthComputable) {
    divStatus.innerHTML = "Received " + event.position + " of " +
      event.totalSize +
" bytes";
  }
};

xhr.open("get", "www.baidu.com", true);
xhr.send(null);