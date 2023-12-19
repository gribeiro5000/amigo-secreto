const Convidado = require("../Models/convidado.js");
const usuarioRepositorio = require("../Repositorio/usuarioRepositorio.js");
const grupoRepositorio = require("../Repositorio/grupoRepositorio.js");
const Api404Error = require("../Error_Handler/Api404Error.js");
const Api500Error = require("../Error_Handler/Api500Error.js");

class ConvidadoRepositorio {
  getAll() {
    const response = Convidado.findAll()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Api500Error(error);
      });
    return response;
  }

  get(id) {
    const response = Convidado.findOne({
      where: {
        id: id,
      },
    })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Api500Error(error);
      });
    return response;
  }

  insert(data) {
    const response = Convidado.create({
      UsuarioId: data.UsuarioId,
      GrupoId: data.GrupoId,
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error.message);
        throw new Api500Error(error);
      });
    return response;
  }

  update(data, id) {
    const response = Convidado.update(data, {
      where: {
        id: id,
      },
    })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Api500Error(error);
      });
    return response;
  }

  delete(id) {
    const response = Convidado.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return "Convidado deletado com sucesso";
      })
      .catch((error) => {
        throw new Api500Error(error);
      });
    return response;
  }
}

module.exports = new ConvidadoRepositorio();
