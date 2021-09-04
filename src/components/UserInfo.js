export default class UserInfo{
  constructor({ title, subtitle, avatar }) {
    this._profileName = title;
    this._profileJob = subtitle;
    this._profileAvatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      title: this._profileName.textContent,
      subtitle: this._profileJob.textContent,
    }

    return userInfo;
  }

  setUserInfo({ name, about, avatar }) {
    if (name) {
      this._profileName.textContent = name;
    }

    if (about) {
      this._profileJob.textContent = about;
    }

    if (avatar) {
      this._profileAvatar.src = avatar;
    }
  }
}
