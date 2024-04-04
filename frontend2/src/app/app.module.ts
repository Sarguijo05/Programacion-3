import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AreasTrabajoComponent } from './components/areas-trabajo/areas-trabajo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TipousuarioComponent } from './components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormapagoComponent } from './components/formapago/formapago.component';
import { TipoproductoComponent } from './components/tipoproducto/tipoproducto.component';
import { EmpresaEditComponent } from './components/empresa-edit/empresa-edit.component';
import { AreaTrabadoEditComponent } from './components/area-trabado-edit/area-trabado-edit.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
import { FormapagoEditComponent } from './components/formapago-edit/formapago-edit.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProveedorEditComponent } from './components/proveedor-edit/proveedor-edit.component';
import { SucursalesEditComponent } from './components/sucursales-edit/sucursales-edit.component';
import { TipoproductoEditComponent } from './components/tipoproducto-edit/tipoproducto-edit.component';
import { TipousuarioEditComponent } from './components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FilterempresaPipe } from './pipes/filterempresa.pipe';
import { FiltersucursalesPipe } from './pipes/filtersucursales.pipe';
import { FilterproveedorPipe } from './pipes/filterproveedor.pipe';
import { FilterareasPipe } from './pipes/filterareas.pipe';
import { FilterempleadosPipe } from './pipes/filterempleados.pipe';
import { FiltertipousuarioPipe } from './pipes/filtertipousuario.pipe';
import { FilterusuarioPipe } from './pipes/filterusuario.pipe';
import { FilterclientesPipe } from './pipes/filterclientes.pipe';
import { FiltertipoproductoPipe } from './pipes/filtertipoproducto.pipe';
import { FilterproductoPipe } from './pipes/filterproducto.pipe';
import { FilterformapagoPipe } from './pipes/filterformapago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    SucursalesComponent,
    ProveedorComponent,
    AreasTrabajoComponent,
    EmpleadosComponent,
    TipousuarioComponent,
    UsuarioComponent,
    ClientesComponent,
    ProductoComponent,
    FormapagoComponent,
    TipoproductoComponent,
    EmpresaEditComponent,
    AreaTrabadoEditComponent,
    ClientesEditComponent,
    EmpleadosEditComponent,
    FormapagoEditComponent,
    ProductoEditComponent,
    ProveedorEditComponent,
    SucursalesEditComponent,
    TipoproductoEditComponent,
    TipousuarioEditComponent,
    UsuarioEditComponent,
    NavegacionComponent,
    FilterempresaPipe,
    FiltersucursalesPipe,
    FilterproveedorPipe,
    FilterareasPipe,
    FilterempleadosPipe,
    FiltertipousuarioPipe,
    FilterusuarioPipe,
    FilterclientesPipe,
    FiltertipoproductoPipe,
    FilterproductoPipe,
    FilterformapagoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
