const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query("select sucursales.idsuc,sucursales.idempresa,empresa.nombre,sucursales.sucursal,sucursales.dirsuc,sucursales.telefono,sucursales.estado from sucursales inner join empresa on sucursales.idempresa=empresa.idempresa", (err, sucursales) => {
      if (err) {
        res.json(err);
      }
      res.json(sucursales);
    });
  });
};

controller.edit = (req, res) => {
  const { idsuc } = req.params;
  req.getConnection((err, conn) => {
    conn.query("select * from sucursales where idsuc=?", [idsuc], (err, sucursal) => {
      res.json(sucursal[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into sucursales set?", [data], (err, sucursal) => {
      res.json(sucursal);
    });
  });
};

controller.update = (req, res) => {
  const { idsuc } = req.params;
  const nuevaSucursal = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update sucursales set ? where idsuc =?",
      [nuevaSucursal, idsuc],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idsuc } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from sucursales where idsuc =?", [idsuc], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;
