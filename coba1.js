function displayBarang(){
    const barang_barang = JSON.parse(localStorage.getItem('barang_barang'))

    let list = ``

    if (barang_barang) {
        for (let i = 0; i < barang_barang.length; i++) {
            list += `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li
                        class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        
                        <div class="form-check">
                            <input class="form-check-input me-0" onchange="SetComplete(checked, id)" type="checkbox" value="" id="${barang_barang[i].id}"
                                aria-label="..." ${barang_barang[i].checked ? 'checked': ''} />
                        </div>
                    </li>
        
                    <li
                        class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                            <p class="lead fw-normal mb-0">${barang_barang[i].name}</p>
                    </li>
        
                    <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                        <button type="button" class="btn btn-danger" id=${barang_barang[i].id} onclick="deleteBarang(id)">Delete</button>
                    </li>
                </ul>
          
            `

        }
    }
    document.getElementById('list-barang').innerHTML = list
}


function submitBarang() {
    const barang = document.getElementById('add-barang').value

    let barang_barang = JSON.parse(localStorage.getItem('barang_barang'))

    if (barang_barang) {
        barang_barang.push({
            id: barang_barang[barang_barang.length-1].id + 1,
            name: barang,
            checked: false
        })
    }else{
        barang_barang = [{
            id: 0,
            name: barang,
            checked: false
        }]
    }
    localStorage.setItem('barang_barang', JSON.stringify(barang_barang))

    document.getElementById('add-barang').value = ''

    displayBarang()
}

function SetComplete(checked, id) {
    let barang_barang = JSON.parse(localStorage.getItem('barang_barang'))
    console.log(barang_barang);
    barang_barang = barang_barang.map(el => {
        if (el.id === Number(id)) {
            el.checked = checked
        }
        return el
    })
    localStorage.setItem('barang_barang', JSON.stringify(barang_barang))

    displayBarang()
}

function deleteBarang(id) {
    let barang_barang =JSON.parse(localStorage.getItem('barang_barang'))

    barang_barang = barang_barang.filter(el => el.id !==Number(id))

    if (barang_barang.length) {
        localStorage.setItem('barang_barang', JSON.stringify(barang_barang))
    }else{
        localStorage.removeItem('barang_barang')
    }
    displayBarang()
}

