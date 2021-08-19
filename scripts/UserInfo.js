export default class UserInfo{
  constructor({ title, subtitle }) {
    this._profileName = title;
    this._profileJob = subtitle;
  }

  getUserInfo() {
    const userInfo = {
      title: this._profileName.textContent,
      subtitle: this._profileJob.textContent,
    }

    return userInfo;
  }

  setUserInfo({ name, job }) {
    if (name) {
      this._profileName.textContent = name;
    }

    if (job) {
      this._profileJob.textContent = job;
    }
  }
}
