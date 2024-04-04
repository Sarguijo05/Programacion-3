export interface User {
  ctipou?: number;
  descripcion?: string;
  estado?: string;
}

export interface empresa {
  idempresa?: number | null;
  nombre?: string | null;
  direccion?: string | null;
  rtn?: string | null;
  telefono?: string | null;
  correo?: string | null;
  contacto?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

export interface sucursales {
  idsuc?: number | null;
  idempresa?: number | null;
  sucursal?: string | null;
  dirsuc?: string | null;
  telefono?: string | null;
  estado?: string;
}

export interface proveedor {
  idprov?: number | null;
  idempresa?: number | null;
  proveedor?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  responsable?: string | null;
  fecha_creacion?: Date | null;
  observaciones?: string | null;
  estado?: string;
}

export interface areas_trabajo {
  idarea?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  area?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

export interface empleados {
  idemp?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idarea?: number | null;
  identidad?: string | null;
  fecha_nac?: Date | null;
  nombres?: string | null;
  apellidos?: string | null;
  genero?: string | null;
  estado_civil?: string | null;
  direccion?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

export interface tipousuario {
  idtpusuario?: number | null;
  idempresa?: number | null;
  tipo?: string | null;
  estado?: string | undefined;
}

export interface usuario {
  userid?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idtpusuario?: number | null;
  idemp?: number | null;
  usuario?: string | null;
  clave?: string | null;
  tipo?: string | null;
  estado?: string;
}

export interface clientes {
  num_clie?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  identidad?: string | null;
  rtn?: string | null;
  fecha_nac?: Date | null;
  nombre?: string | null;
  telefono?: string | null;
  direccion?: string | null;
  correo?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

export interface tipoproducto {
  idtpprod?: number | null;
  idempresa?: number | null;
  tipo?: string | null;
  estado?: string;
}

export interface producto {
  num_prod?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idtpprod?: number | null;
  descripcion: string | undefined;
  presentacion?: string | null;
  marca?: string | null;
  valor?: number | null;
  precioventa?: number | null;
  existencia?: number | null;
  fecha_ingreso?: Date | null;
  fecha_actualiza?: Date | null;
  estado?: string;
}

export interface formapago {
  idfpago?: number | null;
  idempresa?: number | null;
  formapago?: string | null;
  estado?: string;
}
