
$(document).ready(function () {
    const url = 'https://digimon-api.vercel.app/api/digimon'
    fetch(url)
        .then(response => response.json())
        .then(nombre => {
            const list = $('#namesList')
            let namesList = ''
            for (let index = 0; index < nombre.length; index++) {
                const user = nombre[index];
                namesList = namesList + `<li class="list-group-item list-group-item-info" style="text-align:center; font-size: larger;">${user.name}</li> `
            }
            list.append(namesList)
        })

    function mostrarResultadoBusqueda(data) {
        let resultados = '';
        if (data.length > 0) {
            data.forEach(function (digimon) {
                resultados += `
                <tr>
                    <td class="align-middle"><b>${digimon.name}</b></td>
                    <td style="text-align:center;"><img src="${digimon.img}" style="width:50%;" class="img-fluid"></td>
                    <td class="align-middle"><b>${digimon.level}</b></td>
                </tr>


                <div class="card" style="width: 18rem;">
                                <img src="${digimon.img}" class="img-fluid"  alt="...">
                                <div class="card-body">
                                    <h5 class="${digimon.name}">${digimon.name}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                 `;
            })
            $('#monster').html(resultados);
        }
    }

    $('#formulario').submit(function (event) {
        event.preventDefault();
        const nombreDigimon = $('#buscador').val();
        $.getJSON(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`)
            .done(function (data) {
                mostrarResultadoBusqueda(data);
            })
            .fail(function () {
                alert('Por favor revise el nombre ingresado');
            });
    })
    $('#reload').click(function () {
        location.reload();
    })
})
