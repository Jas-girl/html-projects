let inputvalue = document.getElementById("inputvalue");
       
        let btn = document.getElementById("btn");
        let list = document.getElementById("list");
        btn.addEventListener('click', () => {
            if (inputvalue.value == "") {
                console.log("Add something to the list")
                alert("Add something to the list");
            }
            else {
                let item = document.createElement("li");
                let span = document.createElement('span');
                item.textContent = inputvalue.value;
                list.appendChild(item);
                item.appendChild(span);
                span.innerHTML = " &#10006";
                span.addEventListener('click', () => {
                list.removeChild(item);
            })
            }
            
            inputvalue.value = "";
        })