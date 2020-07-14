import { Model } from '@vuex-orm/core';

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.number(0),
      username: this.string(null),
      email: this.string(null),
      orders: this.hasMany('orders', 'userId'),
    };
  }
}
