import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { CONFIG } from '../../../config';
// import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  getToken() {
    return localStorage.getItem('admintoken');
  }
  // authHeader(headers: HttpHeaders) {
  //   //return new Headers({'x-access-token': this.getToken()});
  //   const token = this.getToken();
  //   console.log("token");
  //   console.log(token);
  //   if (token !== null) {
  //     headers.append('x-access-token', token);
  //   } 
  //   return headers;
  // }
  private _errorHandler(error: Response) {

    return throwError(error.json() || "Server Error");
  }

  public getAllUser(data: any, admintoken: any) {
    const url = `${CONFIG.API_ENDPOINT}userList?number=${data.number}`;
    let headers = new HttpHeaders().set('Accept', 'application/json');
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    return this._http.get(url,  {headers: headers} ).pipe(  
      catchError(this._errorHandler)
    );
  }


  public addUser(value: any) {
    // console.log(value);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    
    // let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'addUser';
    console.log(URL);
    console.log("---------------");

    return this._http.post(URL, value, {headers: headers} ).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }

  getCountries() {
    let headers = new HttpHeaders().set('Accept', 'application/json');
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let url = `${CONFIG.API_ENDPOINT}countries`;
    return this._http.get(url, {headers: headers}).pipe(
      catchError(this._errorHandler)
    );
  }

  doLogin(loginData: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'adminLogin';
    // alert(URL);
    console.log("========================")
    console.log(URL);
    console.log(loginData);
    return this._http.post(URL, loginData, options).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }

  forgotpassLinksend(forgotpassadmin: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'forgetpassLinksend';

    return this._http.post(URL, forgotpassadmin, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }

  forgotPassword(forgotPasswordData: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'forgotPassword';

    return this._http.post(URL, forgotPasswordData, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }

  updateUserData(updateData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updateUserData';

    return this._http.post(URL, updateData, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }

  deleteUserData(deleteUserData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteUserData';

    return this._http.post(URL, deleteUserData, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }

  updatePassword(updatePasswordData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updatePassword?token=' + admintoken;

    return this._http.post(URL, updatePasswordData, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }


  categoryListByType(data: any) {
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    // this.authHeader(headers);
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'categoryListByType';
    return this._http.post(URL, data, options).pipe(
      map((response: any) => response),
      catchError(this._errorHandler))
  }
  getAllCategories(data: any) {
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    //this.authHeader(headers);
    let options = { headers };
    let url = CONFIG.API_ENDPOINT + 'categorylist';
    return this._http.get(url, { headers }).pipe(
      catchError(this._errorHandler)
    );
  }
  getSubCategories(catData: any, admintoken: any) {
    console.log(catData);
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let url = CONFIG.API_ENDPOINT + 'subCategorylist';
    return this._http.post(url, catData, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }
  addCategory(data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'addCategory';

    return this._http.post(URL, data, options).pipe(
      map((response: any) => response)
    , catchError(this._errorHandler));
  }
  addSubCategory(data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.authHeader(headers);
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'addSubCategory';

    return this._http.post(URL, data, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }
  deleteSubCatData(deleteData: any, admintoken: any) {
    console.log("123");
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteSubCategory';
    // console.log(URL);
    return this._http.post(URL, deleteData, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }
  updateCatData(updateData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updateCategory';

    return this._http.post(URL, updateData, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }

  deleteCatData(deleteData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteCategory';
    console.log(URL);
    return this._http.post(URL, deleteData, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }

  updateSubCatData(updateData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updateSubCategory';

    return this._http.post(URL, updateData, options).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }
  public getKaraokeList(data: any, admintoken: any) {
    // console.log(data);
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };

    // return this._http.get(CONFIG.API_ENDPOINT + 'musicList', options)
    //   .map((response: Response) => response)
    //   .catch(this._errorHandler);
    let URL = CONFIG.API_ENDPOINT + 'musicList' + '?number=' + data.number;
    // console.log(URL);
    return this._http.get(URL, options).pipe(
      catchError(this._errorHandler));
  }

  deleteKaraoke(deleteData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteMusic';
    console.log(URL);
    return this._http.post(URL, deleteData, options).pipe(
      map((response: any) => response)
    ,catchError(this._errorHandler));
  }
  addKaraokeLyric(value: any, albumimage: any, karaokefile: any, lyricfile: any, dancefile: any) {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'addMusic';
    //console.log(file['File']);
    //value.files = file['File'];
    let formData: FormData = new FormData();
    // console.log(albumimage);
    // alert();
    formData.append('albumimage', albumimage);
    formData.append('karaokefile', karaokefile);
    formData.append('lyricfile', lyricfile);
    formData.append('dancefile', dancefile);
    formData.append('songs_name', value.songs_name);
    formData.append('artist_name', value.artist_name);
    formData.append('pcat_id', value.pcat_id);

    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    /* No need to include Content-Type in Angular 4 */
    //   headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };

    return this._http.post(URL, formData, options).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }

  updateMusicData(value: any, albumimage: any, karaokefile: any, lyricfile: any, dancefile: any) {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updateMusic';
    //console.log(file['File']);
    //value.files = file['File'];
    let formData: FormData = new FormData();
    // formData.append('_id', value._id); 
    for (var key in value) {
      formData.append(key, value[key]);
    }
    formData.append('albumimage', albumimage);
    formData.append('karaokefile', karaokefile);
    formData.append('lyricfile', lyricfile);
    formData.append('dancefile', dancefile);

    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    /* No need to include Content-Type in Angular 4 */
    //   headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers };

    return this._http.post(URL, formData, options).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }


  /* For CMS */
  getAllCms(data: any) {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    let options = { headers };
    let url =  CONFIG.API_ENDPOINT + 'listCms?size=' + data.size + '&number=' + data.number; 

    return this._http.get(url, options).pipe(
    catchError(this._errorHandler));
  }
  getCmsPage(data: any) {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    let options = { headers };
    let url = CONFIG.API_ENDPOINT + 'getCMSPage/' + data.page;
    return this._http.get(url, options,).pipe(
    catchError(this._errorHandler));
  }
  updateCmsData(updateData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'updateCmsData';

    return this._http.post(URL, updateData, options).pipe(
      map((response: any) => response)
      ,catchError(this._errorHandler));
  }
  deleteCms(deleteData: any, admintoken: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options =  { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteCms';
    console.log(URL);
    return this._http.post(URL, deleteData, options).pipe(
      map((response: any) => response)
      , catchError(this._errorHandler));
  }
  addCmsData(updateData: any, admintoken:any) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'addCMS';

    return this._http.post(URL, updateData, options).pipe(
      map((response: any) => response)
      , catchError(this._errorHandler));
  }

  /* end of CMS */

  //sreachIngredient
  sreachIngredient(data: any) {
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let options = { headers };
    let url = CONFIG.API_ENDPOINT + 'searchingredient?q=' + data.name + '&size=' + data.size + '&number=' + data.number;
    return this._http.get(url, options).pipe(
      catchError(this._errorHandler));
  }


  /**
   * delete Recipe
   */

  deleteRecipe(data: any) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    let URL = CONFIG.API_ENDPOINT + 'deleteRecepie?token=' + this.getToken();

    return this._http.post(URL, data, options).pipe(
      map((response: any) => response))
      , catchError(this._errorHandler);
  }


  /*
  *
  *searchuser
   
  *
  */

  searchuser(data: any) {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    const token = this.getToken();
    if (token !==null) {
      headers = headers.set('x-access-token', token);
    }
    let url = CONFIG.API_ENDPOINT + 'searchuser?name=' + data.name;
    let options = { headers };
    return this._http.get(url, options).pipe(
      catchError(this._errorHandler));
  }
}
