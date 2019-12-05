export class Comprobante {
    /**
     * Número de la factura asociada.
     */
    numeroDeFactura: number;

    /**
     * Total a pagar.
     */
    totalDePago: number;

    /**
    * Porcentaje de impuestos sobre la compra.
    */
    impuestos: number;

    /**
    * Fecha de pago de los dispositivos.
    */
   fechaDeFactura: string;

    /**
     * Número de tarjeta con la cual se realizó el pago.
     */
    numeroDeTarjeta: number;
}