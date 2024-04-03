const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT producto.num_prod, producto.idempresa, producto.idsuc,producto.idtpprod, empresa.nombre AS nombre_empresa, sucursales.sucursal,tipoproducto.tipo, producto.idtpprod, producto.descripcion, producto.presentacion, producto.marca, producto.valor, producto.precioventa, producto.existencia, producto.fecha_ingreso, producto.fecha_actualiza, producto.estado
    FROM producto
    INNER JOIN sucursales ON producto.idsuc = sucursales.idsuc
    INNER JOIN empresa ON producto.idempresa = empresa.idempresa
    INNER JOIN tipoproducto ON producto.idtpprod = tipoproducto.idtpprod;`,
      (err, producto) => {
        if (err) {
          res.json(err);
        }
        res.json(producto);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { num_prod } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from producto where num_prod=?",
      [num_prod],
      (err, producto) => {
        res.json(producto[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into producto set?", [data], (err, producto) => {
      res.json(producto);
    });
  });
};

controller.update = (req, res) => {
  const { num_prod } = req.params;
  const nuevoProducto = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update producto set ? where num_prod =?",
      [nuevoProducto, num_prod],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { num_prod } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from producto where num_prod =?",
      [num_prod],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
