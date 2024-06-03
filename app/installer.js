const installer = {
    crerateOrders : ()=>{
        Query =`INSERT INTO "order" ("reference", "id_customer","state") VALUES ('RXFERM',1, 1); `;
    }
    
}
module.exports = installer;