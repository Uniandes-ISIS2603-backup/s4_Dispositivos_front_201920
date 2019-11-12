import {Cliente} from "./cliente"
import {Factura} from "../factura/factura"
import {Comprobante} from "../Comprobante/comprobante"

export class ClienteDetail extends Cliente{    
    /**
     * Atributo que modela las facturas.
     */
facturas: Factura[];
    /**
     * Atributo que modela los comprobantes de pago.
     */
comprobantes: Comprobante[];
  
}