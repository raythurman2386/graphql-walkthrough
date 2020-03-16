const db = require('../data/dbconfig')

class Model {
  constructor(tablename) {
    this.tablename = tablename
  }

  find() {
    return db(this.tablename)
  }

  findBy(filter) {
    return db(this.tablename)
      .where(filter)
      .first()
  }

  findById(id) {
    return db(this.tablename)
      .where({ id })
      .first()
  }

  add(item) {
    return db(this.tablename)
      .insert(item)
      .returning('*')
  }

  update(id, item) {
    return db(this.tablename)
      .where({ id })
      .update(item)
      .returning('*')
  }

  remove(id) {
    return db(this.tablename)
      .where({ id })
      .del()
  }
}

export default Model
