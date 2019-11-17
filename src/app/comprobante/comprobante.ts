export class Comprobante {
    /**
     * Número de la factura asociada.
     */
    numeroDeFactura: number;

    /**
     * Total a pagar.
     */
    totalPago: number;

    /**
    * Porcentaje de impuestos sobre la compra.
    */
    impuestos: number;

    /**
    * Fecha de pago de los dispositivos.
    */
    fechaDePago: string;

    /**
     * Número de tarjeta con la cual se realizó el pago.
     */
    numeroTarjeta: number;
}