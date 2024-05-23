import { HttpInterceptorFn } from "@angular/common/http";


export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token: string = localStorage.getItem('token') ?? '';
    console.log(`Token: ${token}`);
    request = request.clone({
        setHeaders: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    });
    console.log("Auth Interceptor: Request modified!")
    return next(request);
}