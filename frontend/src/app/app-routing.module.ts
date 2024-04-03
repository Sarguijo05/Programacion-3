import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaEditComponent} from './components/empresa-edit/empresa-edit.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AreasTrabajoComponent } from './components/areas-trabajo/areas-trabajo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormapagoComponent } from './components/formapago/formapago.component';
import { NavegacionComponent} from './components/navegacion/navegacion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TipousuarioComponent } from './components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { TipoproductoComponent } from './components/tipoproducto/tipoproducto.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AreaTrabadoEditComponent } from './components/area-trabado-edit/area-trabado-edit.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { FormapagoEditComponent } from './components/formapago-edit/formapago-edit.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { TipousuarioEditComponent } from './components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { TipoproductoEditComponent } from './components/tipoproducto-edit/tipoproducto-edit.component';
import { ProveedorEditComponent } from './components/proveedor-edit/proveedor-edit.component';
import { SucursalesEditComponent } from './components/sucursales-edit/sucursales-edit.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';

const routes: Routes = [
  {
    path: 'navegacion',
    component:NavegacionComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
  },
  {
    path: 'empresa/edit/:id',
    component :EmpresaEditComponent
  },
  {
    path:'sucursales',
    component:SucursalesComponent
  },
  {
    path:'sucursales/edit/:id',
    component:SucursalesEditComponent
  },
  {
    path:'proveedor',
    component:ProveedorComponent
  },
  {
    path:'proveedor/edit/:id',
    component:ProveedorEditComponent
  },
  {
    path:'areastrabajo',
    component:AreasTrabajoComponent
  },
  {
    path:'areastrabajo/edit/:id',
    component:AreaTrabadoEditComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'clientes/edit/:id',
    component:ClientesEditComponent
  },
  {
    path:'formapago',
    component:FormapagoComponent
  },
  {
    path:'formapago/edit/:id',
    component:FormapagoEditComponent
  },
  {
    path:'producto',
    component:ProductoComponent
  },
  {
    path:'producto/edit/:id',
    component:ProductoEditComponent
  },
  {
    path:'tipousuario',
    component:TipousuarioComponent
  },
  {
    path:'tipousuario/edit/:id',
    component:TipousuarioEditComponent
  },
  {
    path:'usuario',
    component:UsuarioComponent
  },
  {
    path:'usuario/edit/:id',
    component:UsuarioEditComponent
  },
  {
    path:'tipoproducto',
    component:TipoproductoComponent
  },
  {
    path:'tipoproducto/edit/:id',
    component:TipoproductoEditComponent
  },
  {
    path:'empleados',
    component:EmpleadosComponent
  },
  {
    path:'empleados/edit/:id',
    component:EmpleadosEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
