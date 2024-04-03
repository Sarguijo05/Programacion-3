const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT usuario.userid, usuario.idempresa, usuario.idsuc, usuario.idtpusuario, usuario.idemp, usuario.usuario, usuario.clave, usuario.tipo, usuario.estado, empresa.nombre AS nombre_empresa, sucursales.sucursal,empleados.nombres,tipousuario.tipo
    FROM usuario
    INNER JOIN sucursales ON usuario.idsuc = sucursales.idsuc
    INNER JOIN empresa ON usuario.idempresa = empresa.idempresa
    INNER JOIN tipousuario ON usuario.idtpusuario = tipousuario.idtpusuario
    INNER JOIN empleados ON usuario.idemp = empleados.idemp;`,
      (err, usuarios) => {
        if (err) {
          res.json(err);
        }
        res.json(usuarios);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { userid } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "select * from usuario where userid=?",
      [userid],
      (err, usuario) => {
        res.json(usuario[0]);
      }
    );
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into usuario set?", [data], (err, usuario) => {
      res.json(usuario);
    });
  });
};

controller.update = (req, res) => {
  const { userid } = req.params;
  const nuevoUsuario = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update usuario set ? where userid =?",
      [nuevoUsuario, userid],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { userid } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from usuario where userid =?", [userid], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;
