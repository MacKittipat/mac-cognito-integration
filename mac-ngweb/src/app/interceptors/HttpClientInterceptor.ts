import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken: string = '';
    this.authService.getCognitoUserPool().getCurrentUser()?.getSession((err: any, session: any) => {
      accessToken = session.getAccessToken().getJwtToken();
    });

    console.log(accessToken);
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
    });

    return next.handle(authReq);
  }
}
