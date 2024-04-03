const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT clientes.num_clie, clientes.idempresa, clientes.idsuc, empresa.nombre AS nombre_empresa, sucursales.sucursal, clientes.identidad, clientes.rtn, clientes.fecha_nac, clientes.nombre, clientes.telefono, clientes.direccion, clientes.correo, clientes.fecha_creacion, clientes.estado
    FROM clientes
    INNER JOIN sucursales ON clientes.idsuc = sucursales.idsuc
    INNER JOIN empresa ON clientes.idempresa = empresa.idempresa;`,
      (err, clientes) => {
        if (err) {
          res.json(err);
        }
        res.json(clientes);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { num_clie } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from clientes where num_clie=?",
      [num_clie],
      (err, clientes) => {
        res.json(clientes[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into clientes set?", [data], (err, clientes) => {
      res.json(clientes);
    });
  });
};

controller.update = (req, res) => {
  const { num_clie } = req.params;
  const nuevoCliente = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update clientes set ? where num_clie =?",
      [nuevoCliente, num_clie],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { num_clie } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from clientes where num_clie =?",
      [num_clie],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
