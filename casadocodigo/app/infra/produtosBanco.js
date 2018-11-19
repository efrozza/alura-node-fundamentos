module.exports = () => {
  return connection => {
    this.lista = callback => {
      connection.query('select * from livros', callback);
    };
    console.log(this);
    return this;
  };
};
