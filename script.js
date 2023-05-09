const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label,placeholder)
                    break

    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('div')
    el.setAttribute('class', 'form-group my-2')

    let input = document.createElement('input')
    input.setAttribute('class', 'form-control mt-2')
    input.setAttribute('placeholder', placeholder)
    input.setAttribute('title', placeholder)

    let lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('class', ' form-label mt-2')

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('class', 'btn btn-danger btn-sm mt-2')
    deleteBtn.addEventListener('click', function() {
        el.remove()
    })

    el.append(lbl)
    el.append(input)
    el.append(deleteBtn)

    document.querySelector("#elements").append(el) 
}


const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div")
    el.setAttribute("class", "my-2")
    let input = document.createElement("input")
    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "radio")
  
    let lbl = document.createElement("label")
    lbl.textContent = label;
    lbl.setAttribute('class', 'm-3')
  
    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete";
    delBtn.setAttribute('class', 'btn btn-danger btn-sm m-4')
    delBtn.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(input)
    el.appendChild(lbl)
    el.appendChild(delBtn)
  
    document.querySelector("#elements").appendChild(el);
  };
  
  const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div")

    el.setAttribute("class", "my-2");

    let input = document.createElement("input")

    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "button")
    input.setAttribute("value", label)
  
    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete";
    delBtn.setAttribute('class', 'btn btn-danger  m-3')
    delBtn.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(input);
    el.appendChild(delBtn);
  
    document.querySelector("#elements").appendChild(el);
  };
  