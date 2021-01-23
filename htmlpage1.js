var close = document.getElementsByClassName("close");

        var i;
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('done');
            }
        }, false);//写出对勾

        function newElement() {
            var li = document.createElement("li");
            var inputValue = document.getElementById("input").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
                alert("输入内容不能为空");
            } else {
                document.getElementById("todo").appendChild(li);
            }
            document.getElementById("input").value = "";

            var span1 = document.createElement("SPAN");

            var txt1 = document.createTextNode("\u00D7");

            span1.className = "close";

            span1.appendChild(txt1);

            li.appendChild(span1);

           

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }//删除操作
            }

        }//添加新项目
