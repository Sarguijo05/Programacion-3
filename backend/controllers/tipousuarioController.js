const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT tipousuario.idtpusuario, tipousuario.idempresa, empresa.nombre AS nombre_empresa, tipousuario.tipo, tipousuario.estado
    FROM tipousuario
    INNER JOIN empresa ON tipousuario.idempresa = empresa.idempresa;`,
      (err, tipousuario) => {
        if (err) {
          res.json(err);
        }
        res.json(tipousuario);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idtpusuario } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from tipousuario where idtpusuario=?",
      [idtpusuario],
      (err, area_trabajo) => {
        res.json(area_trabajo[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into tipousuario set?", [data], (err, area_trabajo) => {
      res.json(area_trabajo);
    });
  });
};

controller.update = (req, res) => {
  const { idtpusuario } = req.params;
  const nuevoTipoUsario = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update tipousuario set ? where idtpusuario =?",
      [nuevoTipoUsario, idtpusuario],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idtpusuario } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "delete from tipousuario where idtpusuario =?",
      [idtpusuario],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
