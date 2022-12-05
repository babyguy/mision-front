// buscar el modal y los botones
const modal = document.getElementById("modal");
const mostrar = document.getElementById("add-product");
const cerrar = document.getElementById("cerrar-modal");

// mostrar el modal cuando den click
mostrar.addEventListener("click", () => {
  modal.style = "top: 0";
});
// cerrar el modal cuando den click en x
cerrar.addEventListener("click", () => {
  modal.style = "top: -100vh";
});
let cont = 0;
insert = document.getElementById("insert-items");
let save = document.getElementById("guardar");
save.addEventListener("click", () => {
    cont+1  
 id = cont
 cont++
 imagen = document.getElementById("img-select");
 uid = document.getElementById("uid").value;
 referencia = document.getElementById("referencia").value;
 nombre = document.getElementById("nombre").value;
 categoria = document.getElementById("categoria").value;
 subcategoria = document.getElementById("subcategoria").value;


  if (
    uid != "" && referencia != "",
    nombre != "",
    categoria != "",
    subcategoria != ""
  ) {
    insert.innerHTML += `
          <tr class='c-${id}'>
           <td><input type="checkbox" name="" id="${id}" /></td>
           <td>${id}</td>
           <td>img1</td>
           <td>${uid}</td>
           <td>${referencia}</td>
           <td>${nombre}</td>
           <td>${categoria}</td>
           <td>${subcategoria}</td>
        </tr>`;
        modal.style = "top: -100vh";
  } else {
    alert("tiene campos vacios");
  }
});

eliminar = document.getElementById('eliminar')