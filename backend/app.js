const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");
const myConnection = require("express-myconnection");
const app = express();


const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3000",
          credentials: true,
        },
      ],
    },
  },
};

app.use(cors(config.application.cors.server));

// rutas backend
const empresaRoutes = require('./routes/empresa');
const areas_trabajoRoutes = require('./routes/areas_trabajo');
const clientesRoutes = require('./routes/clientes');
const empleadosRoutes = require('./routes/empleados');
const formapagoRoutes = require('./routes/formapago');
const productoRoutes = require('./routes/producto');
const proveedorRoutes = require('./routes/proveedor');
const sucursalesRoutes = require('./routes/sucursales');
const tipoproductoRoutes = require('./routes/tipoproducto');
const tipousuarioRoutes = require('./routes/tipousuario');
const usuarioRoutes = require('./routes/usuario');

app.set("port", process.env.PORT || 3000);
 
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "Sbashy05!",
      port: 3306,
      database: "ventas",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");

app.use(bodyParser.json());

//Rutas Frontend
app.use('/api/empresa', empresaRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/areastrabajo', areas_trabajoRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/tipousuario', tipousuarioRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/tipoproducto', tipoproductoRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get("port"), () => {
  console.log("PUERTO 3000");
});
