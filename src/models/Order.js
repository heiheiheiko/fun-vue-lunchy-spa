import { Model } from '@vuex-orm/core';
import User from './User';

export default class Order extends Model {
  static entity = 'orders'

  static fields() {
    return {
      id: this.number(null),
      site: this.string(null),
      orderdAt: this.attr(null),
      userId: this.number(null),
      user: this.belongsTo(User, 'userId'),
      createdAt: this.attr(null),
      updatedAt: this.attr(null),
    };
  }

  static apiConfig = {
    actions: {
      index: {
        method: 'get',
        url: '/v1/orders',
      },
    },
  }
}
