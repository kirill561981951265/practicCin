import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import AddServices from "../services/AddServices";
import getServices from "../services/getServices";
export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }
  setLoading(bool) {
    this.isLoading = bool;
  }
  async login(login, password) {
    const response = await AuthService.login(login, password);

    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("id", response.data.userDto.id);
    localStorage.setItem("name", response.data.userDto.name);
    localStorage.setItem("login", response.data.userDto.login);
    localStorage.setItem("email", response.data.userDto.email);
    localStorage.setItem("status", response.data.userDto.status);
    return response;
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("login");
      localStorage.removeItem("email");
      localStorage.removeItem("status");
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    
      const response = await AuthService.checkAuth();
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    return response;
  }
  async AddFilm(formData) {
    const response = await AddServices.AddFilm(formData);
    return response;
  }
  async BuyTicket(tickets, sessions) {
    const response = await AddServices.BuyTicket(tickets, sessions);
    return response;
  }
  async addFavorite(idfilm) {
    const response = await AddServices.addFavorite(idfilm );
    return response;
  }
  async removeFavorite(idfilm, id) {
    const response = await AddServices.removeFavorite(idfilm );
    return response;
  }
  async DeleteTicket(idTicket) {
    const response = await AddServices.DeleteTicket(idTicket);
    return response;
  }
  async DeleteFilm(idFilm) {
    const response = await AddServices.DeleteFilm(idFilm);
    return response;
  }
  async DeleteUser(idUser) {
    const response = await AddServices.DeleteUser(idUser);
    return response;
  }
  async AddSession(formData) {
    const response = await AddServices.AddSessions(formData);
    return response;
  }
  async GetFilm() {
    try {
      const response = await getServices.getFilm();
      return response;
    } catch (error) {}
  }
  async GetFilmByName(search) {
    try {
      const response = await getServices.GetFilmByName(search);
      return response;
    } catch (error) {}
  }
  async GetHistory() {
    try {
      const response = await getServices.GetHistory();
      return response;
    } catch (error) {}
  }
  async GetTicketUser(formData) {
    try {
      const response = await getServices.GetTicketUser();
      return response;
    } catch (error) {}
  }
  async GetUserById() {
    
      const response = await getServices.GetUserById();
      return response;
 
  }
  async GetUsers() {
    try {
      const response = await getServices.GetUsers();
      return response;
    } catch (error) {}
  }
  async GetDataFilm(formData) {
    const response = await getServices.GetDataFilm(formData);
    return response;
  }
  async GetUserIntoSession(idsession) {
    const response = await getServices.GetUserIntoSession(idsession);
    return response;
  }
  async GetFavFilm(idfilm) {
    const response = await getServices.GetFavFilm(idfilm);
    return response;
  }
  async GetFavoriteFilm() {
    const response = await getServices.GetFavoriteFilm();
    return response;
  }
  async Dellorder(id) {
    const response = await getServices.Dellorder(id);
    return response;
  }
  async GetFilmGenre(formData) {
    const response = await getServices.GetFilmGenre(formData);
    return response;
  }
  async AddHall(formData) {
    const response = await AddServices.AddHall(formData);
    return response;
  }
  async GetFilmHall() {
    const response = await getServices.GetFilmHall();
    return response;
  }

  async ChangeUserInfo(formData) {
    const response = await AddServices.ChangeUserInfo(formData);
    return response;
  }

  async GetGenreFilm() {
    const response = await getServices.GetGenreFilm();
    return response;
  }
}
