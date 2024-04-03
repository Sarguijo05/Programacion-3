const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT empleados.idemp, empleados.idempresa, empleados.idsuc, empleados.idarea, empleados.identidad, empleados.fecha_nac, empleados.nombres, empleados.apellidos, empleados.genero, empleados.estado_civil, empleados.direccion, empleados.fecha_creacion, empleados.estado, empresa.nombre AS nombre_empresa, sucursales.sucursal, areas_trabajo.area
      FROM empleados
      INNER JOIN sucursales ON empleados.idsuc = sucursales.idsuc
      INNER JOIN empresa ON empleados.idempresa = empresa.idempresa
      INNER JOIN areas_trabajo ON empleados.idarea = areas_trabajo.idarea`,
      (err, empleados) => {
        if (err) {
          res.json(err);
        }
        res.json(empleados);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idemp } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from empleados where idemp=?",
      [idemp],
      (err, empleado) => {
        res.json(empleado[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into empleados set?", [data], (err, empleado) => {
      res.json(empleado);
    });
  });
};

controller.update = (req, res) => {
  const { idemp } = req.params;
  const nuevoEmpleado = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update empleados set ? where idemp =?",
      [nuevoEmpleado, idemp],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idemp } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from empleados where idemp =?", [idemp], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;
