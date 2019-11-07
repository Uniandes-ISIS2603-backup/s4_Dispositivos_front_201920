import {Cliente} from "./cliente"
import {Factura} from "../factura/factura"

export class ClienteDetail extends Cliente{    
    /**
     * Atributo que modela las facturas.
     */
  facturas: Factura[];
}