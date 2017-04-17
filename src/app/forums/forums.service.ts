import { Injectable } from '@angular/core';
import { Data, Users } from './data';

@Injectable()
export class ForumsService {
  private _users = Users;
  private _data = Data;

  get forums() {
    return this._data;
  }

  forum(forumAlias: string) {
    return this._data.find(row => row.alias === forumAlias);
  }

  threads(forumAlias: string) {
    const forum = this.forum(forumAlias);
    return forum ? forum.threads : null;
  }

  thread(forumAlias: string, threadAlias: string) {
    const threads = this.threads(forumAlias);
    return threads
      ? threads.find(row => row.alias === threadAlias)
      : null;
  }

  get users() {
    return this._users;
  }

}
