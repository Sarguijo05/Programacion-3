const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT areas_trabajo.idarea, areas_trabajo.idempresa,areas_trabajo.idsuc,empresa.nombre, sucursales.sucursal, areas_trabajo.area, areas_trabajo.fecha_creacion, areas_trabajo.estado, empresa.nombre AS nombre_empresa
    FROM areas_trabajo
    INNER JOIN sucursales ON areas_trabajo.idsuc = sucursales.idsuc
    INNER JOIN empresa ON areas_trabajo.idempresa = empresa.idempresa`,
      (err, areas_trabajo) => {
        if (err) {
          res.json(err);
        }
        res.json(areas_trabajo);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idarea } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from areas_trabajo where idarea=?",
      [idarea],
      (err, area_trabajo) => {
        res.json(area_trabajo[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "insert into areas_trabajo set?",
      [data],
      (err, area_trabajo) => {
        res.json(area_trabajo);
      }
    );
  });
};

controller.update = (req, res) => {
  const { idarea } = req.params;
  const nuevaAreaTrabajo = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update areas_trabajo set ? where idarea =?",
      [nuevaAreaTrabajo, idarea],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idarea } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from areas_trabajo where idarea =?",
      [idarea],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
