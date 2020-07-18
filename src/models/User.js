import { Model } from '@vuex-orm/core';

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.number(0),
      username: this.string(null),
      email: this.string(null),
      isCurrentUser: this.boolean(false),
      orders: this.hasMany('orders', 'userId'),
    };
  }

  static apiConfig = {
    actions: {
      current: {
        method: 'get',
        url: '/v1/users/current',
        dataTransformer: ({ data }) => {
          const modifiedRecord = { ...data, isCurrentUser: true };
          localStorage.setItem('currentUser', JSON.stringify(modifiedRecord));
          return modifiedRecord;
        },
      },
    },
  }

  static current() {
    return User.query().where('isCurrentUser', true).first();
  }
}
