// Nimble Alert
function nanoAlert(type = "default", message = "No message provided") {
    console.log(type + " " + message);
    const container = document.querySelector('#alert');
    const alert = document.createElement("div");
    alert.classList.add(type);
    alert.innerHTML = message;
    container.appendChild(alert);
}
// nanoAlert('valid','message');

const gridToggler = document.querySelectorAll('.modalToggler');
// Only 1 modal per page !!
const modal = document.querySelector(".modal");

gridToggler.forEach((toggler) => {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.toggle('active');
    })
});

// Orders



// Get order details
const togglers = document.querySelectorAll('body.orders main > section > table button');
togglers.forEach((toggler) => {
    toggler.addEventListener('click', async () => {
        const orderId = toggler.getAttribute('data-orderId');
        fetch(`/api/orders/${orderId}`)
            .then(async response => {
                // handle the response
                const foundOrder = await response.json();
                constructOrderDetailsForm(foundOrder);
            })
            .catch(error => {
                // handle the error
            });
    });

})

function constructOrderDetailsForm(order) {
    document.querySelector("#orderDetail tbody").innerHTML = '';
    console.log("Detail : " + order.orderDetail);
    document.querySelector(".customeremail").innerHTML = order.customer.email;
    document.querySelector(".customeremail").href = `mailto:${order.customer.email}`;
    // Order content
    order.orderDetail.forEach((line) => {
        console.log(line);
        const tableLine = document.createElement('tr');
        document.querySelector("#orderDetail tbody").innerHTML += `<td>${line.product.reference}</td><td>${line.product.name}</td><td>${line.quantity}</td><td>${line.quantity * line.unit_price}</td>`;
    });
    document.querySelector("#orderModal h2").innerHTML = `Order #${order.reference}`;
    document.querySelector("#orderModal h3").innerHTML = `${order.customer.first_name} ${order.customer.last_name}`;


    let lineSenders = document.querySelectorAll('.lineSender');
    // Prepare board
    function createPrepareBoard(){
        const table = document.querySelector('#prepareBoard tbody');
        // table.innerHTML += `<tr><td></td></tr>`
        order.orderDetail.forEach((line) => {
            const sent= 1;
            const leftover = line.quantity - sent;
            let toBeSent = 0
            if(line.product.stock >= leftover){
                 toBeSent = leftover;
            }else{
                 toBeSent = line.product.stock
            }
            table.innerHTML += `<tr id="prepareLine${line.product.id}">
                <td>${line.product.id}</td>
                <td>${line.product.reference}</td>
                <td>${line.quantity}</td>
                <td class="sent">${sent}</td>
                <td class="leftover">${leftover}</td>
                <td class="stock">${line.product.stock}</td>
                <td class="toBeSent"><input type="number" value="${toBeSent}"><button class="lineSender" data-idProduct = "${line.product.id}"><i class="fas fa-box-open"></i></button></td>
            </tr>`
        });
        lineSenders = document.querySelectorAll('.lineSender');
        console.log(lineSenders)
    }
    createPrepareBoard();
    // Shipping board
    document.querySelector('#shipmentBoard input[name="orderId"]').value = order.id;
// Add product line to shipping board

console.log(lineSenders);
const shipmentBoard = document.querySelector('#orderShipping form > div');
lineSenders.forEach((lineSender) => {
    lineSender.addEventListener('click', () => {
        const myId = parseInt(lineSender.getAttribute('data-idProduct'));
        console.log(myId);
        const myLine = lineSender.parentElement.parentElement;
        console.log(myLine);
        const myReference = myLine.querySelector('td:nth-child(2)').textContent;
        console.log(myReference);
        const mySent = parseInt(myLine.querySelector('td.sent').textContent);
        const myLeftOver = parseInt(myLine.querySelector('td:nth-child(5)').textContent);
        console.log(myLeftOver);
        const myStock = parseInt(myLine.querySelector('td:nth-child(5)').textContent);
        console.log(myStock);
        const myQty = parseInt(myLine.querySelector('input').value);
        console.log(myQty);
        const shipmentLine = document.createElement('div');
        shipmentLine.classList.add('animate__bounceIn', 'slate');
        shipmentLine.innerHTML = `<span class="l8">${myReference}<input name="productIds" type="hidden" value="${myId}"></span> <span class="l3">${myQty} <input name="productQtys" type="hidden" value="${myQty}"></span><span class="l1"><i class="fa fa-remove"></i></span>`;
        document.querySelector('#shipmentBoard form > div').appendChild(shipmentLine);
        updatePrepareLine(myId, myQty, mySent, myLeftOver, myStock);


    });
    function updatePrepareLine(idProduct, quantity, sent, leftOver, stock){
        const line = document.querySelector(`#prepareLine${idProduct}`);
        // console.log("tt" + line);
        // update sent
        
        line.querySelector('.lineSender').setAttribute("disabled", "disabled");
        line.querySelector('input').setAttribute("disabled", "disabled");
        setTimeout(()=>{
            line.querySelector('.sent').innerHTML = `${sent} <span class="animate__bounceIn" >=> ${sent + quantity}</span>`;
            line.querySelector('.leftover').innerHTML = `${leftOver} <span class="animate__bounceIn" >=> ${leftOver - quantity}</span>`;
            line.querySelector('.stock').innerHTML = `${stock} <span class="animate__bounceIn" >=> ${stock - quantity}</span>`;
        },500);
        

    }
});
    // Previous shipments
    const previousShipmentsList = document.querySelector('#shipmentsList');
    previousShipmentsList.innerHTML = '';
    // if (order.shipments.length() > 0) {
    //     previousShipmentsList.innerHTML = '<li>No shipment yet</li>';
    // } else {
    //     previousShipmentsList.innerHTML = '';
    // }
    order.shipments.forEach((shipment) => {
        previousShipmentsList.innerHTML += `<li>${shipment.date_creation}</li>`;
    });


}

// Send shipment
const shipForm = document.querySelector('form[action="/api/sendShipment"]');
if (shipForm){
    shipForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const myOrderId = document.querySelector('#shipmentBoard input[name="orderId"]').value;
        modal.classList.toggle('active');
    
        const data = new FormData(shipForm);
        // console.log(data.orderId);
        let bodyString = "";
        for (const [name, value] of data) {
            bodyString += `${name}=${value}&`
        }
        // const orderId = toggler.getAttribute('data-orderId');
        fetch(`/api/sendShipment`, {
            method: "POST",
    
            // whatever data you want to post with a key-value pair
    
            body: bodyString,
            headers:
            {
                "Content-Type": "application/x-www-form-urlencoded"
            }
    
        })
            .then(async response => {
                // handle the response
    
    
    
                const message = await response;
                nanoAlert("valid", `Shipment created for order id ${myOrderId}`);
    
                console.log(response);
    
            })
            .catch(error => {
                // handle the error
            });
    });
    
}


