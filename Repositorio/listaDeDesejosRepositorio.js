const ListaDeDesejos = require('../Models/listaDeDesejos.js');
const Api500Error = require('../Error_Handler/Api500Error.js');

class ListaDeDesejosRepositorio {
  getAll() {
    const response = ListaDeDesejos.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Api500Error(err);
      });
    return response;
  }

  get(id) {
    const response = ListaDeDesejos.findOne({
      where: {
        id: id,
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Api500Error(err);
      });
    return response;
  }

  insert(data) {
    const response = ListaDeDesejos.create({
      nome: data.nome,
      precoEstimado: data.precoEstimado,
      UsuarioId: data.UsuarioId,
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Api500Error(err);
      });
    return response;
  }

  update(data, id) {
    const response = ListaDeDesejos.update(data, {
      where: {
        id: id,
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Api500Error(err);
      });
    return response;
  }

  delete(id) {
    const response = ListaDeDesejos.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Api500Error(err);
      });
    return response;
  }
}

module.exports = new ListaDeDesejosRepositorio();
