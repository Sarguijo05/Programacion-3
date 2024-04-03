const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      "SELECT proveedor.idprov, proveedor.idempresa, empresa.nombre, proveedor.proveedor, proveedor.direccion, proveedor.telefono, proveedor.responsable, proveedor.fecha_creacion, proveedor.observaciones, proveedor.estado FROM proveedor INNER JOIN empresa ON proveedor.idempresa = empresa.idempresa;",
      (err, proveedores) => {
        if (err) {
          res.json(err);
        }
        res.json(proveedores);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idprov } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from proveedor where idprov=?",
      [idprov],
      (err, proveedor) => {
        res.json(proveedor[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into proveedor set?", [data], (err, proveedor) => {
      res.json(proveedor);
    });
  });
};

controller.update = (req, res) => {
  const { idprov } = req.params;
  const nuevoProveedor = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update proveedor set ? where idprov =?",
      [nuevoProveedor, idprov],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idprov } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from proveedor where idprov =?",
      [idprov],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
