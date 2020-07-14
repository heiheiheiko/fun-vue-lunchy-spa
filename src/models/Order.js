import { Model } from '@vuex-orm/core';
import User from './User';

export default class Order extends Model {
  static entity = 'orders'

  static fields() {
    return {
      id: this.number(null),
      site: this.string(null),
      orderdAt: this.string(null),
      userId: this.number(null),
      user: this.belongsTo(User, 'userId'),
    };
  }
}
