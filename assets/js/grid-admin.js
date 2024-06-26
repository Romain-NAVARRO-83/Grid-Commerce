const gridToggler = document.querySelectorAll('.modalToggler');
const modal = document.querySelector(".modal")
gridToggler.forEach((toggler) => {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.toggle('active');
    })
});

// Orders

// Add product line to shipping board
const lineSenders = document.querySelectorAll('#orderShipping table button');
const shipmentBoard = document.querySelector('#orderShipping form table tbody');
lineSenders.forEach((lineSender) => {
    lineSender.addEventListener('click',() => {
        const myId = lineSender.parentElement.parentElement.querySelector('td:first-child').textContent;
        const myReference = lineSender.parentElement.parentElement.querySelector('td:nth-child(2)').textContent;
        const myLeftOver = parseInt(lineSender.parentElement.parentElement.querySelector('td:nth-child(5)').textContent);
        const myQty = parseInt(lineSender.parentElement.parentElement.querySelector('input').value);
        const shipmentLine = document.createElement('tr');
        shipmentLine.innerHTML = `<td>${myReference}<input name="id"type="hidden" value="${myId}"></td> <td>${myQty} <input name="id"type="hidden" value="${myQty}"></td><td><i class="fa fa-remove"></i></td>`;
        // disabling line if no leftover
        shipmentBoard.appendChild(shipmentLine);
        console.log(myLeftOver + " " + myQty);
        if (myLeftOver === myQty){
            lineSender.parentElement.parentElement.classList.add('done');
            lineSender.setAttribute("disabled", "disabled");
            lineSender.classList.remove('valid');
        }
        // console.log(myQty);

    })
});

// Get order details
const togglers = document.querySelectorAll('body.orders main > section > table button');
togglers.forEach((toggler) => {
    toggler.addEventListener('click',async () => {
        const orderId = toggler.getAttribute('data-orderId');
        fetch(`/api/orders/${orderId}`)
        .then(async response => {
            // handle the response
            const foundOrder = await response.json();
            console.log(foundOrder)
        })
        .catch(error => {
            // handle the error
        });
    });

})

